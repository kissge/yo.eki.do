---
from: wordpress
title: 二段組みのPDFを読みやすく変換する
date: 2014-12-10 22:31:22
---

本当はこんなことやってる場合じゃないんですけれど（！）あまりに感動したので書いておく．

<!--more-->

PDFファイルの論文を読むときに一段組み（？）ならば上から下に目線を進めればよいが二段組みだとそういうわけにいかず随分前から不便に思っていた．
で，最近見つけた<a href="http://willus.com/k2pdfopt/">k2pdfopt</a>というツールがかなり便利．
Windows, Linux, OS Xで動く．素晴らしい．
導入はシンプル．配布のバイナリを落としてきてパスの通ったディレクトリに保存，<code>chmod +x</code>する（パッケージ管理システムで導入できたりするのかな．無さそうだった）．
普通にGUI版も各OS用にあるし，CUI版がいい人はこれでいい．

で．

こういう感じの二段組みのPDFを与えると，

<img src="/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.14.28-PM.2.png" alt="" width="206" height="291" class="alignnone size-full wp-image-164" data-wp-pid="164" />

こういう感じでいい感じにパーツを認識してくれて（※注：この中間ファイルを出したい場合は <code>-sm</code> オプションを付けて実行すればよい），

<img src="/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.05.58-PM.2.png" alt="" width="207" height="290" class="alignnone size-full wp-image-165" data-wp-pid="165" />

こういう感じに出力してくれる．

<img src="/images/uploads/2014/12/Screen-Shot-2014-12-10-at-10.06.07-PM.2.png" alt="" width="300" height="610" class="alignnone size-full wp-image-166" data-wp-pid="166" />

単純な二段組じゃなくて図とかが入っているが，見事にいい感じにしてくれている．
素晴らしい．

もちろん画像化などはしていない．
クリップボードにコピーしてみるとちょっと怪しい感じになるところもあるが……，まぁ単語単位でならある程度検索もできるし．
特に困らない．
素晴らしい．

二段組みの変換以外にも電子書籍リーダに最適化させるなどいろいろ使い道がありそう（というかこのツール自体がKindleで動くらしい．すごい）．

参考までに自分が上の変換に使ったコマンドラインオプション．

    k2pdfopt -ui- -n -w 1.0s -h 1.0s -om 1,0.5,1,0.5 -c -wrap- -col 2 <****.pdf>

文字をもっと大きくしたり，あるいは原寸のままにして書き込み用の余白を大きく取ったり，色々カスタマイズするといいかも．
