
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
          <a target="_blank" rel="noopener noreferrer">
            <Github width="25" alt="Github" />
          </a>
        </Link>
        <Link href="https://www.npmjs.com/package/nextein">
          <a target="_blank" rel="noopener noreferrer">
            <Npm width="35" style={{ marginTop: '5px' }} alt="npm" />
          </a>
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

          nav > a, nav > a:visited {
            color: var(--grey500);
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
          }

          nav > a:hover {
            color: var(--grey600);
          }

          nav > a :global(svg) {
            fill: var(--grey500);
          }

          nav > a :global(svg:hover) {
            fill: var(--grey600);
          }
          
        `}</style>              
      </nav>
    )
  }
}

