---
title: 'tmux: pane の表示内容をファイルに書き出す 2022'
date: 2022-04-17T21:25:08.254729000+09:00
---

tmux を使っていて、今表示されている画面の内容をコピーしたい、あるいはファイルに保存したいというときに使える方法の話。

以前「[tmux: pane の表示内容をファイルに書き出す](/notes/tmux-capture-and-save-buffer/)」というメモを自分で書いて、何だかんだいまだに毎月一回以上は自分で見ている。
なんで見ているかというと、シェル上で実行するコマンドはヒストリに残るのでそれを参照すればなんとかなるが、tmux コマンドはそうでない場面が多いという理由が大きい。

しかし、よくよく考えると、tmux コマンドもシェル上で実行できることに気づき、いろいろ試した結果、かなり簡略化できた。

つまり、tmux セッションのコピーしたい pane の中でこうすればよい。

```sh
tmux capture-pane -pS - > /tmp/hoge
```

`-p` は出力先をバッファではなく標準出力に指定し、 `-S -` は pane の先頭から（末尾まで）を対象範囲に指定している。

あるいは、tmux をローカル環境で実行している場合には、こういうこともできる^[xsel と xclip のどちらがイケてるかについては、諸説あるらしい。]。

```sh
# macOS
tmux capture-pane -pS - | pbcopy

# X
tmux capture-pane -pS - | xsel --clipboard
tmux capture-pane -pS - | xclip -sel clipboard
```

色などの情報を落とさずに出力するには、こうする。

```sh
tmux capture-pane -epS - > /tmp/hoge
```
