---
from: wordpress
title: EC2でL2TP/IPsec PSK VPNを立てる
date: 2017-06-12 23:17:55
---

特に必要性があるわけではないがEC2上でSoftEtherを立てる。注意点をメモしておく。

<!--more-->

と意気込んでみたものの、いざまとめてみると [AWS(EC2)でSoftEtherを使ってL2TP/IPsecなVPNを構築する (Mac) - Qiita](http://qiita.com/showwin/items/92861057a8b62611444d) をやっただけになった。書くことがない……。

一箇所記事に書いていないことがあり `vpncmd` でサーバの設定をしようとすると

    Error occurred. (Error code: 2)
    Protocol error occurred. Error was returned from the destination server.

と意味不明なエラーが出るという調べてもぱっとわからないところで詰まった。
これはデフォルトの443ポートが他のプロセスに使用されているせいのようだ。
このときは

    Hostname of IP Address of Destination:

と聞かれたときに `localhost:5555` と入力すればOK。かんたん。
