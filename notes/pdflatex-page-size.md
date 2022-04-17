---
from: wordpress
title: pdflatex で US Letter の文書を出力する（PDF のページサイズを設定する）
date: 2015-07-12 23:23:47
---

ACM にカメラレディ論文を提出するために<a href="http://www.sheridanprinting.com/typedept/ACM-DL-pdf-requirements.htm">要項</a>を見ていたところ，ページのサイズは US Letter (8.5 in \* 11 in) でなければならないと書かれていた．
慌てて自分の手元のファイルを pdfinfo で調べてみると

    Page size:      595.276 x 841.89 pts (A4)

と言われたので，ページサイズを設定する方法を調べた．

<!--more-->

まず，指定のスタイルファイル (.cls) を使っているのになんで A4 になるんだ？と思って調べてみたところ，デフォルトのページサイズがシステムワイドに設定されており，何も指定しないとそのサイズの PDF が出力されるようだ．
手元の環境 (OS X Yosemite, TeX Live 2014) だと

```sh
$ tlmgr paper
Current context paper size (from /usr/local/texlive/2014/texmf-config/tex/context/user/cont-sys.tex): a4
Current dvipdfmx paper size (from /usr/local/texlive/2014/texmf-config/dvipdfmx/dvipdfmx.cfg): a4
Current dvips paper size (from /usr/local/texlive/2014/texmf-config/dvips/config/config.ps): a4
Current pdftex paper size (from /usr/local/texlive/2014/texmf-config/tex/generic/config/pdftexconfig.tex): a4
Current psutils paper size (from /usr/local/texlive/2014/texmf-config/psutils/paper.cfg): a4
Current xdvi paper size (from /usr/local/texlive/2014/texmf-config/xdvi/XDvi): a4
```

と，見事にすべて A4 になっている．
これを変えるというのも手軽そうだが，TeX ファイルを他の人とやりとりするときに人によって違うものが出力されるようでは困るので，やはりファイルの中で何らかの指定をしたい．
ps2pdf を使っている場合コマンドライン引数に <code>-sPAPERSIZE=a4</code> とするだけで良い<a href="https://en.wikibooks.org/wiki/LaTeX/Page_Layout#Page_size_issues">っぽい</a>が，今回は pdflatex を使っていたのでそのようなオプションは無さそうだった．

もうちょっと調べると<a href="https://engineering.purdue.edu/~mark/puthesis/faq/margins-pdflatex/">こういうの</a>が出て来て

```tex
\special{papersize=8.5in,11in}
\setlength{\pdfpageheight}{\paperheight}
\setlength{\pdfpagewidth}{\paperwidth}
```

を <code>\begin{document}</code> のあとに足せば良いとのこと．やったー．確かにページサイズが変わった．

と思ったら，変わったのは変わったのだが，

    Page size:      627.915 x 819.198 pts

とまた別のサイズになってしまった．

んで，<strong>なんかよくわからないけど</strong>，

```tex
\special{papersize=8.5in,11in}
\setlength{\pdfpageheight}{11in}
\setlength{\pdfpagewidth}{8.5in}
```

とすれば

    Page size:      612 x 792 pts (letter)

となるっぽい．<strong>なんかよくわからないけど</strong>．
