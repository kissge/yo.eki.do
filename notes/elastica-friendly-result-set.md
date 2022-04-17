---
from: wordpress
title: Elasticaの戻り値をいい感じにラップするライブラリを書いた
date: 2016-07-27 05:34:31
---

PHPでElasticSearchをあつかうときの定番ライブラリに[Elastica](https://github.com/ruflin/Elastica)というものがある。
Symfonyで扱うときはこれをさらにラップした[FOSElasticaBundle](https://github.com/FriendsOfSymfony/FOSElasticaBundle)を使うとよい。

Elasticaの難点として、クエリを投げて帰ってくる結果が連想配列で得られるのだが、これが無駄に深いネストがあったりして地味に使いづらい。

<!--more-->

```php
$result = $index->search($query)->getAggregations()
```

こんな感じで結果を取るとすると

```php
[
    'interval' => [
        'buckets' => [
            [
                'key_as_string' => '2016-05-31T15:00:00.000Z',
                'key' => 1464706800000,
                'doc_count' => 1000,
                'editor' => [
                    'doc_count_error_upper_bound' => 0,
                    'sum_other_doc_count' => 0,
                    'buckets' => [
                        [
                            'key' => 'Emacs',
                            'doc_count' => 800,
                        ],
                        [
                            'key' => 'nano',
                            'doc_count' => 200,
                        ],
                    ],
                ],
            ],
            [
                'key_as_string' => '2016-06-30T15:00:00.000Z',
                'key' => 1467298800000,
                'doc_count' => 2000,
                'editor' => [
                    'doc_count_error_upper_bound' => 0,
                    'sum_other_doc_count' => 0,
                    'buckets' => [
                        [
                            'key' => 'SublimeText',
                            'doc_count' => 1800,
                        ],
                    ],
                ],
            ],
        ],
    ],
]
```

こんな感じで返ってきたりするので

```php
$result['interval']['buckets']['editor']['buckets']['doc_count']
```

とかやって欲しいデータを取る。
ちょっと指が疲れて微妙なのでこの辺をいい感じにラップするライブラリ[ElasticaFriendlyResultSet](https://github.com/kissge/ElasticaFriendlyResultSet)を書いた。

<x-script src="https://cdn.jsdelivr.net/github-cards/latest/widget.js">
<div class="github-card" data-github="kissge/ElasticaFriendlyResultSet" data-width="400" data-height="296" data-theme="medium"></div>
</x-script>

これを使うと

```php
$result->interval->editor->doc_count
```

となる。

……あんまり変わってないじゃん！と思うかもしれないが、これをtwigから呼ぶと

```twig
{{ result['interval']['buckets']['editor']['buckets']['doc_count'] }}
```

が

```twig
{{ result.interval.editor.doc_count }}
```

になったり

```twig
{% for interval in result['interval']['buckets'] %}
    {% for editor in interval['editor']['buckets'] %}
        {{ editor['key'] }}: {{ editor['doc_count'] }}<br />
    {% endfor %}
{% endfor %}
```

が

```twig
{% for interval in result.interval %}
    {% for key, editor in interval.editor %}
        {{ key }}: {{ editor.doc_count }}<br />
    {% endfor %}
{% endfor %}
```

になったら嬉しくないですか？

ついでに今回練習を兼ねて[Travis CI](https://travis-ci.org/kissge/ElasticaFriendlyResultSet)での自動テスト、[Coveralls](https://coveralls.io/github/kissge/ElasticaFriendlyResultSet)でのカバレッジレポートとかいろいろ遊んだ。なんか表示がぶっ壊れてるけど。
テスト初心者だけど、カバレッジ可視化はモチベーションにつながって良いことだと思う。
passing & 100%のGitHubドヤ顔緑バッジ……もなんか出てないけど（GitHubがキャッシュするから？）。

![図](/images/uploads/2016/07/Screenshot-2016-07-27-05.27.17.png)

ついでに[Packagist](https://packagist.org)にも[登録した](https://packagist.org/packages/kissge/elastica-friendly-result-set)ので

```sh
composer require kissge/elastica-friendly-result-set
```

だけでインストールできるようになった。登録は一瞬で済んだ。
