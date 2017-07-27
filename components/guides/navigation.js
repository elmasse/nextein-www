
import React from 'react'
import styled from 'emotion/react'

export default ({ guides, post}) => {  
  return (    
    <Nav>
      {
        guides.map((guide, idx) => {
          const { data } = guide
          const active = post.data.url === data.url
          return (
            <a  key={`guide-nav-${idx}`} className={active && 'active'} href={data.url}>{data.title}</a>
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
  align-items: flex-start;
  
  > * {
    padding: 5px 20px;
  }

  a, a:hover, a:visited {
    text-decoration: none;
    color: #999
  }

  a.active {
    color: #212121;
    background-color: #e4e4e4;
  }

`