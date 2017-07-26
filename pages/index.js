
import React from 'react'
import withPosts, { inCategory } from 'nextein/posts'
import { Content as PostContent } from 'nextein/post'
import { css, injectGlobal, hydrate } from  'emotion'
import styled from 'emotion/react'

import Header from '../components/header'
import Footer from '../components/footer'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const classnames = (...args) => args.join(' ')
const sortByOrder = (a, b) => a.data.order - b.data.order

const Index = ({ posts }) => {
  const sections = posts.filter(inCategory('section')).sort(sortByOrder)

  injectGlobal`
    html, body {
      margin: 0;
      fontFamily: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
      fontWeight: 100
    }
  `

  return (
    <Main>
      <Header />
      {
        sections.map((post, idx) => {
          const { className, title } = post.data
          const kind = (idx % 2) ? 'odd' : 'even'
          return (
            <Section className={classnames(flexed, kind)} key={`section-${idx}`}>
              <Title className={className} >{title}</Title>
              <Content {...post} />
            </Section>
          )
        })
      }
      <Footer />
    </Main>
  )
}

export default withPosts(Index)

// --- styled ---

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Section = styled('section')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 120px 10vw;

  &:first-of-type {
    padding-top: 120px;
  }

  &:last-of-type {
    padding-bottom: 120px;
  }

  &.even {
    flex-direction: row-reverse;
    background: #272121;
    > div {
      text-align: right;
      color: #e4e4e4;
    }
  }
`

const Content = styled(PostContent)`
  font-size: 1.5em;
  font-weight: 200;
  line-height: 1.5em;

  a, a:hover, a:visited {
    color: #666;
    text-decoration: none;
  }

  a { font-weight: 400; }

`

const flexed = css`
  > * {
    flex: 1;
  }
`

const Title = styled('h1')`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  font-weight: 100;
  font-size: 2.5em;
  color: #f63;

  &.nextein {
    font-size: 3.5em;
  }

  &.md::after {
    content: '#_';    
    font-size: 100px;
    color: #e5e5e5;
    font-weight: 400;
    font-size: 4em;
  }

  &.next::after {
    content: '</>'
    font-size: 100px;
    color: #e5e5e5;
    font-weight: 400; 
    font-size: 4em;   
  }

  &.try-it::after {
    content: '!'
    font-size: 100px;
    color: #e5e5e5;
    font-weight: 400; 
    font-size: 4em;   
  }
`