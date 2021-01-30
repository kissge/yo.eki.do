from: wordpress
title: Graphviz で subgraph が無視される
date: 2014-07-15 22:19:44
--
Graphviz の subgraph を明示的に描画させるには subgraph の名前を cluster で始めないといけない．
このへん (<a href="http://www.graphviz.org/content/dot-language">The DOT Language | Graphviz - Graph Visualization Software</a>) に

<blockquote>
If the name of the subgraph begins with cluster, Graphviz notes the subgraph as a special cluster subgraph.
</blockquote>

と書いてある．

関係ないけれど subgraph と subgraph の間にエッジを設定したい場合は dot ではなく fdp を使えば良い．
