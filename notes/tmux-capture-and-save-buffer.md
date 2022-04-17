---
from: wordpress
title: 'tmux: paneの表示内容をファイルに書き出す'
date: 2019-06-17T00:00:00+09:00
---

1. `C-b :` -> `capture-pane -S -9999999` -> Enter
2. `C-b :` -> `save-buffer /tmp/hoge` -> Enter
