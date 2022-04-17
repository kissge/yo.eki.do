---
from: wordpress
title: GitHub上の画像をキャッシュクリアする
date: 2016-07-29 20:50:54
---

READMEで画像を使うことがあるが、実はあれファイルを外部サイトに置いていてもGitHubがキャッシュしてくれている。
曰く、セキュリティ上の理由だとか。
ただいつまでも古い画像が出ているとなんとなく気持ち悪いこともあるので（本当か？）このキャッシュを手動でクリアする方法がある。

<!--more-->

1. キャッシュされた画像のあるURLを調べる。たとえば右クリック→Copy Image Addressとか何かそんな感じのメニューがあるはず。
2. ターミナルで次のコマンドを実行する。

```
curl -X PURGE https://camo.githubusercontent.com/xxxxxxxxxxx....（当該のURL）
```

ちなみに単に公式のヘルプに書いてある。
Why do my images have strange URLs? - User Documentation - [https://help.github.com/articles/why-do-my-images-have-strange-urls/](https://help.github.com/articles/why-do-my-images-have-strange-urls/)
