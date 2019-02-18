
// import React, { Component } from 'react'
// import styled from '@emotion/styled'
// import Head from 'next/head'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

// import withPost, { Content } from 'nextein/post'
// import { withPostsFilterBy, inCategory } from 'nextein/posts'

// import MainNavigation from '../components/navigation'
// import Navigation from '../components/docs/navigation'
// import { Main, Section, Side, ArticleTransitionWrapper, Article, Title, Category, Paragraph, Blockquote, CodeBlock, List } from '../components/elements'
// import Code from '../components/code'
// import Footer from '../components/footer'
// import withPageView from '../components/analytics'

// const withDocs = withPostsFilterBy(inCategory('docs', { includeSubCategories: true }))

// const Doc = withPost(withDocs(({ post: current, posts }) => {
//   const post = current || posts[0]

//   posts.sort((a, b) => a.data.order - b.data.order)

//   return (
//     <Main>
//       <Head>
//         <title>Nextein | Docs | {post.data.title}</title>
//         <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css" />
//       </Head>

//       <MainNavigation showHome title="documentation" styles={{ width: `100vw` }} />

//       <Section>
//         <Side>
//           <Navigation docs={posts} post={post} />
//         </Side>
//         <TransitionGroup className="fade-transition-group" component={ArticleTransitionWrapper}>
//           <CSSTransition key={post.data.url} classNames="fade-transition" timeout={500}>
//             <Article>
//               <Category>{post.data.category}</Category>
//               <Title>{post.data.title}</Title>
//               <Content
//                 {...post}
//                 renderers={{
//                   h2: MethodName,
//                   blockquote: Blockquote,
//                   code: Code,
//                   p: Paragraph,
//                   pre: CodeBlock,
//                   ul: List
//                 }}
//               />
//             </Article>
//           </CSSTransition>
//         </TransitionGroup>
//       </Section>
//       <Footer />
//     </Main>
//   )
// }))

// export default withPageView(Doc)

// const MethodName = styled('div')`
//   font-size: 1.8em;
//   line-height: 2em;
//   font-weight: 600;
//   color: rgba(0,0,0, .8);
//   margin: 2em 0 0 -2px;

//   > em {
//     font-weight: 200;
//     letter-spacing: -0.8px;
//     padding: 0 4px;    
//   }
// `
