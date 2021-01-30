from: wordpress
title: Cygwin/X でウィンドウをリサイズしようとすると高さが潰れてしまう
date: 2014-08-05 04:38:45
--
最近自分のメイン端末には Windows 8.1 を入れて動かしているがやはり Linux が使えると色々と便利な場面も多い．
自分の場合は VirtualBox 上で Ubuntu を動かして Cygwin/X を使って仮想ネットワーク上の X11 forwarding によって Windows にウィンドウを持ってくるという若干遠回しな解決策でずっと運用していて，これが中々に快適．

が，Firefox とかいうよく分からないアプリケーションだけはなぜか描画が上手く行かず，ウィンドウをリサイズしようとすると高さがゼロになってにっちもさっちもいかなくなるという致命的なバグがある．

使わないからいいけれど．

と思っていたら Emacs をバージョンアップしたとたん同じことが起きるようになってしまった．

<!--more-->

で，ちょっと考えれば Emacs 23 と 24 で変わったことといえばデフォルトの Gtk+ のバージョンが変わったことがある (24.3 以降)．
<a href="http://www.gnu.org/software/emacs/news/NEWS.24.3">NEWS.24.3</a> 曰く，


<blockquote>
** The default X toolkit is now Gtk+ version 3.
If you don't pass `--with-x-toolkit' to configure, or if you use
`--with-x-toolkit=gtk' or `--with-x-toolkit=yes', configure will try
to build with Gtk+ version 3, and if that fails, try Gtk+ version 2.
You can explicitly require a specific version by passing
`--with-x-toolkit=gtk2' or `--with-x-toolkit=gtk3' to configure.
</blockquote>


とのこと．
というわけでもしかしてこいつかと思い，<code>--with-x-toolkit=gtk2</code> でビルドしなおしてみたところ，ばっちり元通りの挙動に．
どうせ上の方のツールボックスは非表示にしているので，Gtk+ 2 だろうが 3 だろうがあまり大差ない，と思う，たぶん．
Firefox のことは知らない．
めでたしめでたし．

