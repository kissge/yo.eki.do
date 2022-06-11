---
definition: 「もの」のログを実現する、あなたが今見ているこのWebサイトを構築したソフトウェア
url: https://github.com/kissge/monolog
tags:
  - 開発したもの
  - Svelte
  - TypeScript
---

- Blog (weblog) はWebのログだけど、これは「もの」のログだからmonolog（ものろぐ）
- Wikiライクなナレッジマネジメントツールと言える
  - 関連する情報を繋げた知識グラフ的なネットワーク構造をもつ
  - Wikiのように自分でリンクをつける必要はない
- またブログシステムでもある
  - Markdownで記事が書け、gitでバージョン管理もできる
  - 知識グラフと連続的に繋がっている

# つくりかた

- TypeScript + SvelteKit製
- ローカルではサーバーを起動してホットリロードできる
- 完全に静的なWebサイトとして出力もできるため、GitHub Pagesにデプロイすることができる
  - その場合でもJavaScriptを使って先読みし高速なページ遷移を享受できる
  - またJavaScriptが無効であってもほとんど完全に動作する
