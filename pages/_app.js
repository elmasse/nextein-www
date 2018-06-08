import React from 'react'
import NextApp, { Container } from 'next/app'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class App extends NextApp {
  render() {
    const { Component, pageProps, router: { asPath } } = this.props;

    return (
      <Container>
        <TransitionGroup className="page-group">
          <CSSTransition
            classNames="page"
            key={asPath}
            timeout={{enter: 500, exit: 500}}
            appear
            in
          >
            <Component {...pageProps} />
          </CSSTransition>
        </TransitionGroup>        
      </Container>
    )
  }
}
