
import React, { Component } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'

import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

import Navigation from '../components/navigation'
import Hero from '../components/index/hero'

const sortByOrder = (a, b) => a.data.order - b.data.order

class Index extends Component {
  render() {
    const { posts } = this.props
    const sections = [...posts].sort(sortByOrder)

    return (
      <React.Fragment>
        <Head>
          <title>Nextein</title>
        </Head>
        <div className="container">
          <header>
            <Navigation />
            <Hero />
          </header>
          <footer>
            Hello, Footer
          </footer>
          <style jsx>{`
            .container {
              background: radial-gradient(ellipse at top , var(--grey700), transparent) var(--grey900);
              color: var(--grey100);            
            }

            .container > * {
              margin: 0 auto;
              max-width: 64em;          
            }

            header {
              min-height: 100vh;
            }
          `}</style>        
        </div>
      </React.Fragment>
    )
  }
}

export default withPostsFilterBy(
  inCategory('section', { includeSubCategories: true })
)(Index)
