
import React, { Component } from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Footer from '../components/footer'

class Index extends Component {
  render() {
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
            .container {
              --main-color: var(--grey600);
              --main-contrast-color: var(--grey100);
              background: radial-gradient(ellipse at 50% 0% , var(--grey700), var(--grey900));
            }

            section {
              --main-color: var(--grey100);
              min-height: 50vh;
              padding: calc(var(--spacing) * 8);
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            section.center :global(.title) {
              position: relative;
            }
            section.center :global(.title):after {
              content: ' ';
              position: absolute;
              left: 30%;
              right: 30%;
              bottom: -48px;
              border: 1px solid white;
            }
          `}</style>
        </div>
      </React.Fragment>
    )
  }
}

export default Index;
