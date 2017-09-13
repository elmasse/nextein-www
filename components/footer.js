import React from 'react'
import styled, { css } from 'emotion/react'

import Github from './icons/github'

export default () => {
  return (
    <Footer>
      <div className={github}>
        <Github fill="#e4e4e4" width="25" style={{paddingRight: '5px'}}/>
        <a href="https://github.com/elmasse/nextein">github.com/elmasse/<span>nextein</span></a>
      </div>  
      <BuiltWithLove />
    </Footer>
  )
}

const BuiltWithLove = ({ by }) => (
  <Built>
    Built with <span>♥︎</span> and <span>nextein</span> by <a href="https://github.com/elmasse">/<span>elmasse</span></a>
  </Built>
)

const Footer = styled('footer')`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #272121;
  height: 120px;
  padding-top:40px;
`

const Built = styled('div')`
  align-self: center;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  &, & a, & a:visited, & a:hover {
    color: #eee;
    text-decoration: none;
  }

  & span {
    font-weight: 600;
    color: #f63;
    
  }
`
const github = css`
  align-self: center;
  flex-grow: 1;
  text-align: center;

  font-size: 14px;
  align-items: center;
  display: flex;
  flex-direction: row;

  &, & a, & a:visited, & a:hover {
    color: #eee;
    text-decoration: none;
  }

  & span {
    font-weight: 600;
    color: #f63;
  }
`