from: wordpress
title: 'R: Create a histogram from frequency list'
date: 2014-07-26 22:04:27
--
In R, <code>hist</code> is a great function to create histograms from data.
It counts data, compute frequency, and show a histogram.
Then how can I get histograms from frequency data that I already have?
I wasn't able to find nicer solution, so wrote this.

<!--more-->

<script src="https://gist.github.com/kissge/850f5b67c1fa11e02a1e.js"></script>

<pre><code>&gt; hist.from.freq(seq(0, 9), c(154, 105, 72, 16, 111, 103, 81, 84, 38, 158), normalize = T)</code></pre>

This sample gives the following output:

<img src="/images/uploads/2014/07/Rplot01.png" alt="Rplot01" width="480" height="469" class="alignnone size-full wp-image-116" data-wp-pid="116" />

