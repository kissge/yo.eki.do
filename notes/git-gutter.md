---
from: wordpress
title: 'Emacs: git-gutter が便利過ぎる'
date: 2014-07-23 19:15:10
---

あまりに感動したのでつい．

SublimeText にある GitGutter という拡張の Emacs Lisp 版が git-gutter.el である．
簡単に言うと git リポジトリ内で編集中のファイルのどの行が変更されたのかなどを常に表示しておいてくれる．
たぶん <a href="http://emacs-jp.github.io/packages/vcs/git-gutter.html">git-gutter.el - Emacs JP</a> とかを見れば分かる．

<img src="/images/uploads/2014/07/git-gutter.png" alt="git-gutter" width="610" height="137" class="alignnone size-full wp-image-96" data-wp-pid="96" />
▲左側の緑色の "+" のところね．

<!--more-->

今回自分が導入したのは <a href="https://github.com/nonsequitur/git-gutter-fringe-plus">git-gutter-fringe+.el</a> という亜種で，<a href="http://www.emacswiki.org/emacs/FringeHelper">Fringe Helper</a> を使ってアイコンを表示するもの（元のバージョンでは表示用に別のバッファを使うようなトリッキィな感じになっている？らしい）．おすすめ．

もちろん git diff が常に表示できたり変更部分にジャンプできたりというのは素晴らしいのだがそれだけではない．
<code>git-gutter+-stage-hunks</code> という関数があって，これが何をやってくれるかというと「編集中のファイルの一部分だけをステージングする」というもの．
つまり，あるファイルの二箇所以上を編集していたとして，それらをひとつのコミットにするのではなく一箇所を変更したコミットを作ってから別の箇所を変更するコミットを作りたいときに，その中間ファイルを裏で作ってステージングしてくれる．

とにかく導入してよかった，簡単だったし．
ついでに Emacs のバージョンを 23 系から 24 に変えた．
今までの .emacs でほとんど変える必要がなく無事動いたが，<code>menu-bar-mode</code> と <code>tool-bar-mode</code> の引数を省略したときの挙動が変わったようなのでそこだけ修正．
