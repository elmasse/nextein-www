import React from 'react'
import styled, { css } from 'react-emotion'

import Github from './icons/github'
import Gitter from './icons/gitter'
import Npm from './icons/npm'

export default () => {
  return (
    <Footer>
      <Grid>
        <Brand>
          Nextein
          <Notice>Copyright &copy; { new Date().getFullYear() } - Max Fierro</Notice>
        </Brand>
        <SiteMap>
          <a href="/">HOME</a>
          <a href="/guides">GUIDES</a>
          <a href="/docs">DOCS</a>
        </SiteMap>
        <Social>
          <a href="https://gitter.im/nextein" target="_blank"><Gitter fill="#564949" width="20" alt="Gitter IM"/></a>
          <a href="https://github.com/elmasse/nextein" target="_blank"><Github fill="#564949" width="35" alt="Github"/></a>
          <a href="https://www.npmjs.com/package/nextein" target="_blank"><Npm fill="#564949" width="45" alt="npm" /></a>
        </Social>
      </Grid>
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

const Grid = styled('div')`
  display: flex;
  flex: 1;
  padding: 32px;
  width: 900px;
  margin: auto;
`
const SiteMap = styled('div')`
  flex: 2;
  padding: 1em 0;
  border-top: 1px solid #564949;
  & a {
    display: block;
    text-decoration: none;
    padding: 2px 0;
  }
  & a:hover {
    color: #f63;
  }
`

const Brand = styled('div')`
  color: #f63;
  font-size: 2.5em;
  margin-right: 2em;
`

const Notice = styled('div')`
  font-size: 11px;
  color: #f1f1f1;
  text-transform: uppercase;
  letter-spacing: .06em;
`

const Social = styled('div')`
  flex: 1;
  padding: 1em 0;
  border-top: 1px solid #f63;
  font-size: 2em;
  font-weight: 300;
  color: #f63;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & a {
    padding: 5px;
  }

  & a:hover svg {
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