const { selectAll } = require('hast-util-select')
const visit = require('unist-util-visit')

const { inCategory } = require('nextein/posts')

const extractHeaders = (post) => {
  const { content } = post

  const appendValue = item => textNode => {
    item.value += `${textNode.value.trim()} `
  }
  const appendHref = item => node => {
    if (node.tagName === 'a') {
      item.href = node.properties.href
    }
  }
  
  return selectAll('h1,h2,h3,h4,h5,h6', content).map(node => {
    const item = {
      type: node.tagName,
      value: ''
    }
    visit(node, 'text', appendValue(item))
    visit(node, 'element', appendHref(item))
    return { ...item, value: item.value.trim() }
  })
}

const filter =(categories = [], post) => {
  for ( const category of categories ) {
    if (inCategory(category)(post)) return true
  }
  return false
}

module.exports.transform = async ({ categories = true }, posts) => {
  return posts.map(post => {
    if (categories && filter(categories, post)) {
      post.data.toc = extractHeaders(post)
    }
    return post
  })
}