---
from: wordpress
title: How to skip SSL Error page quickly in Google Chrome
date: 2016-10-26 23:25:15
---

When you are building your own web apps, especially in development environments, it is often the case that you use self-signed SSL certificates;
then you will have to see this annoying "Your connection is not private" every time.

<!--more-->

In order to proceed to your page, you have to click "ADVANCED" at the bottom, and then

![Another screenshot](/images/uploads/2016/10/Screenshot-2016-10-26-23.02.34.png)

click "Proceed to \*\*\*\* (unsafe)".

Problem here: clicking twice is a labor and we all love keyboard shortcuts.
Then, try this instead: just type the magic word `badidea`, and voilà!

![Screencast](/images/uploads/2016/10/Untitled.gif)

This is a hardcoded function of Google Chrome (implemented [here](https://chromium.googlesource.com/chromium/src/+/f67daf2e939134b3f33a938c2d44a3dc2b93d406/components/security_interstitials/core/browser/resources/interstitial_v2.js#48)).
See how it works with your browser.
