---
from: wordpress
title: jQueryのmapは勝手にflattenする
date: 2016-12-27 21:08:02
---

<!--more-->

jQueryの `map` は勝手に中身をflattenする。つまり、

```html
<ul>
    <li>a</li>
    <li>b</li>
</ul>
<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>
```

というような構造があったときに

```js
$('ul').map((index, element) => $(element).find('li').map((index, element) => $(element).text()).toArray())
==> ["a", "b", "a", "b", "c"] // not [["a", "b"], ["a", "b", "c"]]
```

と勝手に入れ子になった配列がひとつの配列に変換されてしまう。
一応これはバグではなく仕様のようだ（[参考](https://bugs.jquery.com/ticket/10541)）。
どう対応するのがいいのかよく分からないが……dirty hackとしては戻り値をさらに配列でラップすると一応欲しいものは得られる。

```js
$('ul').map((index, element) => [$(element).find('li').map((index, element) => $(element).text()).toArray()])
==> [["a", "b"], ["a", "b", "c"]]
```

うーん、やだなあ。
同じ挙動は `jQuery.map` でも見られる。ただし引数の順番が逆だけど。

```js
$.map($('ul'), (element, index) => $.map($(element).find('li'), (element, index) => $(element).text()))
==> ["a", "b", "a", "b", "c"] // not [["a", "b"], ["a", "b", "c"]]

$.map($('ul'), (element, index) => [$.map($(element).find('li'), (element, index) => $(element).text())])
==> [["a", "b"], ["a", "b", "c"]]
```

やめてほしい。
