---
title: post
page: docs
order: 40
---

A post object represents the markdown content and the metadata.

## data _Object_

The post metadata is encapsulated in the `data` property. This includes the following properties plus any other defined by the user:

- `url`: `{String}` the generated url for the post.
- `category`: `{String}` is the post's category. When not specified, if the post is inside a folder, the directory structure under `/posts` will be used.
- `date`: `{String}` JSON date from frontmatter's date or date in file name or file creation date.
- `name`: `{String}` the file name. Date is removed from name if present.

## raw _String_

The markdown raw content.

## content _Object_

The HAST (Hypertext Abstract Syntax Tree) representation of the markdown content.
