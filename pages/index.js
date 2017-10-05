
import React from 'react'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content as PostContent } from 'nextein/post'
import styled, { css, injectGlobal, hydrate } from 'react-emotion'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import withPageView from '../components/analytics'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const classnames = (...args) => args.join(' ')
const sortByOrder = (a, b) => a.data.order - b.data.order

const withIndexSections = withPostsFilterBy(inCategory('section'))

const Index = withIndexSections(({ posts }) => {
  const sections = posts.sort(sortByOrder)

  injectGlobal`
    html, body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
      font-weight: 100
    }
    a { 
      color: #666; 
      font-weight: 200;
      text-decoration-color: #aaa;
    }
  `

  return (
    <Main>
      <Navigation style={{ position: 'absolute', width: '100vw' }}/>      
      <Header />
      {
        sections.map((post, idx) => {
          const { className, title } = post.data
          const kind = (idx % 2) ? 'odd' : 'even'
          return (
            <Section className={kind} key={`section-${idx}`}>
              <Title className={className} >{title}</Title>
              <Content {...post} />
            </Section>
          )
        })
      }
      <Footer />
    </Main>
  )
})

export default withPageView(Index)

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
  min-height: 70vh;
  padding: 120px 10vw;

  > * {
    flex: 1;
  }
  

  &:last-of-type {
    padding-bottom: 120px;
  }

  &.odd {    
    background-image: radial-gradient(circle at 15vw , #f1f1f1 0%, #ccc 100%);
    text-shadow: 0 0 1px #eee;
  }

  &.even {
    flex-direction: row-reverse;    
    background-image: radial-gradient(circle at center , rgb(68, 60, 60) 0%, #272121 100%);
    text-shadow: 0 0 1px #000;
    
    > p {
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

const Title = styled('h1')`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  font-weight: 100;
  font-size: 3em;
  color: #f63;

  &.nextein {
    font-size: 4.5em;
  }

  &.md::after {    
    content: '#_';
    font-size: 100px;
    color: #aaa;
    font-weight: 400;
    font-size: 4em;
  }

  &.next::after {
    content: '</>';
    text-shadow: 0 0 1px #000;
    font-size: 100px;
    color: #e5e5e5;
    font-weight: 400; 
    font-size: 4em;   
  }

  &.try-it::after {
    content: '!';
    font-size: 100px;
    color: #aaa;
    font-weight: 400; 
    font-size: 4em;   
  }
`