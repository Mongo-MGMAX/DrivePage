# -*- coding: utf-8 -*-
"""启动 DrivePage · 打印机驱动检索（DrivePage）
用法:
    python launch.py              优先 Edge/Chrome 应用窗口模式打开
    python launch.py --browser     用系统默认浏览器标签页打开
"""
import os, subprocess, sys
from pathlib import Path

ROOT = os.path.dirname(os.path.abspath(__file__))
INDEX = os.path.join(ROOT, 'index.html')


def find_chromium():
    cands = [
        r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
        os.path.expandvars(r'%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe'),
    ]
    for c in cands:
        if os.path.isfile(c):
            return c
    return None


def main():
    file_url = Path(INDEX).as_uri()
    if '--browser' in sys.argv:
        # 默认浏览器打开
        os.startfile(INDEX)  # noqa
        print('[启动] 已用系统默认浏览器打开:', INDEX)
        return

    browser = find_chromium()
    if browser:
        # 应用窗口模式：独立窗口，无地址栏/标签页，更像桌面软件
        args = [
            browser,
            f'--app={file_url}',
            '--window-size=1480,940',
            '--window-position=center',
            '--no-first-run', '--no-default-browser-check',
            '--disable-features=Translate',
        ]
        try:
            subprocess.Popen(args, cwd=ROOT)
            print('[启动] 应用窗口模式 ->', os.path.basename(browser))
            return
        except OSError:
            pass

    # 兜底：默认浏览器
    os.startfile(INDEX)  # noqa
    print('[启动] 已用系统默认浏览器打开:', INDEX)


if __name__ == '__main__':
    main()
