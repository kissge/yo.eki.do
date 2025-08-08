---
title: 'WSL2がCatastrophic failure Error code: Wsl/Service/E_UNEXPECTEDと言って起動しなくなった'
date: 2025-08-09T05:38:00+09:00
---

ググって出てくる色々な対処法を試したが駄目だったので真剣に何が起きているか調べた。

まずGUIのWSL設定ユーティリティを開いてセーフモード起動を有効にしてみると一応起動した。
ただ `sudo` はModule is unknown、 `systemctl` はexec format errorで動かない。

無理やりrootでログインしてみる。

```bash
PS C:\Users\yk> wsl --user root -e zsh
wsl: SAFE MODE ENABLED - many features will be disabled
Gateau# ls -lS /usr/bin
total 159880
-rwxr-xr-x 1 root root   10322904 May  2 13:58  yay
-rwxr-xr-x 1 root root    8425600 Jul 21 18:16  xgettext
-rwxr-xr-x 1 root root    5841864 Apr 23 21:29  rsvg-convert

（中略）

-rwxr-xr-x 1 root root          0 Aug  2 04:56  bash
-r-xr-xr-x 1 root root          0 Aug  2 04:56  bashbug
-rwxr-xr-x 1 root root          0 Aug  6 02:50  bootctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  busctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  coredumpctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  homectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  hostnamectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  importctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  journalctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  kernel-install
-rwxr-xr-x 1 root root          0 Aug  6 02:50  localectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  loginctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  machinectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  networkctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  oomctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  portablectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  resolvectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-ac-power
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-analyze
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-ask-password
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-cat
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-cgls
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-cgtop
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-creds
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-cryptenroll
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-cryptsetup
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-delta
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-detect-virt
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-dissect
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-escape
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-firstboot
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-hwdb
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-id128
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-inhibit
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-machine-id-setup
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-mount
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-notify
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-nspawn
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-path
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-repart
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-run
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-socket-activate
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-stdio-bridge
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-sysext
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-sysusers
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-tmpfiles
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-tty-ask-password-agent
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-vmspawn
-rwxr-xr-x 1 root root          0 Aug  6 02:50  systemd-vpick
-rwxr-xr-x 1 root root          0 Aug  6 02:50  timedatectl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  udevadm
-rwxr-xr-x 1 root root          0 Aug  6 02:50  userdbctl
-rwxr-xr-x 1 root root          0 Aug  6 02:50  varlinkctl
-rwxr-xr-x 1 root root          0 Aug  3 22:38  wayland-scanner
```

`/usr/bin` の中身が色々と空になっている。なんじゃこれ。

とりあえず依存関係的に `bash` が必要なので、 `bash` を再インストールする。

```bash
pacman -S --overwrite "*" bash
```

これだけでセーフモード解除しても普通に起動するようになった。
久々に冷や汗をかいた。
