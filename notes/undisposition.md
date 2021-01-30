from: wordpress
title: リンクをクリックしたとき強制的にファイルとして保存されるのを防ぐChrome拡張
date: 2015-06-03 22:11:03
--
Redmineとかで添付ファイルのPDFを見たいときにDownloadsフォルダが汚されるのが気に食わなかったので．Chrome以外のブラウザでは試していない．

<div class="github-card" data-github="kissge/undisposition" data-width="400" data-height="296" data-theme="medium"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

っていうのがあります．べんり．インストール方法は

0. <strong>GitHubに慣れていなければ右の方にあるZIPでダウンロードボタンを探す</strong>
1. chrome://extensions を開く
2. 「開発者モード」にチェックボックスが入っていなければ入れる
3. 「パッケージ化されていない拡張機能を読み込む…」
4. ダウンロードして展開した manifest.json のあるディレクトリを指定する

ってな感じ．ほかに書くことがない．
