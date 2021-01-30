from: wordpress
title: コミット・タグを指定してその時点でのツリーだけをgit cloneしてくる
date: 2015-11-10 20:03:33
--
タイトルは若干釣りだが……。
超でかいプロジェクトがあって、その *ある時点での* ソースコードに対して `grep` とかしたい、というような状況で必要になった。

<!--more-->

やってみたところ、 *ある時点での* っていうところを満たすためには `git-clone` を使わないほうが近道だった。
こんな感じ。

    mkdir foo
    cd foo
    git init
    git remote add origin <cloneする元のURL>
    git fetch --depth 1 origin <コミットを指定するSHA1ハッシュやタグ名>
    git reset --hard FETCH_HEAD

`clone` を使わないのがちょっとおもしろい。ちょっと。
もちろん最新の `master` から取ってくるだけなら、たぶん `clone` すればよい。
