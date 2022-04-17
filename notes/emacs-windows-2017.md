---
from: wordpress
title: 'Emacs: Windowsでやっていく2017'
date: 2017-12-08 00:00:08
tags:
    - advent
---

この記事は[Emacs Advent Calendar 2017](https://qiita.com/advent-calendar/2017/emacs)の第8日目の記事として書かれました。
第7日目は[yynozk](https://qiita.com/yynozk)さんによる「[Emacs の org-mode は表計算もできてしまう](https://qiita.com/yynozk/items/36a590b49a9237907335)」です。
第9日目は[tm_tn](https://qiita.com/tm_tn)さんによる記事の予定です。「何か書きます」とのこと。

<!--more-->

また騙されてWindowsに戻ってきてしまった。

先日買ったノートパソコンはMicrosoft Surface Book 2である。
性能も申し分ないし、タッチスクリーンの完成度は最高。てか267 dpiて。うちにある外付けモニタが馬鹿みたいに見えてしまって逆に困るレベルである。
とは言え誤算がひとつだけあって、このサーフェスブックにはマッキントッシュは入らないらしい。これでは★一つしかつけられそうにない。
インタネーットの情報では入ると聞いていたのだが、よくよく見てみるとSurface Bookの話であった。これはSurface Book 2。そのあたりで差が出たのだと思う。

冗談はさておき、しかしWindowsも悪くないものだ。
Windows上でEmacsユーザとしてやっていくことに関しては、もう5年以上のキャリアがある。
昔はUbuntu VM (VirtualBox) とX転送で頑張ったり、前C++とMSBuildでOSを書いていた時は普通にWindows版のGNU Emacsを使ったりしていたが、今回は最近めでたく正式リリースになったWindows Subsystem for Linux (WSL, 通称Bash on Ubuntu on Windows) を使って快適な作業環境を構築したいと思う。

## 1. WSLをセットアップする

WSLが何であるか、どうやってセットアップするかについてはインターネットで検索してもらいたい。
今回は初めてのインストールなのでBeta版を削除するなどの些細なことは気にしなくて良い。
とにかくMicrosoft Storeでアプリを導入するのと同じ感覚でUbuntuが使えるようになる。すばらしい。

## 2. Emacsを導入する

さて、無事Ubuntu 16.04.3が導入された。早速Emacsを導入したいが、どのバージョンを導入するか考える必要がある。

Emacs 24で満足できる人は、何も考えずに`apt install emacs`するだけで無事Emacsが導入できる。

Emacs 25を導入したい場合は、いろいろ手段はあるがkelleykのPPMを追加するのが一番簡単だろう。

```sh
add-apt-repository ppa:kelleyk/emacs
apt update
apt install emacs25
```

Emacs 27を導入したいなら、Ubunt Emacs Lisp teamの公開している[PPM](https://launchpad.net/~ubuntu-elisp/+archive/ubuntu/ppa)でemacs-snapshotを追加することになるだろうか。
開発中のバージョンであり高い頻度で更新される。

Emacs 26を導入するとなると、もうビルドするしかないのではないか？
幸い最近のWSLはかなり安定してきておりdependencyを正しく導入すると問題なくビルドできる。
Emacsのソースを管理するgitレポジトリは巨大なのでfetchを最小限に抑えるとかなり時間短縮になる (cf. [コミット・タグを指定してその時点でのツリーだけをgit cloneしてくる | 葉月夜堂](/notes/git-only-single-commit))。
dependencyの導入まで合わせて、こんな感じ。
<x-script src="https://gist.github.com/kissge/e925a60437aacac5475673c70bc496e8.js"></x-script>

## 3. Xサーバを導入する

最後にXサーバを導入すると完璧だ。
もちろんターミナルさえあれば何もいらないというハードコアな諸兄にとっては不要だろう。
しかし、GUIのほうが使える操作が増えるし使いやすいので個人的にはここまでおすすめしたい。

以前はXmingのフリー版 (Public Domain Release) かCygwin/Xらへんが定番だったような気がする。
調べたところVcxsrvかXmingの寄付版 (フリー版はこのソフトウェアの10年前のバージョン) を使うのが今風のようである。
初めて名前を聞くので今回は[Vcxsrv](https://sourceforge.net/projects/vcxsrv/)を導入してみたが、今のところ全く不安定さを感じる場面は無い。
GitHubを見ると更新が2年止まっているように見えるが、Sourceforgeではかなりアクティブにリリースされているようだ。

**追記 (12/10)**: VcXsrvを起動中にディスプレイの一つを切断するとVcXsrvがクラッシュすることがあるような気がします。

さて、ここまでセットアップを終えると無事GUI版のEmacsが使えるようになっているはずである。

```sh
DISPLAY=:0 emacs
```

![](/images/uploads/2017/12/emacs1.png)

ここからはもう少し細かいカスタマイズをしていく。

## スケーリング設定を切る

さて、Surface Book 2はいわゆるhigh-DPIディスプレイである。
あまりに1ピクセル（ソフトウェアから見た）の寸法（人間の目から見た）が小さすぎるので、工場出荷時にはスケーリングが200%に設定されている。
一方Vcxsrvは（ざっくり言うと）X転送ということでクライアント (Linux) 側でレンダリングされたビットマップをWindows上で表示するということをしている。
Vcxsrvの描画するウィンドウはWindowsのスケーリングをかけると単に画像が大きくなってしまってあまり見栄えがよろしくない、ということになる（ざっくり言うと）。
というわけでVcxsrv.exeを適切に設定してこのスケーリング設定を無効化してしまおう。
まずVcxsrv.exeのプロパティを表示する。ファイル自体は、Vcxsrvへのショートカットを右クリックして "Open file location" するのを繰り返して探し出すか、おそらくは`C:\Program Files\VcXsrv`にあるだろうから直接探す。
そして "Compatibility" タブの "Override high DPI scaling behavior. Scaling performed by:" の項目を "Application" に変えてしまえばOK。

![](/images/uploads/2017/12/emacs4.png)

**追記 (12/10)**: これ、やるのとやらないのでどちらが「きれい」か、あまり自明ではないですね。試行錯誤中です。切るとタイトルバーが馬鹿みたいに大きくなるのが癪なので再び有効にしてみているところ。

## いい感じの日本語フォントを導入する

何もしなくても日本語は表示されるはずである。が、句読点の位置が中国語のそれだったり、ちょっといまいち。
導入の手軽さもこみでGoogle/Adobe謹製のNotoフォントをおすすめする。
X転送ってどっちにフォント入れればいいのか忘れるけれど、今どきはとりあえずクライアント (Linux) 側ということになっている。
というわけでインストールはaptで簡単に。

```sh
apt install fonts-noto-cjk
```

Emacsのほうはこんな感じで設定を。

```lisp
(set-fontset-font "fontset-default" 'japanese-jisx0208 '("Noto Sans CJK JP Medium" . "iso10646-1"))
```

## 日本語入力

表示ときたら次は入力。
今回も使い慣れたmozc (Google日本語入力のオープンソース版)　とemacs-mozc-binでいく。
まずターミナルでサーバをインストールする。

```sh
apt install emacs-mozc-bin
```

Emacs側ではまず[mozc.el](https://raw.githubusercontent.com/google/mozc/master/src/unix/emacs/mozc.el)を手に入れ、`load-path`の通っているディレクトリに置く。
そして

```lisp
(setq default-input-method "japanese-mozc")
(require 'mozc)
```

あとは`M-x toggle-input-method`でIMEのオンオフが切り替えられる。好みに応じて`global-set-key`しておこう。
ちなみに全角半角キーは`(kbd "<zenkaku-hankaku>")`で指定できる。

蛇足だが個人的に気に入っているのでgnome-terminalも導入した（めちゃくちゃdependencyが多かった）。
こちらの日本語入力はいつものUbuntuと同じとはいかない。
残念ながらibusはうまく動かないようである。
今回は妥協してuim-fepとanthyを使うことにした。
こんな感じでターミナルの一番下の行を1行占領してしまうが、しょうがない。

![](/images/uploads/2017/12/emacs2.png)

gnome-terminalの設定で、起動するシェルをuim-fepにしておこう。
.bashrcで呼び出すように設定しても良いが、二重起動しないようにいろいろ頭を使うのが面倒だった。
Emacsの`shell`などで起動しないで欲しいという理由もある。

## Windowsから直接Emacsを起動する

さて、毎回Emacsを起動するためにWSLのターミナルを呼び出すのは面倒くさい。
WindowsからWSL上のコマンドを実行するのは簡単だ。
Windows + Rキーで開くファイル名を指定して実行 (Run) ダイアログなどからbashを呼び出すだけで良い。

```sh
bash -c "DISPLAY=:0 emacs"
```

しかし、これだと「黒画面」が表示しっぱなしになってしまう。
Emacsが終了するまでbash.exeのウィンドウが裏に表示されたままになってしまうのである。
そこでひと工夫加えてこうすれば良い。

```sh
bash -c "DISPLAY=:0 emacs &"
```

良い……んじゃないかと思う。自分のショートカット見たらこれじゃなくてrun.exe使ってて、あれ、&じゃダメな理由あったんだっけ……忘れた……。

ついでに、起動時のデフォルトディレクトリが変なディレクトリになって気に入らないので`bash -c "cd; DISPLAY=:0 emacs &"`などとしてしまっても良い。

言うまでもないことだがGUIウィンドウを使いたければXサーバが立っている必要がある。
Windowsの起動時に自動で起動するようにするのが簡単だろう。
エクスプローラのアドレスバーで`shell:startup`と指定すると開くディレクトリにVcxsrvへのショートカットを置くだけである。

## もちろんtramp-modeも使え……

これで概ね開発環境は整った！
あとはSSHの設定を適切に行いいつものようにtramp-modeで開発用のLinuxサーバのファイルを編集するだけである (cf. [Emacs: まだターミナルで消耗してるの？ | 葉月夜堂](/notes/tramp-mode))。

が、ここで重大な問題が発生する。

tramp-modeを使ってリモートファイルを編集し保存しようとすると、"Decoding remote file \`xxxx' using `xxxx'" のところでEmacsがハングしてしまうのである。
おまけに編集中のファイルは消滅してしまう。最悪だ。

うーん…………。
WSL, sshfsもまだ使えないみたいだし……。

うーん…………。

Emacsやめるか……。

　
　
　
　
　
　

というわけで他のエディタを導入してみる。
実を言うと時代遅れのEmacsなんてはやく辞めたかったのである。
時代はElectron製イケてるエディタやな！！


　
　
　
　
　
　

が、やっぱりダメ。
エディタを起動したらまず`find-file`したい。
GUIのファイルオープンダイアログなんか使いたくない。
プロジェクトにファイルがありませんじゃない。IDEじゃなくてエディタが欲しいんだよ。

てかリモートファイル編集がないって何？&#128162;
ファイルをダウンロードして編集して保存してアップロードするのか？sshしてターミナルで操作の限定された状況でファイルを編集するのか？サーバを立てるごとに環境構築して？
21世紀なのに？え？


というわけでやっぱりEmacsを使うしか無い（個人の感想です）という結論に。
個人の感想ですよ。
Atomの[ftp-remote-edit](https://atom.io/packages/ftp-remote-edit)はいい線いってると思いますよ。


　
　
　
　
　
　

ともかく気を取り直して頑張ってtramp-modeをデバッグする。
どうやらEmacs 25, 26, 27いずれも同様の問題があるらしいことがわかった。
（蛇足だがEmacs 26, 27だとGUIで文字が描画されず使い物にならなかった……gtk+ 2, 3両方試してもダメ。あとtrampもファイルを開くたびになんかエラー出る）

基本通りedebugをアタッチしてみると、`process-send-string`でbase64エンコードした文字列を送りリモートシェルでデコードする部分で処理が止まってしまうことがわかる。
この問題は比較的小さいファイルを編集するときには起きないようだ。
そこで、一回に送る文字列の長さを制限してみる。

```lisp
(custom-set-variables '(tramp-chunksize 1024))
```

数字は適当である。
が、これがうまくいった。
とりあえず今のところ問題は再発していない（10240はダメだった）。

一応`tramp-chunksize`をいじるのはWSL上だけに制限しておこう。
WSLかどうか判定するのはこういう感じで。

```lisp
(string-match-p "Microsoft" (shell-command-to-string "uname -r"))
```

というわけでどうにか開発環境として日常的に使えるように出来た。
これがEmacsの問題だったのかtramp-modeなのかWSLなのか、よくわからない。どこかに報告したほうがいいのかもしれない。
いずれにせよこれでコードが書ける。
よかった。

大変なこともあったけど、2017年現在、Windowsでやっていけそうです。
しかも（一応）案外簡単に。

![](/images/uploads/2017/12/emacs3.png)

またEmacsを卒業しそびれてしまったねえ。
