# -*- coding: utf-8 -*-
"""Create the DrivePage desktop shortcut with Windows ShellLink COM.

The previous pure-struct implementation produced a shortcut that displayed an
icon but was not reliably executable by the Windows shell. This version uses
the official CLSID_ShellLink / IShellLinkW / IPersistFile implementation via
ctypes, so Explorer, Start Menu, and Start-Process all resolve it correctly.
"""
from __future__ import annotations

import argparse
import ctypes
import os
import sys
from ctypes import POINTER, byref, c_void_p, c_wchar_p, wintypes
from pathlib import Path


class GUID(ctypes.Structure):
    _fields_ = [
        ("Data1", wintypes.DWORD),
        ("Data2", wintypes.WORD),
        ("Data3", wintypes.WORD),
        ("Data4", ctypes.c_ubyte * 8),
    ]


def guid(value: str) -> GUID:
    result = GUID()
    hr = ctypes.windll.ole32.CLSIDFromString(
        c_wchar_p(value), byref(result)
    )
    if hr < 0:
        raise OSError(f"CLSIDFromString failed: 0x{hr & 0xFFFFFFFF:08x}")
    return result


CLSID_SHELL_LINK = guid("{00021401-0000-0000-C000-000000000046}")
IID_ISHELL_LINK_W = guid("{000214F9-0000-0000-C000-000000000046}")
IID_IPERSIST_FILE = guid("{0000010B-0000-0000-C000-000000000046}")

HRESULT = ctypes.c_long
CALLFLAGS = 1  # CLSCTX_INPROC_SERVER
COINIT_APARTMENTTHREADED = 2
SW_SHOWNORMAL = 1


def find_browser() -> str | None:
    candidates = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"),
    ]
    return next((path for path in candidates if os.path.isfile(path)), None)


def make_shortcut(
    target: str,
    arguments: str,
    working_dir: str,
    icon_path: str,
    output: Path,
    description: str,
) -> None:
    ole32 = ctypes.OleDLL("ole32")
    ole32.CoInitializeEx(None, COINIT_APARTMENTTHREADED)

    shell_link = c_void_p()
    hr = ole32.CoCreateInstance(
        byref(CLSID_SHELL_LINK),
        None,
        CALLFLAGS,
        byref(IID_ISHELL_LINK_W),
        byref(shell_link),
    )
    if hr < 0:
        raise OSError(f"CoCreateInstance failed: 0x{hr & 0xFFFFFFFF:08x}")

    vtable = ctypes.cast(
        shell_link, POINTER(POINTER(c_void_p))
    )[0]

    def method(index: int, result_type, *argument_types):
        return ctypes.WINFUNCTYPE(
            result_type, c_void_p, *argument_types
        )(vtable[index])

    set_path = method(20, HRESULT, c_wchar_p)
    set_arguments = method(11, HRESULT, c_wchar_p)
    set_working_dir = method(9, HRESULT, c_wchar_p)
    set_description = method(7, HRESULT, c_wchar_p)
    set_show_command = method(15, HRESULT, ctypes.c_int)
    set_icon = method(17, HRESULT, c_wchar_p, ctypes.c_int)
    query_interface = method(
        0, HRESULT, POINTER(GUID), POINTER(c_void_p)
    )
    release = method(2, ctypes.c_ulong)

    operations = [
        (set_path, (target,)),
        (set_arguments, (arguments,)),
        (set_working_dir, (working_dir,)),
        (set_description, (description,)),
        (set_show_command, (SW_SHOWNORMAL,)),
        (set_icon, (icon_path, 0)),
    ]
    for function, args in operations:
        hr = function(shell_link, *args)
        if hr < 0:
            raise OSError(f"IShellLink call failed: 0x{hr & 0xFFFFFFFF:08x}")

    persist_file = c_void_p()
    hr = query_interface(
        shell_link,
        byref(IID_IPERSIST_FILE),
        byref(persist_file),
    )
    if hr < 0:
        raise OSError(f"IPersistFile QueryInterface failed: 0x{hr & 0xFFFFFFFF:08x}")

    persist_vtable = ctypes.cast(
        persist_file, POINTER(POINTER(c_void_p))
    )[0]
    save = ctypes.WINFUNCTYPE(
        HRESULT, c_void_p, c_wchar_p, wintypes.BOOL
    )(persist_vtable[6])
    hr = save(persist_file, str(output), True)
    if hr < 0:
        raise OSError(f"IPersistFile.Save failed: 0x{hr & 0xFFFFFFFF:08x}")

    ctypes.WINFUNCTYPE(
        ctypes.c_ulong, c_void_p
    )(persist_vtable[2])(persist_file)
    release(shell_link)
    ole32.CoUninitialize()


def main() -> int:
    parser = argparse.ArgumentParser(description="Create the DrivePage shortcut.")
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Shortcut path; defaults to the current user's Desktop.",
    )
    args = parser.parse_args()

    desktop = Path(os.path.expandvars(r"%USERPROFILE%\Desktop"))
    root = Path(__file__).resolve().parent.parent
    index = root / "index.html"
    icon = root / "assets" / "drivepage.ico"
    output = args.output or (desktop / "DrivePage.lnk")
    browser = find_browser()

    if browser:
        arguments = (
            f"--app={index.as_uri()} "
            "--window-size=1480,940 "
            "--no-first-run --no-default-browser-check "
            "--disable-features=Translate"
        )
        make_shortcut(
            target=browser,
            arguments=arguments,
            working_dir=str(root),
            icon_path=str(icon),
            output=output,
            description="DrivePage · 离线打印机驱动检索",
        )
        mode = f"Edge/Chrome 应用窗口模式 ({os.path.basename(browser)})"
    else:
        # Last resort: use the stable launcher instead of relying on .html association.
        make_shortcut(
            target=r"C:\Windows\System32\cmd.exe",
            arguments='/c "' + str(root / 'launch.py') + '"',
            working_dir=str(root),
            icon_path=str(icon),
            output=output,
            description="DrivePage · 离线打印机驱动检索",
        )
        mode = "启动脚本（未找到 Edge/Chrome）"

    print(f"[OK] {mode}")
    print(f"     -> {output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
