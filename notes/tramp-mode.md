---
from: wordpress
title: 'Emacs: まだターミナルで消耗してるの？'
date: 2015-12-04 23:00:02
tags:
    - advent
---

この記事は<a href="http://qiita.com/advent-calendar/2015/emacs">Emacs Advent Calendar 2015</a>の第5日目の記事として書かれました。
第4日目は<a href="http://qiita.com/niku">niku</a>さんによる記事の予定です。「org-babelについて書くかも」とのこと。
第6日目は<a href="http://qiita.com/takaxp">takaxp</a>さんによる記事の予定です。「何も書かずに2015年を終えられると思うほど堕落してはおらんっ」とのこと。

<!--more-->

## ずいぶんとダサい開発をしているのね

所属柄私の周りには少なくないEmacsユーザがいるのに、だれも `tramp-mode` のことを知らないようでここ数ヶ月で2、3回同じことを説明するはめになったのでついでにここにも書くことにします。
初心者に説明する意図での記述なのでコアなユーザの方には物足りないものかもしれません。

さてみなさん普段GUIでEmacs使ってますか？
使ってるのにときどきCUIを使わざるを得ないという状況に陥りますか？
だいたいそういうケースは次のどちらかのパターンなのではないでしょうか。

1. rootとしてファイルを開きたい（`sudo` したい）とき
2. ssh先のサーバ上でファイルを編集したいとき

まあどちらもままあることです。2. に至っては「手元（ローカル）のEmacsとで設定ファイルが共有されていないから不便／共有するのが面倒」なんてことになってませんか？よくないやつですね。
こういった問題を全て解決する簡単な方法のひとつが `tramp-mode` です。

## `tramp-mode` で `sudo` してみる

というわけで幾つかの使用例を見てみましょう。
`tramp-mode` はいま普通にEmacsを使っているユーザの大半の環境では最初から入っているかと思いますが、22.1より古いバージョンを使っている方が万が一いればEmacsをバージョンアップしてください。

たとえば `/etc/httpd/conf/httpd.conf` を開くとき、普通に開くとread-onlyとなり

    Note: file is write protected

と怒られるかと思います。これをrootとして開くには次のように

    C-x C-f /sudo::/etc/httpd/conf/httpd.conf

と `find-file` に渡すパスの前に `/sudo::` を追加するだけです。
`/su::` なら更に短縮できますね（挙動の違いは見てお分かりの通りです）。

## `tramp-mode` でssh先のサーバ上のファイルを編集してみる

同じように、sshで接続できる外部サーバ上のファイルを開くには

    C-x C-f /user@example.com:path/to/file

です。ユーザ名とホスト名のあとは `/` からはじめてフルパスを書くか、あるいは `$HOME` からの相対パスを書くことが出来ます。
実はこの記法は接続メソッドが自動でデフォルトで補われているもので、次の略記です。

    /scp:user@example.com:path/to/file

この `scp` はいくつかある接続メソッドの一つです。
メソッドを省略した場合は `tramp-default-method` という変数の内容を見て決定されます。
Emacs 24.3くらいまではこの変数のデフォルト値は `scpc` だったような気がしますが廃止されました。
`scp` では基本的にホストとの接続はsshで行われ、ファイルの転送はscpで行われます。
頻繁にファイルを開いたり閉じたりする場合にはscpのオーバヘッドが効いて、すべてsshで行う `ssh` というメソッドのほうが速い場合もあります。

ちなみに `shell` も開けるし `compile` だって出来ます。便利〜

## ssh先からsshした先のファイルを編集する

何だか日本語が怪しいですが、いわゆる踏み台サーバみたいなものが中間にある状況です。これもままあるかとおもいます。
もっともよい解決策はsshのconfigに `ProxyCommand` を設定することでこのホップを自動で行わせることでしょう。
たとえば `example1.com` に繋ぐために `example2.com` に一旦繋ぐ必要がある場合には、sshのconfig（たとえば `~/.ssh/config` ）に

    Host example1
        HostName example1.com
        ProxyCommand ssh example2 -W %h:%p 2> /dev/null
    Host example2
        HostName example2.com

などと書くことでターミナルから

```sh
$ ssh example1
```

だけで一発で目的のホストに繋ぐことが出来ます。この設定をしているときにはEmacsで

    C-x C-f /example1:path/to/file

とするとこのホップを裏で自動で行ってもらうことが出来ます。

もう一つの方法は `tramp-mode` で明示的にホップさせることです。
おそらくいま使われているような最近のバージョン (24.3以降) ですと

    C-x C-f /ssh:example2.com|ssh:example1.com:path/to/file

で同じことが出来るかと思います。

## ssh先でsudoする

ここまで読むともう次に何をするかはおわかりでしょう。実際ssh先でroot権限でファイルを読むこともよくありますよね。

    C-x C-f /ssh:user@example.com|sudo:example.com:/etc/httpd/conf/httpd.conf

## 陥りがちなトラップ

いくつか注意点のようなもの。

ホップして踏み台越しの接続をするときに `/ssh:foo|sudo:foo:/etc/...` のように `ssh` を省略することは出来ません。
上述のようにこの場合デフォルトの `scp` が使用されますが、このメソッドはホップに対応していません。
また、`sudo::` とホストを省略する記法もここでは使えません。

また、 `tramp-mode` で繋ぐ先のホストのログインシェルがzshの場合、接続がうまくいかない場合があります。
よく見受けられる対処法（私も使っています）は、 `.zshrc` の1行目にEmacsからの接続を識別する場合分けを追加することのようです。

```sh
[[ $TERM == "dumb" ]] && unsetopt zle && PS1='$ ' && return
```

もう一点上級者向けっぽいことを書くと、システムグローバルな設定のままControlMasterを使うようにカスタマイズする場合、Emacsで最初にshared connectionを開いてからターミナルなどでsshセッションを開き、Emacsを終了するとターミナルの方も同時に落ちる、というようなことになる場合があります。
このへんは好き好きというか、一般にどうするのがよいのか不明です。
カスタマイズしなければ関係ないですが。

## 結論：便利なので使いましょう

というわけで画像もなくずらずらと使い方を書いてみました。
本当にstraightforwardなのでとくに説明することもないですね。インストールもないし。
ご存知なかった方はぜひぜひ使い倒してみてください。
ではでは。

## ところで関係ないけど

Emacs 24.5で `;;;###tramp-autoload` にバグがあるような気がするのですがHEADで再現しないのでどこかに報告したほうがいいのかどうなのか分からずにいる。
具体的には

<x-script src="https://gist.github.com/kissge/a9f1c59959181856280f.js"></x-script>

を使って

```sh
emacs -q -l init.el
```

などとして起動した後

    C-h v tramp-verbose

とすると設定通り変数が変更されているのが確認できるが

    C-h v tramp-use-ssh-controlmaster-options

とするとデフォルトの設定で上書きされている。
`tramp-use-ssh-controlmaster-options` 以外にも `;;;###tramp-autoload` が指定されている変数で同様の現象が確認できる。

