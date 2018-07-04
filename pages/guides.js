
import React, { Component } from  'react'
import styled from 'react-emotion'
import Head from 'next/head'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import MainNavigation from '../components/navigation'
import Navigation from '../components/guides/navigation'
import { Main, Section, Side, ArticleTransitionWrapper, Article, Title, Category, Paragraph, CodeBlock } from '../components/elements'
import Code from '../components/code'
import BottomNavigation from '../components/guides/bottom-navigation'
import Footer from '../components/footer'
import withPageView from '../components/analytics'
import Edit from '../components/guides/edit'
import Image from '../components/guides/image'

const withGuides = withPostsFilterBy(inCategory('guides', { includeSubCategories: true }))

const Guide = withPost(withGuides( ( { post: current, posts: guides } ) => {
  const post = current || guides[0]

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
        <TransitionGroup className="fade-transition-group" component={ArticleTransitionWrapper}>
          <CSSTransition key={post.data.url} classNames="fade-transition" timeout={500}>
            <Article>
              <EditMe entry={post.data._entry} />
              <Category>{post.data.category}</Category>
              <Title>{post.data.title}</Title>
              <Content
                {...post}
                renderers={{
                  h2: BlogSection,
                  blockquote: Blockquote,
                  code: Code,
                  p: Paragraph,
                  pre: CodeBlock,
                  img: Image
                }}
              />
              <BottomNavigation guides={guides} post={post} />
            </Article>
           </CSSTransition>
          </TransitionGroup> 
      </Section>
      <Footer />
    </Main>
  )
}))

export default withPageView(Guide)

const EditMe = styled(Edit)`
  position: absolute;
  top: 1.8em;
  right: 1.8em;
  padding: 10px;
  border: 1px solid #ddd;
  text-decoration: none;
  background: #f2f2f2;
  &:hover {
    background: #fff;
  }
`

const Blockquote = styled('blockquote')`
  margin: 1em 0;
  padding: 1.5em;
  padding-left: 1.25em;
  border-left: 5px solid; 
  background: #e4e4e4;
  & > p {
    margin: 0;
  }
`

const BlogSection = styled('h2')`
  margin: 1em 0;
  margin-left: -0.25em;
  color: #000;
`

