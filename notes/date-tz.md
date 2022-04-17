---
from: wordpress
title: date(1)でタイムゾーンを指定する
date: 2016-12-08 14:48:47
---

環境変数 `TZ` を使って

```sh
TZ=Asia/Tokyo date
```

とする。おわり。

（追記）
ちなみに `ls -l` でも使えるようだ。

```sh
TZ=Asia/Tokyo ls -l
```

こちらは `man` には書いていなかった。
