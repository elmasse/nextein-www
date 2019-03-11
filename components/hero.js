import React, { Component } from 'react'

import Terminal from './terminal'

export default class Header extends Component {
  render() {
    const { className } = this.props
    return (
      <div className="container rows">
        <div className="title row">
          <h1>Hello, I'm</h1>
          <h1><span>N</span>extein.</h1>
          <p>Nextein is an static site generator based on Next.js and Markdown.</p>
        </div>
        <div className="terminal row">
          <Terminal type="fish">npm install nextein</Terminal>
        </div>
        <style jsx>{`
          .container {
            min-height: 75vh;
          }

          .row {
            flex: 1;
          }

          .title {
            display: flex;
            flex-direction: column;
            align-items: self-start;
            justify-content: center;                
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