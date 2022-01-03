---
title: Upgrading to v4
order: 0
---

This post will guide you on how to get started with **Nextein** v4. 

A few things have changed from v3 to v4. The main changes are:

- Removed `nextein` binary. Use the `next` binary instead.
- Removed HOCs. No more wrapping classes to your pages. Use the `nextein/fetcher` to populate `getStaticProps` and `getStaticPaths` when needed.
- Removed `nextein/link`. Use the `next/link`. Since we have no generated urls, now we will use the Link component from next making the nextein footprint to a bare minimum.
