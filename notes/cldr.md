---
title: ja-JP-u-ca-japaneseって何？ UnicodeのCLDRを読んでみよう（あるいは、JavaScriptで和暦を得る簡単なテクについて）
date: 2022-02-19T11:41:00+09:00
---

さて、JavaScriptで、ある日付（例えば今日）の和暦バージョンの文字列を得たいときに使える、次のような簡単なコードが知られている。

（知られている気がする。知らなかったら、この記事をTwitterでシェアして、知らねーよとツイートして、また戻ってきて、続きを読んでください）

```js
> new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
'令和4年2月19日'
```

では、この `ja-JP-u-ca-japanese` という謎の文字列は何なのだろうか？
和暦のデータは一体どこにあるのだろうか？
ということがこの記事のテーマである。

# `ja-JP-u-ca-japanese` を分解してみる

まずMDN Web Docsで[Date.prototype.toLocaleDateString()のページ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)を見てみると、

> The locales and options arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. In implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
> See the Intl.DateTimeFormat() constructor for details on these parameters and how to use them.

と書いてあるので、[Intl.DateTimeFormat() constructorのページ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)に飛ぶと、

> A string with a BCP 47 language tag, or an array of such strings. To use the browser's default locale, pass an empty array. Unicode extension are supported (for example "en-US-u-ca-buddhist"). For the general form and interpretation of the locales argument, see the Intl page.

と書いてあり、さらに[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)に飛ぶと、

> A locale identifier is a string that consists of:
>
> 1. a language subtag,
> 2. (optionally) a script subtag,
> 3. (optionally) a region (or country) subtag,
> 4. (optionally) one or more variant subtags (all of which must be unique),
> 5. (optionally) one or more BCP 47 extension sequences, and
> 6. (optionally) a private-use extension sequence
>
> ...with all present subtags and sequences separated by hyphens. Locale identifiers are case-insensitive ASCII. However, it's conventional to use title case (first letter capitalized, successive letters lower case) for script subtags, upper case for region subtags, and lower case for everything else.

という記述を見つけることができる。

要するに、`ja-JP-u-ca-japanese` とは、

1. `ja`: 言語（日本語）を指定する[subtag](https://en.wikipedia.org/wiki/IETF_language_tag): IANA Language Subtag Registryに登録されている
2. `JP`: 地域（日本）を指定するsubtag
3. `u`: BCP 47拡張の一つ、Unicode拡張を指定する文字
   1. `ca-japanese`: Unicode拡張の和暦を指定する文字列

からなるのである。

さらにここには

> BCP 47 extension subtags are defined in the Unicode CLDR Project.

と記述されている。
このCLDRとは何かについて、もう少し掘り下げてみよう。

# CLDR

Common Locale Data Repository、略してCLDRは、The Unicode Consortiumが提供するロケールデータのデータセットである。初登場は2003年。
これはかなり様々なデータを含む興味深いデータベースである。[Wikipedia](https://en.wikipedia.org/wiki/Common_Locale_Data_Repository)によると、

> - Translations for language names
> - Translations for territory and country names
> - Translations for currency names, including singular/plural modifications
> - Translations for weekday, month, era, period of day, in full and abbreviated forms
> - Translations for time zones and example cities (or similar) for time zones
> - Translations for calendar fields
> - Patterns for formatting/parsing dates or times of day
> - Exemplar sets of characters used for writing the language
> - Patterns for formatting/parsing numbers
> - Rules for language-adapted collation
> - Rules for spelling out numbers as words
> - Rules for formatting numbers in traditional numeral systems (such as Roman and Armenian numerals)
> - Rules for transliteration between scripts, much of it based on BGN/PCGN romanization

といった内容が含まれるそうだ。
（余談だが、CLDRは日本語では共通ロケールデータリポジトリと呼ぶそうである。これもきちんとThe Unicode Consortiumによって[定義されている](http://www.unicode.org/terminology/term_en_ja.html#C)）

さて、このデータセットはGitHub上で閲覧することができる。
いくつか興味深い例を見てみよう。

# CLDRを覗いてみる

まず[common/main/ja.xml](https://github.com/unicode-org/cldr/blob/main/common/main/ja.xml)を見てみよう。
ここには、日本語によるデータが含まれている。

例えば、[様々な言語の日本語での名称](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/main/ja.xml#L21-L27)や、

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fmain%2Fja.xml%23L21-L27&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

[数量の単位の名称](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/main/ja.xml#L9519-L9550)や

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fmain%2Fja.xml%23L9519-L9550&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

海外で使われる暦の各月の名称なんてのもあったり、（例えば[コプト暦](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/main/ja.xml#L1916-L1933)）

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fmain%2Fja.xml%23L1916-L1933&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

そしてもちろん[日本の元号の名称](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/main/ja.xml#L3590-L3830)もある。

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fmain%2Fja.xml%23L3590-L3830&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

各元号がいつから始まるのかについては、[別のファイル](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/supplemental/supplementalData.xml#L4593-L4603)にある。

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fsupplemental%2FsupplementalData.xml%23L4593-L4603&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

もちろんこのデータは日本語のみ提供されているわけではない。
つまり、興味深いことに、日本の元号を他言語で呼ぶ際の名称のデータもあるのである。
（ただしカバレッジは微妙。全ての言語にデータが揃っているわけではないようだ）

例えば[英語](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/main/root.xml#L2150-L2158)では

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fmain%2Froot.xml%23L2150-L2158&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

また[ロシア語](https://github.com/unicode-org/cldr/blob/17b4fac37d9a0f323579e9a21f452a6688d1b648/common/main/ru.xml#L3074-L3086)では、何故か "<span lang="ru">Эпоха</span>" がついたりつかなかったりする（「〜時代」みたいな意味かな？）。

<x-script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Funicode-org%2Fcldr%2Fblob%2F17b4fac37d9a0f323579e9a21f452a6688d1b648%2Fcommon%2Fmain%2Fru.xml%23L3074-L3086&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on&fetchFromJsDelivr=on"></x-script>

こういうデータがあるということは、つまりこういうことができる。

```js
> new Date().toLocaleString('en-US-u-ca-japanese', { dateStyle: 'full', timeStyle: 'full' })
'Saturday, February 19, 4 Reiwa at 11:25:47 AM Japan Standard Time'
> new Date().toLocaleString('ko-u-ca-japanese', { dateStyle: 'full', timeStyle: 'full' })
'레이와 4년 2월 19일 토요일 오전 11시 25분 53초 일본 표준시'
> new Date().toLocaleString('fa-u-ca-japanese', { dateStyle: 'full', timeStyle: 'full' })
'شنبه ۱۹ فوریهٔ ۴ ریوا، ساعت ۱۱:۲۵:۵۸ (وقت عادی ژاپن)'
> new Date().toLocaleString('ru-u-ca-japanese', { dateStyle: 'full', timeStyle: 'full' })
'суббота, 19 февраля 4 г. Рэйва, 11:26:03 Япония, стандартное время'
```

確かに各言語に「令和」が翻訳されている。（読めないけど）

そういえばGoogle 日本語入力のソースコードにも元号のデータが埋め込まれていたのを思い出す。

<x-script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Google 日本語入力のソースコード。 <a href="https://t.co/gOBfU9Bsfo">https://t.co/gOBfU9Bsfo</a> <a href="https://t.co/lXwChxyFAi">pic.twitter.com/lXwChxyFAi</a></p>&mdash; (@p_km) <a href="https://twitter.com/p_km/status/664781052964028416?ref_src=twsrc%5Etfw">November 12, 2015</a></blockquote></x-script>

# 余談——ISO 8601形式の日付を得る裏技（？）

関連はするが、話を変える。

ISO 8601という国際規格があり、日付や時刻のフォーマットが規定されている。

実は一般に人間は色々な場面で、例えばファイル名に日付を入れる時とか、このISO形式を使って日付を書くべきであることが知られている（俺調べ）。
これについて語るのはまた別のブログ記事1本分くらいになると思うので省略するが、曖昧性のなさ、ソート可能性、ソフトウェアサポートの広さ、フォーマットの名称がきちんとあること、などがポイントであろう。

当然JavaScriptのDateには `toISOString` というメソッドがある。

しかしJavaScriptで日付のISO形式表現（つまり、`YYYY-MM-DD`）を得たいというケースを考えてみよう。

```js
> new Date(1992, 9 - 1, 28).toISOString()
'1992-09-27T15:00:00.000Z'
> new Date(1992, 9 - 1, 28).toISOString().slice(0, 10)
'1992-09-27'
```

この例では、1992年9月28日という日付のISO形式表現を得ようとしたのであるが、`toISOString` が常にタイムゾーンとしてUTCを採用したフォーマットで文字列を返してしまうため、時差の関係で日付が1日ずれてしまった。
そのため、これを解決するには、年月日の数値を直接取り出して、桁数が少なければゼロ埋めして、ハイフンで繋げる、という面倒臭いコードを書かなければいけない。

しかし、CLDRをよくよく読んでみると、都合のいいことに `YYYY-MM-DD` を採用している言語が存在しているではないか！

```
32 results - 29 files

common/main/af.xml:
  1555<dateFormatLength type="short">
  1556  						<dateFormat>
  1557: 							<pattern>y-MM-dd</pattern>
  1558  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1559  						</dateFormat>

common/main/bo.xml:
  486  					<dateFormatLength type="short">
  487  						<dateFormat>
  488: 							<pattern>y-MM-dd</pattern>
  489  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  490  						</dateFormat>

common/main/brx.xml:
  1252  					<dateFormatLength type="short">
  1253  						<dateFormat>
  1254: 							<pattern>y-MM-dd</pattern>
  1255  							<datetimeSkeleton>yyMd</datetimeSkeleton>
  1256  						</dateFormat>

common/main/ckb.xml:
  1271  					<dateFormatLength type="short">
  1272  						<dateFormat>
  1273: 							<pattern>y-MM-dd</pattern>
  1274  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1275  						</dateFormat>

common/main/dz.xml:
  1009  					<dateFormatLength type="short">
  1010  						<dateFormat>
  1011: 							<pattern>y-MM-dd</pattern>
  1012  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1013  						</dateFormat>

common/main/en_CA.xml:
  336  					<dateFormatLength type="short">
  337  						<dateFormat>
  338: 							<pattern>y-MM-dd</pattern>
  339  							<pattern alt="variant">d/M/yy</pattern>
  340  						</dateFormat>

common/main/en_SE.xml:
  38  					<dateFormatLength type="short">
  39  						<dateFormat>
  40: 							<pattern>y-MM-dd</pattern>
  41  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  42  						</dateFormat>

common/main/fr_CA.xml:
  1925  					<dateFormatLength type="short">
  1926  						<dateFormat>
  1927: 							<pattern>y-MM-dd</pattern>
  1928  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1929  						</dateFormat>

common/main/ii.xml:
  304  					<dateFormatLength type="short">
  305  						<dateFormat>
  306: 							<pattern>y-MM-dd</pattern>
  307  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  308  						</dateFormat>

common/main/jgo.xml:
  389  					<dateFormatLength type="short">
  390  						<dateFormat>
  391: 							<pattern>y-MM-dd</pattern>
  392  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  393  						</dateFormat>

common/main/lo.xml:
  2765  					<dateFormatLength type="short">
  2766  						<dateFormat>
  2767: 							<pattern>y-MM-dd</pattern>
  2768  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  2769  						</dateFormat>

common/main/lrc.xml:
  646  					<dateFormatLength type="short">
  647  						<dateFormat>
  648: 							<pattern>y-MM-dd</pattern>
  649  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  650  						</dateFormat>

common/main/lt.xml:
  1654  					<dateFormatLength type="short">
  1655  						<dateFormat>
  1656: 							<pattern>y-MM-dd</pattern>
  1657  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1658  						</dateFormat>

  2144  					<dateFormatLength type="short">
  2145  						<dateFormat>
  2146: 							<pattern>y-MM-dd</pattern>
  2147  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  2148  						</dateFormat>

  2930  					<dateFormatLength type="medium">
  2931  						<dateFormat>
  2932: 							<pattern>y-MM-dd</pattern>
  2933  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  2934  						</dateFormat>

  2936  					<dateFormatLength type="short">
  2937  						<dateFormat>
  2938: 							<pattern>y-MM-dd</pattern>
  2939  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  2940  						</dateFormat>

common/main/mg.xml:
  624  					<dateFormatLength type="short">
  625  						<dateFormat>
  626: 							<pattern>y-MM-dd</pattern>
  627  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  628  						</dateFormat>

common/main/mgo.xml:
  318  					<dateFormatLength type="short">
  319  						<dateFormat>
  320: 							<pattern>y-MM-dd</pattern>
  321  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  322  						</dateFormat>

common/main/root.xml:
  1294  					<dateFormatLength type="short">
  1295  						<dateFormat>
  1296: 							<pattern>y-MM-dd</pattern>
  1297  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1298  						</dateFormat>

common/main/rw.xml:
  438  					<dateFormatLength type="short">
  439  						<dateFormat>
  440: 							<pattern>y-MM-dd</pattern>
  441  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  442  						</dateFormat>

common/main/sd.xml:
  1403  					<dateFormatLength type="short">
  1404  						<dateFormat>
  1405: 							<pattern>y-MM-dd</pattern>
  1406  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1407  						</dateFormat>

common/main/se.xml:
  767  					<dateFormatLength type="short">
  768  						<dateFormat>
  769: 							<pattern>y-MM-dd</pattern>
  770  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  771  						</dateFormat>

common/main/si.xml:
  1489  					<dateFormatLength type="short">
  1490  						<dateFormat>
  1491: 							<pattern>y-MM-dd</pattern>
  1492  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1493  						</dateFormat>

common/main/sn.xml:
  648  					<dateFormatLength type="short">
  649  						<dateFormat>
  650: 							<pattern>y-MM-dd</pattern>
  651  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  652  						</dateFormat>

common/main/sv.xml:
  2809  					<dateFormatLength type="short">
  2810  						<dateFormat>
  2811: 							<pattern>y-MM-dd</pattern>
  2812  							<datetimeSkeleton draft="contributed">yMMdd</datetimeSkeleton>
  2813  						</dateFormat>

common/main/ug.xml:
  1659  					<dateFormatLength type="short">
  1660  						<dateFormat>
  1661: 							<pattern>y-MM-dd</pattern>
  1662  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  1663  						</dateFormat>

common/main/xh.xml:
  370  					<dateFormatLength type="short">
  371  						<dateFormat>
  372: 							<pattern>y-MM-dd</pattern>
  373  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  374  						</dateFormat>

seed/main/mn_Mong_MN.xml:
  110  					<dateFormatLength type="short">
  111  						<dateFormat>
  112: 							<pattern>y-MM-dd</pattern>
  113  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  114  						</dateFormat>

seed/main/nso.xml:
  308  					<dateFormatLength type="short">
  309  						<dateFormat>
  310: 							<pattern>y-MM-dd</pattern>
  311  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  312  						</dateFormat>

seed/main/st.xml:
  392  					<dateFormatLength type="short">
  393  						<dateFormat>
  394: 							<pattern>y-MM-dd</pattern>
  395  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  396  						</dateFormat>

seed/main/syr.xml:
  608  					<dateFormatLength type="short">
  609  						<dateFormat>
  610: 							<pattern>y-MM-dd</pattern>
  611  							<datetimeSkeleton draft="unconfirmed">yMMdd</datetimeSkeleton>
  612  						</dateFormat>

seed/main/ts.xml:
  321  					<dateFormatLength type="short">
  322  						<dateFormat>
  323: 							<pattern>y-MM-dd</pattern>
  324  							<datetimeSkeleton>yMMdd</datetimeSkeleton>
  325  						</dateFormat>
```

これを使うと、時差の問題なく変換ができる。

```js
> new Date(1992, 9 - 1, 28).toLocaleString('af', { dateStyle: 'short' })
'1992-09-28'
> new Date(1992, 9 - 1, 28).toLocaleString('fr-CA', { dateStyle: 'short' })
'1992-09-28'
> new Date(1992, 9 - 1, 28).toLocaleString('en-CA', { dateStyle: 'short' })
'1992-09-28'
> new Date(1992, 9 - 1, 28).toLocaleString('sv', { dateStyle: 'short' })
'1992-09-28'
```

というハックでした。
