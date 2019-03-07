
import React, { Component } from 'react'
import Link from 'next/link'
import Github from './icons/github'
import Npm from './icons/npm'

export default class Navigation extends Component {

  render() {
    return (
      <nav>
        <Link href="/"><a><span>N</span>extein</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/guides"><a>Guides</a></Link>
        <Link href="/docs"><a>Docs</a></Link>
        <Link href="https://github.com/elmasse/nextein">
          <a><Github fill="var(--grey500)" width="25" alt="Github" /></a>
        </Link>
        <Link href="https://www.npmjs.com/package/nextein">
          <a><Npm fill="var(--grey500)" width="35" style={{ marginTop: '5px' }} alt="npm" /></a>
        </Link>  
        <style jsx>{`
          nav {
            display: flex;
            flex-direction: row;
            align-items: center;    
            min-height: 4em;
            margin-bottom: calc(var(--spacing) * 2);
            font-family: var(--font-family-heading);
          }

          nav > a {
            padding: 0 calc(var(--spacing) * 2);
            font-size: .885em;
          }

          a, a:visited {
            color: var(--grey500);
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
          }

          a:hover {
            color: var(--grey600);
          }
          
        `}</style>              
      </nav>
    )
  }
}

