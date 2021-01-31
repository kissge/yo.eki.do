from: wordpress
title: ウィンドウをドラッグしたまま画面の端にぐぐぐっと押し付けることで最大化したり画面サイズの半分の大きさに変えたりするやつをOS Xでやる
date: 2016-01-12 22:14:29
--
ウィンドウをドラッグしたまま画面の端にぐぐぐっと押し付けることで最大化したり画面サイズの半分の大きさに変えたりするやつをOS Xでやる方法について説明します。

<!--more-->

Windowsや大抵のLinux向けウィンドウマネージャではウィンドウをドラッグしたまま画面の端にぐぐぐっと押し付けることで最大化したり画面サイズの半分の大きさに変えたりすることが出来ます。
意味がわからない人はAero Snapとかでググっといてください。

このMicrosoftが2009年に発売したOSに搭載されている、ウィンドウをドラッグしたまま画面の端にぐぐぐっと押し付けることで最大化したり画面サイズの半分の大きさに変えたりする機能を当然OS Xでも使いたいわけですが、残念ながら2016年現在まだ実装されていないようです（El Capitanになんかよくわかんない変な機能があって対抗しているらしいけど知らん）。
というわけでOS X向けのさまざまなユーティリティがあってこれを模倣しようとする試みが長らくなされていたのですが、悲しむべきことにほとんどが有料（<a href="http://www.boastr.net/bettersnaptool/">例1</a>、<a href="https://itunes.apple.com/us/app/isnap/id420332190?mt=12">例2</a>、<a href="http://www.irradiatedsoftware.com/cinch/">例3</a>、<a href="https://bahoom.com/hyperdock/">例4</a>、<a href="http://www.nulana.com/flexiglass/">例5</a>）で、唯一無料だった<a href="https://www.boastr.net/">BetterTouchTool</a>も3ドルから（予定）のカンパウェアになることが発表されました。
というわけでフリーのツールで、出来ればオープンソースのもので、このウィンドウをドラッグしたまま画面の端にぐぐぐっと押し付けることで最大化したり画面サイズの半分の大きさに変えたりする機能を実現できないか探していたところ発見。

<x-script src="//cdn.jsdelivr.net/github-cards/latest/widget.js">
<div class="github-card" data-github="gbrueckner/Snapp" data-width="400" data-height="" data-theme="default"></div>
</x-script>

この間までEl Capitanのみ対応だったところ、プルリクをマージしてもらったのでYosemiteでも動くっぽいことになりました。
手元で使っている限りでは今のところ問題なく動いているようです。

<a href="https://camo.githubusercontent.com/5674e1cd8cc7633d037fffb25f30a1ee645a614c/68747470733a2f2f692e696d6775722e636f6d2f5354464b3471332e676966"><img src="https://camo.githubusercontent.com/5674e1cd8cc7633d037fffb25f30a1ee645a614c/68747470733a2f2f692e696d6775722e636f6d2f5354464b3471332e676966" /></a>
Image taken from <a href="https://github.com/gbrueckner/Snapp">https://github.com/gbrueckner/Snapp</a>.

使い方は簡単で、cloneしてきて（またはDownload ZIPをクリック）、ターミナルでそのディレクトリに入り `make` して `make install` するだけ。
ちなみに自分の場合は自動起動の機能がちょっとあやしいような気がするので（問題なく動くと言ったな、あれは嘘だ）Dockに追加してOptions > Open at LoginしてDockから消すというのをしました。

というわけでまだちょいちょいあやしいところもあるような気がするのでみんな使ってプルリクしような。
