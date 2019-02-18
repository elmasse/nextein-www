
import React, { Component } from  'react'
import compose from 'lodash.flowright'
import Head from 'next/head'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import Navigation from '../components/navigation'
import Sidebar from '../components/sidebar'
import { Blockquote, Heading1, Heading2, Heading3, Heading4, Paragraph, Pre } from '../components/elements'

class Guides extends Component {
  render() {
    const { post: current, posts } = this.props
    const post = current || posts[0]

    return (
      <React.Fragment>
        <Head>
          <title>Nextein | Guides | {post.data.title}</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css" />
        </Head>
        <div className="container">
          <header>
            <Navigation/>
          </header>
          <div className="rows">
            <article>
              <header>
                <Heading1>{post.data.title}</Heading1>
              </header>
              <Content
                className="content columns"
                {...post}
                renderers={{
                  blockquote: Blockquote,
                  h2: Heading2,
                  h3: Heading3,
                  h4: Heading4,
                  p: Paragraph,
                  pre: Pre
                }}
              />
              <footer></footer>
            </article>
            <aside><Sidebar current={post} posts={posts} fixed /></aside>
          </div>
          <footer ></footer>
          <style jsx>{`
            .container > * {
              margin: 0 auto;
              max-width: 64em;
            }

            article {
              flex: 1;
              width: 1px; /* width to get the Article to not expand */
              padding-right: calc(var(--spacing) * 3);
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: stretch;
            }

            article header {
              display: flex;
              flex-direction: row;
              flex-grow: 0;
              flex-shrink: 1;
              flex-basis: auto;
              justify-content: space-between;
              align-items: baseline;
            }

            aside {
              margin-top: calc(var(--spacing) * -11);
              padding: 0 calc(var(--spacing) * 1);
              padding-top: calc(var(--spacing) * 3);
              width: calc(var(--spacing) * 36);
              border-left: 1px solid #eee;
              background: var(--grey100);
              overflow-y: auto;
            }
          `}</style>
        </div>
      </React.Fragment>
    )
  }
}


export default compose(
  withPost,
  withPostsFilterBy(inCategory('guides', { includeSubCategories: true }))
)(Guides)



// import Navigation from '../components/guides/navigation'
// import { Main, Section, Side, ArticleTransitionWrapper, Article, Title, Category, Paragraph, CodeBlock } from '../components/elements'
// import Code from '../components/code'
// import BottomNavigation from '../components/guides/bottom-navigation'
// import Footer from '../components/footer'
// import Edit from '../components/guides/edit'
// import Image from '../components/guides/image'

// const Guide = withPost(withGuides( ( { post: current, posts: guides } ) => {
//   const post = current || guides[0]

//   return (
//     <Main>
//       <Head>
//         <title>Nextein | Guides | {post.data.title}</title>
//         <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css" />
//       </Head>

//       <MainNavigation showHome title="guides" styles={{ width: `100vw` }}/>

//       <Section>
//         <Side>
//           <Navigation guides={guides} post={post} />
//         </Side>
//         <TransitionGroup className="fade-transition-group" component={ArticleTransitionWrapper}>
//           <CSSTransition key={post.data.url} classNames="fade-transition" timeout={500}>
//             <Article>
//               <EditMe entry={post.data._entry} />
//               <Category>{post.data.category}</Category>
//               <Title>{post.data.title}</Title>
//               <Content
//                 {...post}
//                 renderers={{
//                   h2: BlogSection,
//                   blockquote: Blockquote,
//                   code: Code,
//                   p: Paragraph,
//                   pre: CodeBlock,
//                   img: Image
//                 }}
//               />
//               <BottomNavigation guides={guides} post={post} />
//             </Article>
//            </CSSTransition>
//           </TransitionGroup> 
//       </Section>
//       <Footer />
//     </Main>
//   )
// }))


// const EditMe = styled(Edit)`
//   position: absolute;
//   top: 1.8em;
//   right: 1.8em;
//   padding: 10px;
//   border: 1px solid #ddd;
//   text-decoration: none;
//   background: #f2f2f2;
//   &:hover {
//     background: #fff;
//   }
// `

// const Blockquote = styled('blockquote')`
//   margin: 1em 0;
//   padding: 1.5em;
//   padding-left: 1.25em;
//   border-left: 5px solid; 
//   background: #e4e4e4;
//   & > p {
//     margin: 0;
//   }
// `

// const BlogSection = styled('h2')`
//   margin: 1em 0;
//   margin-left: -0.25em;
//   color: rgba(0,0,0, .8);
// `

