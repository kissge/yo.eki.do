---
from: wordpress
title: ファイルを番号順にソートする
date: 2014-07-23 23:21:28
---

連番が含まれるような名前のファイルがあったときに

```sh
$ ls
10.txt  11.txt  12.txt  13.txt  14.txt  15.txt  1.txt  2.txt  3.txt  4.txt  5.txt  6.txt  7.txt  8.txt  9.txt
```

という要領でアルファベット順にソートされてしまうが，

```sh
$ ls -v
1.txt  2.txt  3.txt  4.txt  5.txt  6.txt  7.txt  8.txt  9.txt  10.txt  11.txt  12.txt  13.txt  14.txt  15.txt
```

とすれば自然な順序になる．べんり．
<code>man</code> 曰く，

> -v natural sort of (version) numbers within text
