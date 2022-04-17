---
from: wordpress
title: Emacs 24 でクリップボードとの連携が上手くいかなくなった
date: 2014-07-23 22:14:19
---

<a href="/notes/git-gutter" title="Emacs: git-gutter が便利過ぎる">というわけで</a> Emacs 24 に晴れてバージョンアップすることになった．

<pre><code>M-; emacs-version
=> "24.3.1"
</code></pre>

一応そんなに破壊的な変更は無いと見ていたし，実際ほとんど .emacs に変更は必要なかったが，X 周りは若干変わった点があったので注意が必要．

<!--more-->


自分で今までに気づいた変更はクリップボードとの連携がうまくいかなくなったこと．
<a href="http://www.gnu.org/software/emacs/news/NEWS.24.1">NEWS.24.1</a> に記述があって，従来の挙動に戻す方法も書いてあるのでそれに倣えば OK.


<blockquote>** Selection changes.

The default handling of clipboard and primary selections has been
changed to conform with modern X applications.  In short, most
commands for killing and yanking text now use the clipboard, while
mouse commands use the primary selection.

In the following, we provide a list of these changes, followed by a
list of steps to get the old behavior back if you prefer that.

*** `select-active-regions' now defaults to t.
Merely selecting text (e.g. with drag-mouse-1) no longer puts it in
the kill ring.  The selected text is put in the primary selection, if
the system possesses a separate primary selection facility (e.g. X).

**** `select-active-regions' also accepts a new value, `only'.
This means to only set the primary selection for temporarily active
regions (usually made by mouse-dragging or shift-selection);
"ordinary" active regions, such as those made with C-SPC followed by
point motion, do not alter the primary selection.

**** `mouse-drag-copy-region' now defaults to nil.

*** mouse-2 is now bound to `mouse-yank-primary'.
This pastes from the primary selection, ignoring the kill-ring.
Previously, mouse-2 was bound to `mouse-yank-at-click'.

*** `x-select-enable-clipboard' now defaults to t on all platforms.

*** `x-select-enable-primary' now defaults to nil.
Thus, commands that kill text or copy it to the kill-ring (such as
M-w, C-w, and C-k) also use the clipboard---not the primary selection.

**** The "Copy", "Cut", and "Paste" items in the "Edit" menu are now
exactly equivalent to M-w, C-w, and C-y respectively.

**** Note that on MS-Windows, `x-select-enable-clipboard' was already
non-nil by default, as Windows does not support the primary selection
between applications.

*** To return to the previous behavior, do the following:

**** Change `select-active-regions' to nil.
**** Change `mouse-drag-copy-region' to t.
**** Change `x-select-enable-primary' to t (on X only).
**** Change `x-select-enable-clipboard' to nil.
**** Bind `mouse-yank-at-click' to mouse-2.</blockquote>
