---
title: シェルスクリプトで `set -x` して実行するコマンドを都度表示するとき、実行時刻も表示できる
date: 2024-05-01T20:35:12+09:00
---

シェルスクリプトを書くとき、 `set -x` することで実行されるコマンドを都度表示できるのはよく知られている（？）。

```sh
set -x

date
sleep 1
date
```

```sh
$ bash test.sh
+ date
Wed May  1 08:32:59 PM JST 2024
+ sleep 1
+ date
Wed May  1 08:33:00 PM JST 2024
```

実はzshでは、実行時刻も表示させることができる。

```sh
PS4='[%*] + '
set -x

date
sleep 1
date
```

```sh
$ zsh test.sh
[20:34:13] + date
Wed May  1 08:34:13 PM JST 2024
[20:34:13] + sleep 1
[20:34:14] + date
Wed May  1 08:34:14 PM JST 2024
```

要するにプロンプトを自由に設定できるというわけ。

ちなみに、[`man 1 zshparam`](https://linux.die.net/man/1/zshparam#:~:text=PS4%20%3CS%3E,is%20%27%2B%20%27.) に `PS4` の説明があって、

> **PS4 &lt;S&gt;**
>
> The execution trace prompt. Default is '+%N:%i> ', which displays the name of the current shell structure and the line number within it. In sh or ksh emulation, the default is '+ '.


[`man 1 zshmisc` の「Simple Prompt Escapes」の節](https://linux.die.net/man/1/zshmisc#:~:text=%25*,format%2C%20with%20seconds.)に `%*` の説明がある。

> **%\***
>
> Current time of day in 24-hour format, with seconds.

---

……もうそろそろ、他人が使う可能性があるシェルスクリプトをzshで書いてもいいんですかねえ。
