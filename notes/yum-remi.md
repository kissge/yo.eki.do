from: wordpress
title: yum upgradeしようとすると依存解決がうまくいかない
date: 2015-10-05 10:52:09
--
こんな感じで

    # yum --changelog upgrade
    Loaded plugins: changelog, fastestmirror
    Loading mirror speeds from cached hostfile
     * base: ftp.nara.wide.ad.jp
     * epel: ftp.riken.jp
     * extras: ftp.nara.wide.ad.jp
     * updates: ftp.nara.wide.ad.jp
    Resolving Dependencies
    --> Running transaction check
    ---> Package php-pecl-mongo.x86_64 0:1.6.2-1.el7.remi.5.6 will be updated
    ---> Package php-pecl-mongo.x86_64 0:1.6.11-1.el7 will be an update
    --> Processing Dependency: php(zend-abi) = 20100525-64 for package: php-pecl-mongo-1.6.11-1.el7.x86_64
    --> Processing Dependency: php(api) = 20100412-64 for package: php-pecl-mongo-1.6.11-1.el7.x86_64
    --> Finished Dependency Resolution
    Error: Package: php-pecl-mongo-1.6.11-1.el7.x86_64 (epel)
               Requires: php(zend-abi) = 20100525-64
               Installed: php-common-5.6.5-1.el7.remi.x86_64 (@remi-php56)
                   php(zend-abi) = 20131226-64
               Available: php-common-5.4.16-23.el7_0.3.x86_64 (base)
                   php(zend-abi) = 20100525-64
               Available: php-common-5.4.16-36.el7_1.x86_64 (updates)
                   php(zend-abi) = 20100525-64
    Error: Package: php-pecl-mongo-1.6.11-1.el7.x86_64 (epel)
               Requires: php(api) = 20100412-64
               Installed: php-common-5.6.5-1.el7.remi.x86_64 (@remi-php56)
                   php(api) = 20131106-64
               Available: php-common-5.4.16-23.el7_0.3.x86_64 (base)
                   php(api) = 20100412-64
               Available: php-common-5.4.16-36.el7_1.x86_64 (updates)
                   php(api) = 20100412-64
     You could try using --skip-broken to work around the problem
     You could try running: rpm -Va --nofiles --nodigest

<!--more-->

<del datetime="2015-10-24T04:38:32+00:00">まず読み方が分からなくて何が何やらという感じだったが、何の事はない、`php-pecl-mongo` を違うところ（remiレポジトリ）から入れてきたというだけの事だった。
というわけで

    # yum --enablerepo=remi-php56 install php-pecl-mongo

とかで解決。（これでいいんか）</del>

よくよく考えたら `/etc/yum.repos.d/*` を適切に編集して必要なレポジトリをenabledにするのがよい。何もわかっていなかった。 (2015-10-24)
