---
title: How do Japanese type?
date: 2022-05-29T10:00:00+09:00
lang: en
---

Unlike Latin alphabetic scripts, the Japanese language has several thousands of characters.
This means it is practically impossible to have every character on their keyboards.
That's why we use **input method editors** (usually called **IME**) to type.

[![Google Japan's April fool project in 2010](https://4.bp.blogspot.com/_EKfCI8QuAaM/S7L-baZ-ZVI/AAAAAAAADlg/A7gggwUIRSQ/s1600/JD1C0014.JPG)](https://japan.googleblog.com/2010/04/google.html)

Image from: https://japan.googleblog.com/2010/04/google.html

Since many people in the software industry are not familiar with this concept, or maybe simply ignoring the minorities in The Agile Mindset™, there is much software that has trouble when used in Japanese environments.
This article briefly explains how Japanese people type texts in a hope that the problems we are facing every day would be known widely.

# Japanese language 101

The Japanese language has three different sets of characters.

1. **_Hiragana_** (ひらがな, 平仮名) is the most basic building block. You can think of it as alphabets. There are only 48 _hiragana_ (well, depending on how you count). It is possible to write everything just with _hiragana_. Young children and Japanese learners do that. Each _hiragana_ has just one pronunciation (well, mostly).
2. **_Katakana_** (カタカナ, 片仮名) is similar to _hiragana_. Alphabets. Every _hiragana_ has its correspondence in _katakana_ (just like Latin alphabets have upper case and lower case). _Katakana_ is used for certain use cases e.g. borrowed words. Each _katakana_ has just one pronunciation (mostly).
3. **_Kanji_** (漢字) is the most difficult one. Originally, _kanji_ came from China; that's why Japan, China, Taiwan, and some other Asian countries use similar (but slightly different) characters. Each _kanji_ has usually multiple pronunciations. There are several thousands of _kanji_.

Using these, we can write Japan as:

1. in _hiragana_: にほん (read: nihon)
2. in _katakana_: ニホン (read: nihon)
3. in _kanji_: 日本 (read: nihon or nippon)

Note that also にっぽん (nippon) is the word meaning Japan.
_Kanji_ 日本 can be read as both nihon and nippon.

Another thing to note is that にほん (nihon) can mean different things e.g. 二本 (e.g. ペンが二本ある (There are **two** pens))

# How to type Japanese on a keyboard

Among many Japanese input methods, the most popular one is **_Rōmaji_ input** (ローマ字入力).
_Rōmaji_ means Latin alphabets.

In _Rōmaji_ input, we take the following steps to type a word e.g. 楽しい (read: tanoshii):

1. Type _hiragana_ using romanized Japanese pronunciation
   - Hit `T` `A` `N` `O` `S` `H` `I` `I` keys, in order.
   - At this point, the screen shows _hiragana_ たのしい.
   - Now IME is in typing state.
2. Convert them to appropriate _kanji_ (and _katakana_), choosing from possibly multiple candidates
   - Hit the Space bar.
   - IME moves to conversion state.
   - The screen shows conversion candidates like 楽しい, 愉しい, たのしい (no conversion), タノシイ, etc.
   - Choosing a candidate is usually done by hitting the Space bar multiple times, or arrow keys.
3. Finish the conversion
   - Hit Enter key to finalize the conversion.
   - IME moves to a normal state.

Many people use IME software that is shipped with OS, i.e. Microsoft Japanese IME or macOS Japanese IME.
Some faddy geeks install another one they want, like Google Japanese IME.
(Disclaimer: I worked at Microsoft global text input team before 2017 🤗)

Since OS X 10.11 El Capitan, a new functionality named live conversion (ライブ変換) was introduced.
With this feature on, the text is automatically converted to the most likely candidate as you type each key, without hitting the Space bar.
The candidate selection is usually OK, but you can move to conversion state with the Space bar if wrong, just as before.

[![Live conversion](https://iphone-mania.jp/uploads/2022/05/livetranslation.gif)](https://iphone-mania.jp/news-457657/)

Image from: https://iphone-mania.jp/news-457657/

There are also some other input methods than _Rōmaji_ input, including direct _hiragana_ input (かな入力).
Direct _hiragana_ input can be used by young children since it doesn't need knowledge of the Latin alphabets.

# How to type Japanese on a smartphone

On smartphones, some people use _Rōmaji_ input with a QWERTY touch keyboard, but the most popular method is **flick input** (フリック入力).

There are many variants of flick input method, but they usually use 4 columns × 3 rows grid key layouts just like the numerical keypad.
Each key is mapped to 5 different _hiragana_, e.g. か (ka), き (ki), く (ku), け (ke), こ (ko).
Simply tapping the key inputs the first one.
You can input the other four by swiping in the corresponding direction, starting from the key top.

<iframe style="width: 745px; height: 420px; max-width: 100%" src="https://www.youtube.com/embed/BhD6r8NKlmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
