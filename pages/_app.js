import React from 'react'
import NextApp, { Container } from 'next/app'
// import { injectGlobal, hydrate } from 'emotion'
import { Global, css } from '@emotion/core'
// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
// if (typeof window !== 'undefined') {
//   hydrate(window.__NEXT_DATA__.ids)
// }

export default class App extends NextApp {

  render () {    
    const { Component, pageProps } = this.props;

    // injectGlobal
    const globalStyles = `
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif;
        font-weight: 100;
      }

      a { 
        color: #666; 
        font-weight: 200;
        text-decoration-color: #ddd;
      }

      pre {
        margin: 0;
      }
    `    
    return (
      <Container>
        <Global styles={css`${globalStyles}`} />
        <Component { ...pageProps } />
      </Container>
    )
  }
}