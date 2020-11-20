---
title: post
page: docs
order: 40
---

A post object represents the entry content and the metadata.

## data 

```js
post.data.__id
post.data.url
post.data.category
post.data.date
post.data.name
```

The post metadata is encapsulated into the `data` property. This includes the following properties plus any other defined by the user in the frontmatter:

- **__id**: `{String}` the post internal id. Usefull for react keys.
- **url**: `{String}` the generated url for the post.
- **category**: `{String}` is the post's category. When not specified, if the post is inside a folder, the directory structure under `/posts` will be used.
- **date**: `{String}` JSON date from frontmatter's date or date in file name or file creation date.
- **name**: `{String}` the file name. Date is removed from name if present.
