
import React from 'react'
import styled, { css } from 'react-emotion'
import { inCategory } from 'nextein/posts'

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
            <Item key={`doc-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</Item>
          )
        })
      }
      {content.length && <Separator>Content</Separator>}
      {
        content.map((doc, idx) => {
          const { data } = doc
          const active = post.data.url === data.url
          return (
            <Item key={`doc-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</Item>
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
  padding: 8px 16px;
  border-left: 5px solid transparent;
  flex: 1;
  font-size: .8em;
  font-weight: 600;
  color: #212121;
  background: #eee;
  text-transform: uppercase;
`

const Item = styled('a')`
  padding: 16px 12px;
  text-decoration: none;
  color: #999;
  border-left: 8px solid transparent;
  flex: 1;
  
  &:hover {
    color: #212121;
    background-color: #f4f4f4;
    border-left: 8px solid #ccc;
  }

  &.active,
  &.active:hover {
    color: #212121;
    background-color: #e4e4e4;
    border-left: 8px solid #f63;    
  }
  
`
