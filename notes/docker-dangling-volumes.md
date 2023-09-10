---
title: Dockerのdangling volumesを削除したらSSDが177GB空いた
date: 2023-09-10T17:24:00+09:00
---

最近開発用のLinuxマシンが常時ストレージ不足で困っていた。原因は明らかで、 `/var/lib/docker/` が200GB以上も占めていた。

しかし、 `docker system prune` やら `docker volume prune` やらを実行してもわずかしか余裕が生まれず、ちまちま消せそうなファイルを探して何とか耐えていたが、さすがにきつくなったので真剣に調べたところ、dangling volumesというものが非常に大きな容量を占めていた。
dangling volumesというのは（dangling imagesとは違って）単にどのコンテナにもアタッチされていないボリュームのことで、 `docker system prune` では安全のため削除されない。
そしてボリュームというのは、例えばDockerfileに `VOLUME` が指定されているだけで、そのイメージを使ってコンテナを立ち上げるたびに作成される。
通常これはanonymous volumeになる。

`docker volume prune` でこれらのanonymous dangling volumesを削除することができなかったのは、どうやらDockerの挙動変更のため、古いAPI時代に作られたanonymous volumeは削除されないということらしい。

> [**docker/cli#4028** volumes wont be deleted since update to docker 23](https://github.com/docker/cli/issues/4028)
>
> [cpuguy83 on Feb 8](https://github.com/docker/cli/issues/4028#issuecomment-1429538131):
>
> It does mean that upgrading causes volumes which were created prior to 23.0.0 to not be considered for pruning except for when specifying `--all`.


とにかく、以下のコマンドでリストアップしてみると大量にあることが分かった。

```bash
docker volume ls -f dangling=true --format json
```

なぜかdry-runオプションがないのが嫌だが、 `docker volume prune --all` (Docker API 1.42～) でこれらのdangling volumesが消せる。
（本当にanonymousでないvolumeも消すしかないが、うーん、しょうがないか？　一応mountpointを手動で消すという手はあるが……）

これだけでSSDが177GB空いた。
めちゃくちゃびっくりした。
