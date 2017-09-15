
import React from 'react'
import styled from 'emotion/react'

import Github from './icons/github'
import Npm from './icons/npm'

export default ({ title, showHome = false, ...props }) => {
  return (
    <Nav {...props}>
      { title && <Title>Nextein<Light>/{title}</Light></Title> }
      { showHome && <Home href="/">Home</Home>}
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
  min-height: 60px;
  display: flex;
  padding-right: 30px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;  
  & > a {
    padding: 0 15px;
    color: #999;
    text-decoration: none;
  }
`

const Home = styled('a')`
  text-transform: uppercase;
  font-size: .8em;
  letter-spacing: .2em;
  
  :hover {
    color: #212121;
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