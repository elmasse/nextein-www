import React, { Component } from 'react'
import { initialize, set, pageview } from 'react-ga'

export default (Wrapped) => {
  return class extends Component {

    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    ua = process.env.UA

    componentDidUpdate() {
      this.sendPageView()
    }

    componentDidMount() {
      if (!window._ga_initialized) {    
        initialize(this.ua)
        window._ga_initialized = true;
      }

      this.sendPageView()
    }

    sendPageView() {
      const location = window.location.pathname + window.location.search
      set({page: location})
      pageview(location)
    }

    render() {
      return <Wrapped {...this.props} />
    }
  }
}
