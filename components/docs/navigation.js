
import React from 'react'
import styled, { css } from 'react-emotion'
import { inCategory } from 'nextein/posts'
import Link from 'nextein/link'

export default ({ docs, post }) => {
  const api = docs.filter(inCategory('docs/api'))
  const content = docs.filter(inCategory('docs/content'))
  return (
    <Nav>
      {api.length && <Separator>API</Separator>}
      {
        api.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Link key={`doc-nav-${idx}`} { ...doc }><Item className={active ? 'active': ''}>{data.title}</Item></Link>
          )
        })
      }
      {content.length && <Separator>Content</Separator>}
      {
        content.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Link key={`doc-nav-${idx}`} { ...doc } passHref><Item className={active ? 'active' : ''}>{data.title}</Item></Link>
          )
        })
      }      
    </Nav>
  )
}

const Nav = styled('nav')`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: stretch;
  padding: 8px 0;
`

const Separator = styled('div')`
  padding: .5em 1em;
  border-left: 5px solid transparent;
  flex: 1;
  font-size: .75em;
  font-weight: 600;
  color: #212121;
  text-transform: uppercase;
  border-bottom: 1px solid #ccc;
`

const Item = styled('a')`
  padding: 1em;
  text-decoration: none;
  color: #212121;
  border-left: 8px solid transparent;
  flex: 1;
  
  &:hover {
    color: #181818;
    background-color: #f4f4f4;
    border-left: 8px solid #ccc;
  }
  
  &.active,
  &.active:hover {
    color: #212121;
    background-color: #fafafa;
    border-left: 8px solid #f63;    
  }
`
