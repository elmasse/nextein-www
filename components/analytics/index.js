import React, { Component } from 'react'
import ReactGA from 'react-ga'

export default (Wrapped) => {
  
  return hoistGetInitialProps(
    class extends Component {

      componentDidMount() {
        if (typeof window !== undefined) {
          if (!window.GA) {
            ReactGA.initialize('UA-104061611-1')
            window.GA = true;
          }
          const location = window.location.pathname + window.location.search
          
          ReactGA.set({page: location})
          ReactGA.pageview(location)

        }
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