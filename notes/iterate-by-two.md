from: wordpress
title: 'Python: リストを2個ずつ巡回する'
date: 2016-11-18 02:07:05
--
Python: How to iterate through a list by two

<!--more-->

```python
it = range(10)
for a, b in zip(it, it):
    print('{} + {} = {}'.format(a, b, a + b))
```

一瞬これでいけるかな？と思うも

```
0 + 0 = 0
1 + 1 = 2
2 + 2 = 4
3 + 3 = 6
4 + 4 = 8
5 + 5 = 10
6 + 6 = 12
7 + 7 = 14
8 + 8 = 16
9 + 9 = 18
```

となるところ、ここに一行足して

```python
it = range(10)
itit = iter(it)
for a, b in zip(itit, itit):
    print('{} + {} = {}'.format(a, b, a + b))
```

とすると

```
0 + 1 = 1
2 + 3 = 5
4 + 5 = 9
6 + 7 = 13
8 + 9 = 17
```

となる。
`iter(it)` がポイント。
`Iterator` にすると内部状態を保持する兼ね合いでこういうことが起きるという感じか。（雑です）
Python 2の場合は `itertools.izip` とかを使う、たぶん。
