---
from: wordpress
title: 'jediとかvirtualenvとかがReason: image not foundと言ってぶっ壊れたときの対処'
date: 2016-08-26 00:17:53
---

ある日突然jedi（EmacsでPythonを書くときにつかうすごいやつだよ）がぶっ壊れた。
python-modeのバッファでピリオドを打つたびに

    Error (jedi): Failed to start Jedi EPC server.
    *** You may need to run "M-x jedi:install-server". ***
    This could solve the problem especially if you haven't run the command yet
    since Jedi.el installation or update and if the server complains about
    Python module imports.

というメッセージが出てくるし、当然補完機能は使えない。
指示通りコマンドを実行しても何も起きない。

<!--more-->

よくみると\*Messages\*に

    Server may raise an error. Use "M-x epc:pop-to-last-server-process-buffer RET" to see full traceback:

とあるのでtracebackを見てみると

    dyld: Library not loaded: *****
      Referenced from: *****:
      Reason: image not found

という見慣れないエラーがある。なんだこれ。

### 原因

簡単に言うとvirtualenvが壊れていた。
私の環境では `(custom-set-variables '(jedi:environment-root "jedi"))` という[感じ](https://github.com/kissge/.emacs.d/blob/master/inits/15-python.el#L8)でvirtualenvを使う設定になっているのだが、そのディレクトリの中にある大量のシンボリックリンクがいずれもリンク切れになっていた。
homebrewでPythonをバージョンアップしたためである。

と、いうわけで、このディレクトリを削除して作りなおすと万事うまくいった。よかった。

あんまし関係無いけど、この問題に対処する隙がない間エラーを無視してとりあえずjediを `el-get-remove` しようとしたら `auto-complete` がないから無理〜と言って怒られたのは納得がいかない。
jediさん何とかして。
