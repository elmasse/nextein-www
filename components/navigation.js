
import React from 'react'
import styled from 'emotion/react'

import Github from './icons/github'
import Npm from './icons/npm'

export default (props) => {
  return (
    <Nav {...props}>
      <a href="/guides/01-getting-started">Guides</a>
      <a href="https://github.com/elmasse/nextein">
        <Github fill="#e4e4e4" width="25"/>
      </a>
      <a href="https://www.npmjs.com/package/nextein">
        <Npm fill="#e4e4e4" width="35"  style={{marginTop: '-5px'}} />
      </a>
    </Nav>
  )
}

const Nav = styled('nav')`
  display: flex;
  border-top: 3px solid #f63;
  padding: 0 30px;
  
  & > a {
    padding: 15px;
    color: #999;
    text-decoration: none;
  }

  & > a:hover {
    color: #CCC;
  }
`