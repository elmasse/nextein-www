---
title: Front Matter
order: 50
---

The __Front Matter__ configuration for posts controls many aspects of the generated content. All markdown files in the `posts` folder should start with a YAML front matter block in between the three dashes separator as follows:

```yaml
---
page: post
title: Hello
---
```
## published: _Boolean_

This controls if the current post will be published or not. If the value is set to `false` then the post will not appear in any of the lists and won't be exported.  
Default value is `true`

## category: _String_

Defines the category for a post. This is optional. The default value is taken from directory hierarchy in the `posts` folder. If you create a post under `/posts/food` folder then `category` is set to `food` by default.  
Subcagetories are separated by `/` following the directory structure.

> Example
>
>```yaml
>---
>page: docs
>category: api
>---
>
>Welcome to the Documentation!
>```

## date: _String_

The date to be used for sorting posts in a list when using `sortByDate` from `nextein/post`. If the post name starts with a date `YYYY-MM-DD` format, that will be assigned as the default value or the file creation date if available.

> Example
>
>```yaml
>---
>page: docs
>category: api
>date: 2017-10-04
>---
>
>Welcome to the Documentation!
>```
>
>Or by the file name:
>
>```bash
>/posts/2017-06-09-my-awesome-post.md
>```

## name: _String_ (__Read Only__)

The post file name. If the name contains a date, it is removed from the final name.

## Custom Variables

You can define your own variables in front matter. All variables will be accesible from the post `data` object.

> Example
>
>```yaml
>---
>title: My Awesome Post
>tag: awesome
>category: hot
>---
>
>Content
>```
