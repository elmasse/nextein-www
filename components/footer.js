import React from 'react'
import styled, { css } from 'react-emotion'

import Github from './icons/github'
import Npm from './icons/npm'

export default () => {
  return (
    <Footer>
      <Wrapper>
        <Brand>Nextein</Brand>
        <Notice>&copy; 2017 - Max Fierro</Notice>
        <Social>
          <a href="https://github.com/elmasse/nextein"><Github fill="#564949" width="35" /></a>
          <a href="https://www.npmjs.com/package/nextein"><Npm fill="#564949" width="45" /></a>
        </Social>
      </Wrapper>
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
  align-items: stretch;
  background: #272121;
  min-height: 250px;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  padding: 32px;
`
const Separator = styled('div')`
  height: 0px;
  border: 1px solid #f63;
  border-bottom: none;
  margin: 1.3em 0;
`

const Brand = styled('div')`
  color: #f63;
  font-size: 2.5em
`

const Notice = styled('div')`
  font-size: .65em;
  color: #f1f1f1;
  text-transform: uppercase;
  letter-spacing: .06em;
`

const Social = styled('div')`
  flex: 3;
  font-size: .8em;
  align-items: center;
  display: flex;
  flex-direction: row;
  
  a {
    padding: 5px;
  }

  a:hover svg {
    fill: #9a8888;
  }
`

const Built = styled('div')`
  background-color: #131010;

  padding: 16px 0;
  align-self: stretch;
  text-align: center;

  font-size: .75em;

  &, a, a:visited, a:hover {
    color: #f1f1f1;
    text-decoration: none;
  }

  span {
    font-weight: 600;
    color: #f63;    
  }
`