from: wordpress
title: 'TeX: \pagestyle{empty} してもページ番号が勝手に挿入される'
date: 2014-08-31 15:19:25
--
より正確に言うと，「最初のページにのみ」ページ番号が勝手に挿入される．
解決策は <code>\maketitle</code> よりも後に <code>\thispagestyle{empty}</code> を挿入すればよい．
どうも <code>\maketitle</code> の中で勝手に <code>\thispagestyle{plane}</code> か何かで上書きされているらしい．
<small style="font-size: medium; color: #eee;">2014 年にもなって何でこんなことになっているんだ．</small>

余談だけれど，LyX でこの問題に対処するいい感じの方法が思いつかなかったので，プリアンブルにこんな感じのハック（笑）を足すことで対応することにした．
<pre><code>\let\maketitlex\maketitle
\renewcommand{\maketitle}{\maketitlex\thispagestyle{empty}}
</code></pre>

