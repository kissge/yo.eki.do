---
from: wordpress
title: 'Emacs: re-builder + foreign-regexp.elでたのしい正規表現'
date: 2014-12-19 23:30:53
tags:
    - advent
---

この記事は<a href="http://qiita.com/advent-calendar/2014/emacs">Emacs Advent Calendar 2014</a>の第20日目の記事として書かれました．
第19日目はkawabata@githubさんによる「Emacs Lispの汎変数（とその他）」でした．
第21日目はsanryuuさんによる自作ツールの紹介の予定です．

<!--more-->

### イントロダクション

こんばんは．Emacsのお話をします．わたし自身あまりEmacsのさまざまな機能を使いこなせていないのでそういう読者を想定して書きます．

Emacsに限らずエディタで何らかのファイルを編集していると，たいていの場合正規表現による検索や置換が欲しくなります．
そしてEmacsには<code>re-builder</code>という素晴らしい機能があります．

<img src="/images/uploads/2014/12/Screen-Shot-2014-12-19-at-9.44.09-PM.png" width="582" height="533" class="alignnone size-full wp-image-184" data-wp-pid="184" />

これは正規表現クエリを書きながら，リアルタイムでそれにマッチする部分を確認出来るという便利なツールです．
しかし，Emacsの正規表現は御存知の通り少し面倒くさいです．というか結構面倒くさいです．
上のクエリは

    "^\\s-+<li>\\(.*\\)</li>"

ですが，これだけの長さの中にバックスラッシュが6回も出て来ます．
もちろんEmacs Lispを書くときにはコード中にEmacsの正規表現を書くはめになるわけですがあまり気の進む作業ではありません（個人の感想です）．
たいてい一発でうまくいかなくて適当にバックスラッシュを足したり引いたりするはめになります（個人の感想です）．
ここでPerl互換の正規表現が使えたら便利なわけです（若い方は耳慣れないかもしれませんがPerl互換のというのは正規表現につく枕詞です）．
そんな流れで今日紹介するのがforeign-regexp.elです．

### foreign-regexp.elの導入

というわけでforeign-regexp.elを導入してみましょう．
<a href="https://github.com/k-talo/foreign-regexp.el">https://github.com/k-talo/foreign-regexp.el</a>からforeign-regexp.elを入手し，パスの通った場所におきます（動かすだけなら他のファイルは無くとも問題ないようです）．
そして<code>.emacs</code>に

```lisp
(require 'foreign-regexp)

(custom-set-variables
'(foreign-regexp/regexp-type 'perl) ;; Choose your taste of foreign regexp
                                    ;; from 'perl, 'ruby or 'javascript.
'(reb-re-syntax 'foreign-regexp))   ;; Tell re-builder to use foreign regex.
```

と追加します．このコードで，foreign-regexp.elで使う正規表現をPerl, Ruby, JavaScript (node.js)から選んで指定し，re-builderで用いる正規表現も変更しています．
<code>autoload</code>で書きたい場合は<code>re-builder</code>か<code>foreign-regexp/re-builder/query-replace-on-target-buffer</code>に張ればいいでしょう（私はそうしています）．

これだけです．簡単ですね．

### つかってみる

あとはそんなに覚えるべきキーバインドも多くはないのですが……一応ひと通り使ってみましょう．
まず<kbd>M-s M-l</kbd>で<code>re-builder</code>を呼び出します．キャンセルして終了するときは<kbd>C-c C-q</kbd>です．
そして<code>*RE-Builder*</code>バッファで置換前にマッチする正規表現を入力します．

<img src="/images/uploads/2014/12/regex-fig-02.gif" width="555" height="525" class="alignnone size-full wp-image-192" data-wp-pid="192" />

完成したらこのままこれを置換クエリに持って行きましょう．
このバッファがアクティブなまま<code>foreign-regexp/re-builder/query-replace-on-target-buffer</code>を呼び出すと置換クエリにそのまま渡せます．
キーバインドは<kbd>M-s M-%</kbd>です．

<img src="/images/uploads/2014/12/regex-fig-03.gif" width="555" height="525" class="alignnone size-full wp-image-194" data-wp-pid="194" />

今はPerlの正規表現なので<a href="https://github.com/vim-jp/vimdoc-ja/issues/57#issuecomment-5841203">後方参照（前方参照）</a>も<code>$1</code>でしたね．あとは<kbd>y</kbd>または<kbd>n</kbd>で一つ一つの置換候補を実際に置き換えるか決定します．
一括で全て置き換える場合は<kbd>!</kbd>です．

<img src="/images/uploads/2014/12/regex-fig-04.gif" width="555" height="525" class="alignnone size-full wp-image-195" data-wp-pid="195" />

簡単でしたね．
嘆くらくはEmacs 24.4でforeign-regexp.elを使おうとすると

    Wrong type argument: commandp, ad-Orig-foreign-regexp/query-replace

と怒られて使えないことくらいでしょうか．ちょっと対処できるか頑張ってみましたが敗退してEmacs 24.3を使うことで対処しています．かなしい．

とはいえ今のは単純な例だったのでmultiple-cursors.elとか使えよ！とかそういう気もしますが，実際正規表現置換は使うので入れておくといざというときに便利です．
あとはvisual-regexp.elとかpcre2el.elとかも面白そうですよね．

何かあればコメント欄にくださいますと嬉しいです．
それでは．
