
import React, { Component } from  'react'
import { css, injectGlobal, hydrate } from  'emotion'
import styled from 'emotion/react'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import Navigation from '../components/guides/navigation'
import Footer from '../components/footer'
import withPageView from '../components/analytics'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const withGuides = withPostsFilterBy(inCategory('guides', { includeSubCategories: true }))

const Guide = withPost(withGuides( ( { post, posts: guides } ) => {

  const currIdx = guides.findIndex(guide => ( guide.data.title == post.data.title ))
  const prev = guides[currIdx - 1]
  const next = guides[currIdx + 1]

  injectGlobal`
    html, body {
      margin: 0;
      fontFamily: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
      fontWeight: 100
    }

    a { 
      color: #666; 
      font-weight: 200;
      text-decoration-color: #ddd;
    }
  `

  return (
    <Main>
      <Section>
        <Side>
          <Logo><a href="/">Nextein</a><Light>/guides</Light></Logo>
          <Navigation guides={guides} post={post} />
        </Side>
        <Article>
          <Category>{post.data.category}</Category>
          <Title>{post.data.title}</Title>          
          <Content {...post} renderers={{p: Paragraph, pre: CodeBlock}}/>
          <BottomNav>
            <NavPrev>
            {
              prev &&
              <a className="prev" href={prev.data.url}> <strong>&lt;</strong> Prev: {prev.data.title}</a>
            }
            </NavPrev>
            <NavNext>
            {
              next &&
              <a className="next" href={next.data.url}>Next: {next.data.title} <strong>&gt;</strong> </a>
            }
            </NavNext>
          </BottomNav>
        </Article>
      </Section>
      <Footer />
    </Main>
  )
}))

export default withPageView(Guide)

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  color: #666;
`

const Section = styled('section')`
  background: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;

  p + h2 {
    margin-top: 40px;
  }
`

const Side = styled('side')`
  flex: 1;
`

const Logo = styled('h1')`
  padding-left: 10px;
  a {
    color: #212121;
    font-weight: 400;
  }
`

const Light = styled('span')`
  font-weight: 100;
`

const Article = styled('article')`
  flex: 4;
  padding-top: 60px;
`

const Title = styled('h1')`
  font-size: 4em;
  font-weight: 100;
  margin-top: -15px;
  margin-bottom: 130px;
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
    background-color: #eee;
    vertical-align: bottom;
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

const BottomNav = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #f63;
    font-size: 1.1em;
  }
`
const NavPrev = styled('div')``

const NavNext = styled('div')`
  padding-right: 30px;
`
