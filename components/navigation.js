
import React from 'react'
import styled from 'react-emotion'

import Github from './icons/github'
import Npm from './icons/npm'

export default ({ title, showHome = false, ...props }) => {
  const isGuide = (title === 'guides')
  const isDoc = (title === 'documentation')
  return (
    <Nav {...props} showHome={showHome}>
      { title && <Title>Nextein<Light>/{title}</Light></Title> }
      { showHome && <Item href="/">Home</Item>}
      <Item href="/guides" className={isGuide && 'active'} >Guides</Item>
      <Item href="/docs" className={isDoc && 'active'}>Docs</Item>
      <GithubLink href="https://github.com/elmasse/nextein">
        <Github fill="#c0c0c0" width="25"/>
      </GithubLink>
      <NpmLink href="https://www.npmjs.com/package/nextein">
        <Npm fill="#c0c0c0" width="35"  style={{marginTop: '5px'}} />
      </NpmLink>
    </Nav>
  )
}

const Nav = styled('nav')`
  min-height: 72px;
  display: flex;
  padding-right: 30px;
  justify-content: flex-end;
  align-items: stretch;
  box-sizing: border-box;  
  > * {
    display: flex;
    align-items: center;    
  }
  > a {
    padding: 0 15px;
    color: #999;
    text-decoration: none;
  }
  border-bottom: ${ ({ showHome }) => showHome ? '1px solid #eee' : '' }
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
  padding-left: 20px;
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
