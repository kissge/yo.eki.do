---
tags:
  - Windows
---

# OS

- セットアップ自体を英語でやる方が良い
  - そもそも聞かれるチャンスを見落としたことに気づかないまま進めがちなのでよく注意する（日本市場製品の工場出荷状態の場合、言語設定がスキップされているような気がする）
  - あとで規定の言語を英語にしても取り返せない（？）こと
    - メモ帳でバックスラッシュが円記号になる（Lucida Consoleなのに）
  - この辺は2022年現在は大丈夫そう（あとで規定の言語を変えれば問題が起きない）
    - デスクトップ等のディレクトリ名
    - PowerShellのフォント
- Microsoftアカウントのデメリットはない……？
  - ユーザーディレクトリがメールアドレスのlocal partになる

# 環境構築

- [winget](https://github.com/kissge/dotfiles/blob/master/windows/winget.json)
   1. `iwr https://raw.githubusercontent.com/kissge/dotfiles/master/windows/winget.json -OutFile winget.json`
   2. `winget import winget.json`
- Remote Desktopを有効化
- ThinkPad USB トラックポイントキーボードのドライバ https://support.lenovo.com/jp/ja/solutions/pd005137-thinkpad-usb-keyboard-with-trackpoint-overview （たぶん）

# WSL2

1. WSL2自体
   1. 多分 `wsl --install --no-distribution`
   2. https://github.com/nullpo-head/wsl-distrod （zipをダウンロードしてexeを実行するだけでOK）
2. Arch Linux
   - ベース
     1. `sudo pacman -S git zsh openssh nano`
     2. https://github.com/kissge/dotfiles
   - 設定
     1. `sudo env EDITOR=nano visudo`
     2. `sudo nano /etc/locale.gen && sudo locale-gen`
     3. pacman.conf: `Color`
   - パッケージ系
     1. https://github.com/Jguer/yay
     2. `yay -S bat docker tree optipng poppler python wget nkf nvm`
