
import React, { Component } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'

import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

import Navigation from '../components/navigation'
import Hero from '../components/index/hero'
import Footer from '../components/footer'

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
          <Footer />
          <style jsx>{`
            --main-color: var(--grey600);

            .container {
              background: radial-gradient(ellipse at 50% 0% , var(--grey700), var(--grey900));
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
