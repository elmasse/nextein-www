
import React, { Component } from 'react'
import Head from 'next/head'

import { name, url, description } from '../site.json'
import Meta from '../components/meta'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Footer from '../components/footer'

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{name}</title>
          <Meta title={name} url={url} description={description}/>
        </Head>
        <div className="container">
          <header>
            <Navigation />
            <Hero />
          </header>
          <Footer gutter />
          <style jsx>{`
            .container {
              --main-color: var(--grey600);
              --main-contrast-color: var(--grey100);
              background: radial-gradient(ellipse at 50% 0% , var(--grey700), var(--grey900));
            }
          `}</style>
        </div>
      </React.Fragment>
    )
  }
}

export default Index;
