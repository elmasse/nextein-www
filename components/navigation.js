
import React from 'react'
import styled from 'emotion/react'

import Github from './icons/github'
import Npm from './icons/npm'

export default (props) => {
  return (
    <Nav {...props}>
      <GithubLink href="https://github.com/elmasse/nextein">
        <Github fill="#c0c0c0" width="25"/>
      </GithubLink>
      <NpmLink href="https://www.npmjs.com/package/nextein">
        <Npm fill="#c0c0c0" width="35"  style={{marginTop: '-5px'}} />
      </NpmLink>
    </Nav>
  )
}

const Nav = styled('nav')`
  display: flex;
  padding: 0 30px;
  justify-content: flex-end;
  box-sizing: border-box;  
  & > a {
    padding: 15px;
    color: #999;
    text-decoration: none;
  }
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