from: wordpress
title: 'Emacs: ファイル名補完で「Icon^M」を無視する'
date: 2014-12-16 22:21:21
--
Emacsでは<code>find-file</code>などでのファイル名補完で特定の拡張子のファイルを候補に含まないように設定できる．
たとえば.xlsxファイルをEmacsで開くことは普段はあまりないだろう．

<!--more-->

    (setq completion-ignored-extensions
          (append completion-ignored-extensions
                  '("./" "../" ".xlsx")))
    (defadvice completion-file-name-table (after ignoring-backups-f-n-completion activate)
      "filter out results when the have completion-ignored-extensions"
      (let ((res ad-return-value))
        (if (and (listp res)
                 (stringp (car res))
              (cdr res)) ; length > 1, don't ignore sole match
            (setq ad-return-value
                  (completion-pcm--filename-try-filter res)))))

（参考：<a href="http://stackoverflow.com/questions/1731634/dont-show-uninteresting-files-in-emacs-completion-window">autocomplete - Don't show uninteresting files in Emacs completion window - Stack Overflow</a>，Emacsのバージョンによって微妙にどこかを変えなければいけなかったような気がするけど忘れた）


で，マッキントッシュというオーエスでは<strong>油断すると</strong>「Icon\r」（\rは制御文字のCR, 0x0d）という名前のファイルが勝手に作られることがある（「Icon?」「Icon^M」に見える場合もあるだろう）．
普段は見えないので気にならないが，<strong>油断すると</strong>，例えばDropboxがヘマをすると見えるようになっていて，CRが含まれているせいで非常に邪魔だ．消したい．


が，<code>completion-ignored-extensions</code>にそのまま<code>"Icon\r"</code>とか<code>"Icon\\r"</code>とか書いてもうまくいかない．
何故ならばEmacsが自動的に<code>\r</code>を<code>\n</code>に変換してくれているからである．

このことは次のようにすると確かめられる．

    (car (file-name-all-completions "Icon" "~/Dropbox/"))
    => "Icon
    "

    (string= "Icon\n" (car (file-name-all-completions "Icon" "~/Dropbox/")))
    => t

（注．最後の<code>~/Dropbox/</code>を適当にIconからファイル名が始まるファイルがIcon\rしかないディレクトリに変える）

と，いうわけで<code>completion-ignored-extensions</code>には<code>"Icon\n"</code>を追加すればよい．
