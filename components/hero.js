import React, { Component } from 'react'
import Link from 'nextein/link'
import { Button } from './elements'
import Terminal from './terminal'

export default class Header extends Component {
  render() {
    return (
      <div className="container rows">
        <div className="title row">
          <h1>Hello, I'm</h1>
          <h1><span>N</span>extein.</h1>
          <p>Nextein is a site generator for <i>Next.js</i>. Create websites with the tools you already use and love. </p>
          <div className="actions rows">
            <Button variant="highlight">
              <Link href="/guides"><a><b>Guides</b></a></Link>  
            </Button>
            <Button raised>
              <Link href="/docs"><a><b>Docs</b></a></Link>  
            </Button>
          </div>
        </div>
        <div className="terminal row">
          <Terminal type="fish">npm install nextein</Terminal>
        </div>
        <style jsx>{`
          .container {
            min-height: 80vh;
          }

          .row {
            flex: 1;
          }

          .title {
            display: flex;
            flex-direction: column;
            align-items: self-start;
            justify-content: center;
            padding: 0 calc(var(--spacing) * 8);
          }

          h1:first-child {
            font-weight: 300;
            color: var(--grey500);
            letter-spacing: -0.031em;
            margin: 0;
          }

          h1 {
            font-family: var(--font-family-heading);
            font-weight: 600;
            font-size: 6em;
            color: var(--grey50);
            margin: 0;
            margin-top: calc(var(--spacing) * -3);
          }

          h1 span {
            border-bottom: calc(var(--spacing) * .5) solid var(--grey100);
            padding-bottom: calc(var(--spacing) * 4 );
          }

          p {
            margin-top: 4em;
            font-size: 1.35em;
            line-height: 1.3;
            letter-spacing: normal;
            font-family: var(--font-family-body);
            font-weight: 200;
            color: var(--grey300);            
          }
          .actions {
            margin-top: calc(var(--spacing) * 6);
            margin-left: calc(var(--spacing) * -1);
          }
          .actions :global(button) {
            margin: 0 calc(var(--spacing) * 1);
            width: 150px;
          }
          .terminal {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            flex: 1;
            padding: 0 calc(var(--spacing) * 8);
          }        
        `}</style>          
      </div>
    )
  }
}