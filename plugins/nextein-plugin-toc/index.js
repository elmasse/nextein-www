const visit = require('unist-util-visit')

const { inCategory } = require('nextein/posts')

const headingsByLevel = level => {
  return Array.from(Array(level), (h, idx) => `h${idx+1}`)
}

const appendValue = item => textNode => {
  item.value += `${textNode.value.trim()} `
}
const appendHref = item => node => {
  if (node.tagName === 'a') {
    item.href = node.properties.href
  }
}

const extractHeaders = (post, { headings }) => {
  const { content } = post
  const toc = []
  visit(content, 'element', node => {
    if (headings.includes(node.tagName)) {
      const item = {
        type: node.tagName,
        value: ''
      }
      visit(node, 'text', appendValue(item))
      visit(node, 'element', appendHref(item))
      toc.push({ ...item, value: item.value.trim() })
    }
  })
  return toc;
}

const filter = (categories = [], post) => {
  for ( const category of categories ) {
    if (inCategory(category, { includeSubCategories: true })(post)) return true
  }
  return !categories.length
}

module.exports.transform = async ({ categories = true, maxDepth = 6 }, posts) => {
  const headings = headingsByLevel(maxDepth)
  return posts.map(post => {
    if (categories && filter(categories, post)) {
      post.data.toc = extractHeaders(post, { headings })
    }
    return post
  })
}