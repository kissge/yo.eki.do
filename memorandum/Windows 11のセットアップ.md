---
tags:
  - Windows
---

# OS

- セットアップ自体を英語でやる方が良い（？）
  - 日本市場製品の工場出荷状態の場合、日本語LIPしか入っていないことが多い
    - OOBEの最中に <kbd>Shift</kbd> + <kbd>F10</kbd> でコマンドプロンプトを開き、PowerShellから `Install-Language -Verbose en-US` & `Set-WinSystemLocale en-US` すると英語でセットアップできる
  - あとで規定の言語を英語にしても取り返せない（？）こと
    - スタートメニューでメモ帳が「メモ帳」と日本語名で表示される
    - メモ帳でバックスラッシュが円記号になる（Lucida Consoleなのに）
      - → これはもしかしたら言語の優先順位のせいかも
  - この辺は2022年現在は大丈夫そう（あとで規定の言語を変えれば問題が起きない）
    - デスクトップ等のディレクトリ名
    - PowerShellのフォント
- Microsoftアカウントのデメリットはない……？
  - ユーザーディレクトリがメールアドレスのlocal partになる

# 環境構築

- [winget](https://github.com/kissge/dotfiles/blob/master/windows/winget.json)
   1. `iwr https://raw.githubusercontent.com/kissge/dotfiles/master/windows/winget.json -OutFile winget.json`
   2. `winget import --verbose --ignore-unavailable --accept-package-agreements --accept-source-agreements winget.json`
- Remote Desktopを有効化
- ThinkPad USB トラックポイントキーボードのドライバ https://support.lenovo.com/jp/ja/solutions/pd005137-thinkpad-usb-keyboard-with-trackpoint-overview （たぶん）

# WSL2

1. WSL2自体
   1. 多分 `wsl --install --no-distribution`
   2. 2025/3現在、 https://wiki.archlinux.org/title/Install_Arch_Linux_on_WSL#WSL_2.4.4_or_greater にある.wslファイルを使ったインストールが多分一番良い
2. Arch Linux
   - 事前準備
     - 以下のファイルをWindows上で一度開くことで、Dropboxにより実体がダウンロード済みな状態にしておく
       - `~/Dropbox/Settings/gitconfig`
       - `~/Dropbox/Settings/.line-api-token`
   - ベース
     1. `sudo pacman -S git zsh openssh nano diffutils less wget unzip`
     2. https://github.com/kissge/dotfiles
   - 設定
     1. `sudo env EDITOR=nano visudo`
     2. `sudo nano /etc/locale.gen && sudo locale-gen`
   - パッケージ系
     1. `yay -S bat jq tree optipng poppler python`
