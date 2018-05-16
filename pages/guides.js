
import React, { Component } from  'react'
import styled, { css } from 'react-emotion'
import Head from 'next/head'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import Link from 'nextein/link'
// import Postcast from 'postcast'

import MainNavigation from '../components/navigation'
import Navigation from '../components/guides/navigation'
import Code from '../components/code'
import Footer from '../components/footer'
import withPageView from '../components/analytics'
import Edit from '../components/guides/edit'
import Image from '../components/guides/image'
import withStyles from '../components/styled'

const postcast = ({ data, content }) =>
`---
lang: en-US
title: ${data.title}
phonemes:
 nextein: /nɛkstɛɪn/
---
${content}
` 

const withGuides = withPostsFilterBy(inCategory('guides', { includeSubCategories: true }))

const Guide = withPost(withGuides( ( { post: current, posts: guides } ) => {
  const post = current || guides[0]
  const currIdx = guides.findIndex(guide => ( guide.data.title == post.data.title ))
  const prev = guides[currIdx - 1]
  const next = guides[currIdx + 1]
  const { postcast: showPostcast = true } = post.data

  return (
    <Main>
      <Head>
        <title>Nextein | Guides | {post.data.title}</title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css" />
      </Head>

      <MainNavigation showHome title="guides" styles={{ width: `100vw` }}/>
      
      <Section>
        <Side>
          <Navigation guides={guides} post={post} />
        </Side>
        <Article>
          <EditMe entry={post.data._entry} />
          <Category>{post.data.category}</Category>
          <Title>{post.data.title}</Title>
          {/* {showPostcast &&
          <WatchIt>
            <Postcast width="750" height="420">{() => postcast(post)}</Postcast>
          </WatchIt>
          } */}
          <Content {...post} 
            renderers={{
              h2: BlogSection,
              blockquote: Blockquote,
              code: Code,
              p: Paragraph,
              pre: CodeBlock,
              img: Image
            }}
          />
          <BottomNav>
            <NavPrev>
            {
              prev &&
              <Link {...prev}><a className="prev"><div className="nav-title">Previous</div><div className="article-title"> {prev.data.title}</div></a></Link>
            }
            </NavPrev>
            <NavNext>
            {
              next &&
              <Link {...next}><a className="next"><div className="nav-title">Next</div><div className="article-title"> {next.data.title}</div></a></Link>
            }
            </NavNext>
          </BottomNav>
        </Article>
      </Section>
      <Footer />
    </Main>
  )
}))

export default withPageView(withStyles(Guide))

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
  & p + h2 {
    margin-top: 40px;
  }
`

const Side = styled('side')`
  flex: .9;
  background: #eee;
`

const Article = styled('article')`
  position: relative;
  flex: 4;
  width: 1px; // freaking width to get the Article to not expand
  padding: 30px 0 0 60px;
`

const EditMe = styled(Edit)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  text-decoration: none;
  background: #f2f2f2;
  &:hover {
    background: #fff;
  }
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
  font-size: .8em;
  font-weight: 100;
  color: #666;
  text-transform: uppercase;
`

const WatchIt = styled('div')`
  @media (max-width: 600px) {
    display: none;
  }
`

const Paragraph = styled('p')`
  font-size: 1.25em;
  font-weight: 300;
  color: #444;
  margin-top: 2em;
  letter-spacing: -0.05px;
  line-height: 1.5em;
  max-width: 750px;

  & strong, & b {
    font-weight: 600;
  }

  &  code {
    font-size: .95em;
    display: inline-block;
    padding: 0 5px;
    background-color: #eee;
    vertical-align: bottom;
  }
`

const BlogSection = styled('h2')`
  margin: 1em 0;
  margin-left: -0.25em;
  color: #000;
`

const Blockquote = styled('blockquote')`
  margin: 0;
  margin-bottom: 2.25em;
  padding-left: 1.25em;
  border-left: 5px solid; 
`

const CodeBlock = styled('pre')`
  margin: 50px 0;
  font-size: 1.2em;
  padding: 5px 20px;
  background: #f2f2f2;
  & .hljs {
    background: #f2f2f2;
  }
`

const BottomNav = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-left: -60px;
  padding: 50px 0;

  .nav-title {
    font-size: .7em;
    text-transform: uppercase;
    letter-spacing: .2em;    
  }

  .article-title {
    font-size: 1.5em;
    font-weight: 300;
  }

  & a {
    text-decoration: none;
    color: #f63;
    font-size: 1.1em;
  }
`
const NavPrev = styled('div')`
  padding-left: 30px;
`

const NavNext = styled('div')`
  padding-right: 30px;
  text-align: right;
`