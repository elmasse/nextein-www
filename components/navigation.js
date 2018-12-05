
import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Github from './icons/github'
import Npm from './icons/npm'

NProgress.configure({
  showSpinner: false
})

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ title, showHome = false, ...props }) => {
  const isGuide = (title === 'guides')
  const isDoc = (title === 'documentation')
  return (

    <Nav {...props} showHome={showHome}>
      {title && (
        <TransitionGroup className="navigation-group" component={null}>
          <CSSTransition classNames="navigation-title" timeout={500} appear in>
            <Title>Nextein<Light>/{title}</Light></Title>
          </CSSTransition>
        </TransitionGroup>
      )
      }
      {showHome && <Link href="/" passHref><Item>Home</Item></Link>}
      <Link href="/guides" passHref><Item className={isGuide && 'active'} >Guides</Item></Link>
      <Link href="/docs" passHref><Item className={isDoc && 'active'}>Docs</Item></Link>
      <GithubLink href="https://github.com/elmasse/nextein">
        <Github fill="#c0c0c0" width="25" alt="Github" />
      </GithubLink>
      <NpmLink href="https://www.npmjs.com/package/nextein">
        <Npm fill="#c0c0c0" width="35" style={{ marginTop: '5px' }} alt="npm" />
      </NpmLink>
    </Nav>
  )
}

const Nav = styled('nav')`
  min-height: 72px;
  display: flex;
  padding: 0 1.8em;
  justify-content: flex-end;
  align-items: stretch;
  box-sizing: border-box;  

  > a, > div {
    display: flex;
    align-items: center;
  }
  > a {
    padding: 0 15px;
    color: #999;
    text-decoration: none;
    &:last-child {
      padding-right: 0;
    }
  }
  border-bottom: ${ ({ showHome }) => showHome ? '1px solid #eee' : ''}
`

const Item = styled('a')`
  text-transform: uppercase;
  font-size: .8em;
  letter-spacing: .2em;
  
  :hover {
    color: #f63;
  }

  &.active {
    color: #f63;
    border-bottom: 3px solid #f63;
    border-top: 3px solid transparent;    
  }
`

const Title = styled('div')`
  font-size: 1.4em;
  margin-right: auto;
  color: #212121;
  font-weight: 400;
`

const Light = styled('span')`
  font-weight: 100;
`

const GithubLink = styled('a')`
  &:hover svg {
    fill: #212121;
  }
`

const NpmLink = styled('a')`
  &:hover svg {
    fill: #C12127;
  }
`
