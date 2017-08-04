import React, { Component } from 'react'
import { initialize, set, pageview } from 'react-ga'

export default (Wrapped) => {
  
  return hoistGetInitialProps(
    class extends Component {

      componentDidMount() {
        if (!window._ga_initialized) {
          initialize('UA-104061611-1')
          window._ga_initialized = true;
        }
        
        const location = window.location.pathname + window.location.search
        
        set({page: location})
        pageview(location)

      }

      render() {      
        return <Wrapped {...this.props} />
      }
    }, Wrapped)
}

const hoistGetInitialProps = (HOC, Wrapped) => {
  if (Wrapped.getInitialProps) {
    HOC.getInitialProps = Wrapped.getInitialProps
  }
  return HOC
}