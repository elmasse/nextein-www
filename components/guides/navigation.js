
import React from 'react'
import styled, { css } from 'react-emotion'
import Link from 'nextein/link'

export default ({ guides, post}) => {  
  return (    
    <Nav>
      {
        guides.map((guide, idx) => {
          const { data } = guide
          const active = post.data.url === data.url
          return (
            <Link key={`guide-nav-${idx}`} { ...guide } passHref><Item className={active ? 'active' : ''}>{data.title}</Item></Link>
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
