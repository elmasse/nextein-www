import React from 'react'
import styled, { css } from 'react-emotion'

import Github from './icons/github'
import Npm from './icons/npm'

export default () => {
  return (
    <Footer>
      <Brand>Nextein</Brand>
      <Notice>&copy; 2017 - Max Fierro</Notice>
      <Social>
        <a href="https://github.com/elmasse/nextein"><Github fill="#564949" width="25" style={{padding: '10px 10px 0 0'}}/></a>
        <a href="https://www.npmjs.com/package/nextein"><Npm fill="#564949" width="45" /></a>
      </Social>
      <BuiltWithLove />
    </Footer>
  )
}

const BuiltWithLove = () => (
  <Built>
    Built with <span>♥︎</span> and <span>nextein</span> by <a href="https://github.com/elmasse">/<span>elmasse</span></a>
  </Built>
)

const Footer = styled('footer')`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #272121;
  height: 250px;
  padding-top: 40px;
  > * {
    padding-left: 20px;    
  }
`

const Brand = styled('div')`
  color: #f63;
  font-size: 1.8em
`

const Notice = styled('div')`
  font-size: .8em;
  color: #564949;
  padding-bottom: 20px;
`

const Social = styled('div')`
  flex: 3;
  font-size: .8em;
  background-color: #131010;
  padding-top: 10px;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  
  a:hover svg {
    fill: #9a8888;
  }
`

const Built = styled('div')`
background-color: #131010;

padding: 10px 0;
align-self: stretch;
text-align: center;
font-size: .75em;

&, a, a:visited, a:hover {
  color: #564949;
  text-decoration: none;
}

span {
  font-weight: 600;
  color: #f63;    
}
`