
import React, { Component } from  'react'
import { css, injectGlobal, hydrate } from  'emotion'
import styled from 'emotion/react'

import withPost, { Content } from 'nextein/post'
import { inCategory } from 'nextein/posts'
//TODO make this available thru a better name
import loadEntries from 'nextein/dist/load-entries'

import Navigation from '../components/guides/Navigation'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

class Guide extends Component {

  static async getInitialProps() {
    const all = await loadEntries()
    const guides = all.filter(inCategory('guides', { includeSubCategories: true }))

    return {
      guides
    }
  }

  render() {
    const { post, guides } = this.props

    injectGlobal`
      html, body {
        margin: 0;
        fontFamily: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
        fontWeight: 100
      }

      a { color: #666; font-weight: 200; text-decoration: none}
    `

    return (
      <Main>
        <Side>
          <Logo><a href="/">Nextein</a><span className={light}>/guides</span></Logo>
          <Navigation guides={guides} post={post} />
        </Side>
        <Article>
          <Category>{post.data.category}</Category>
          <Title>{post.data.title}</Title>          
          <Content {...post} renderers={{p: Paragraph, pre: CodeBlock}}/>
        </Article>
      </Main>
    )
  }
}

export default withPost(Guide)

const Main = styled('main')`
  background: #f9f9f9;
  display: flex;
  flex-direction: row;
`

const Side = styled('side')`
  flex: 1;
`

const Logo = styled('h1')`
  padding-left: 10px;
  a, a:hover, a:visited {
    color: #212121;
    text-decoration: none;
    font-weight: 400;
  }
`

const light = css`
  font-weight: 100;
`

const Article = styled('article')`
  flex: 4;
  padding-top: 20px;
`

const Title = styled('h1')`
  font-size: 4em;
  font-weight: 100;
  margin-top: -15px;
  margin-bottom: 90px;
  padding-bottom: 15px;
  border-bottom: 3px solid #f63;
`

const Category = styled('h2')`
  font-size: 1em;
  font-weight: 100;
  color: #666;
`

const Paragraph = styled('p')`
  font-size: 1.3em;
  font-weight: 300;
  color: #444;
  margin-top: 40px;
  letter-spacing: -0.05px;
  line-height: 1.5em;
  max-width: 750px;

  strong, b {
    font-weight: 600;
  }

  code {
    font-size: 1.2em;
    display: inline-block;
    padding: 0 5px;
  }
`

const CodeBlock = styled('pre')`
  margin: 50px 0;
  font-size: 1.2em;
  padding: 5px 20px;
  background: #f2f2f2;  
  .hljs {
    background: #f2f2f2;
  }
`