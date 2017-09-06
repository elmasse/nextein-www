
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
            <a  key={`guide-nav-${idx}`} className={active ? 'active' : ''} href={data.url}>{data.title}</a>
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
  
  > * {
    padding: 10px 20px;
  }

  & a {
    text-decoration: none;
    color: #999;
    border-left: 5px solid transparent;
    flex: 1;
    margin-right: 20px;
  }

  & a.active, & a.active:hover {
    color: #212121;
    background-color: #e4e4e4;
    border-left: 5px solid #f63;
  }

  & a:hover {
    color: #212121;
    background-color: #f4f4f4;
    border-left: 5px solid #ccc;
  }

`