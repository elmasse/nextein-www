---
title: Front Matter
page: docs
---

The __Front Matter__ configuration for posts controls many aspects of the generated content. All markdown files in the `posts` folder should start with a YAML fonrt matter block in between the three dashes separator as follows:

```yaml
---
page: post
title: Hello
---
```

## page _String | false_

The `page` variable points to the page component used to render the post content. In case the current post is not intended to be rendered by itself, we can pass `false` as a parameter.  
Default value is `post`.

### Example

If we define the `page` attribute as `docs`, the post will be rendered using `/pages/docs.js` component.

```yaml
---
page: docs
---

Welcome to the Documentation!
```

## published _Boolean_

This controls if the current post will be published or not. If the value is set to `false` then the post will not appear in any of the lists and won't be exported.  
Default value is `true`

## category _String_

Defines the category for a post. This is optional. The default value is taken from directory hierarchy in the `posts` folder. If you create a post under `/posts/food` folder then `category` is set to `food` by default.  
Subcagetories are separated by `/` following the directory structure.

### Example

```yaml
---
page: docs
category: api
---

Welcome to the Documentation!
```

## date _String_

The date to be used for sorting posts in a list when using `sortByDate` from `nextein/post`. If the post name starts with a date `YYYY-MM-DD` format, that will be assigned as the default value or the file creation date if available.

### Example

```yaml
---
page: docs
category: api
date: 2017-10-04
---

Welcome to the Documentation!
```

Or by the file name:

```bash
/posts/2017-06-09-my-awesome-post.md
```

## permalink _String_

The permalink can override the generated uri for the post.   
Default values is `'/:category?/:name`

`:` Indicates that is a variable from the post front matter data.
`?` Indicates the variable is optional.

All front matter variables, even custom ones, can be used to define the permalink.

## name (__Read Only__)

The post file name. If the name contains a date that is removed from the final name.

## url (__Read Only__)

The generated url for the post.

## Custom variables

You can define your own variables in front matter. All variables will be accesible from the post `data` object.

### Example

```yaml
---
title: My Awesome Post
tag: awesome
category: hot
---

Content
```


