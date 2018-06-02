import React, { Component } from 'react'
import { initialize, set, pageview } from 'react-ga'

export default (Wrapped) => {
  return class extends Component {

    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    _ua = process.env.UA

    componentDidUpdate() {
      this._sendPageView()
    }

    componentDidMount() {
      if (!window._ga_initialized) {    
        initialize(this._ua)
        window._ga_initialized = true;
      }
     
      this._sendPageView()
    }

    _sendPageView() {
      const location = window.location.pathname + window.location.search
      set({page: location})
      pageview(location)
      
    }

    render() {      
      return <Wrapped {...this.props} />
    }
  }
}
