
import React from 'react'
import styled from 'emotion/react'

export default (props) => {
  return (
    <Nav {...props}>
      <a href="/guides/01-getting-started">guides</a>
      <a href="https://github.com/elmasse/nextein">github</a>
      <a href="https://www.npmjs.com/package/nextein">npm</a>
    </Nav>
  )
}

const Nav = styled('nav')`
  display: flex;
  border-top: 3px solid #f63;

  a {
    padding: 10px;
    color: #999;
    text-decoration: none;
  }

  a:hover {
    color: #CCC;
  }
`