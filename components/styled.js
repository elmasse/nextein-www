import React, { Component } from 'react'
import { injectGlobal, hydrate } from 'react-emotion'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

export default (Wrapped) => {
  return class extends Component {

    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    render() {
      injectGlobal`
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
      return <Wrapped {...this.props} />
    }
  }
}