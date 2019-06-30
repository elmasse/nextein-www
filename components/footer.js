
import React, { Component } from 'react'
import Link from 'next/link'

import { Anchor } from './elements';
import Github from './icons/github'
import Gitter from './icons/gitter'
import Nextein from './icons/nextein'
import Npm from './icons/npm'

export default class Footer extends Component {
  render() {
    const { children, gutter = false } = this.props
    return (
      <footer className="columns">
        {children}
        <div className="info rows">
          <div>
            <div className="brand">
              <Nextein width="28" alt="Nextein"/>
              Nextein
            </div>
            <div className="copyright">Copyright &copy; { new Date().getFullYear() } Max Fierro</div>
          </div>
          <div className="social rows">
            <Link href="https://gitter.im/nextein">
              <a target="_blank" rel="noopener noreferrer">
              <Gitter width="16" alt="Gitter IM"/>
              </a>
            </Link> 
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
          </div>
        </div>
        <div className="built">
          Built with <span>♥︎</span> and <span>nextein</span> by <Anchor href="https://github.com/elmasse">/<span>elmasse</span></Anchor>
        </div>
        <style jsx>{`
          footer {
            ${gutter ? `padding: 0 calc(var(--spacing) * 4);` : ''}
            padding-top: calc(var(--spacing) * 6);
            min-height: 30vh;
            color: var(--main-color);
            justify-content: flex-end;
          }

          footer :global(svg) {
            fill:  var(--main-color);
            margin: 0 var(--spacing)
          }

          .info {
            justify-content: space-between;
            min-height: 10vh;
            align-items: flex-start;
          }

          .brand {
            margin-left: -5px;
            font-size: 1.5em;
            font-weight: bold;
          }

          .copyright {
            font-size: .9em;
          }

          .social {
            align-items: center;
          }

          .built {
            align-self: center;
            padding: calc(var(--spacing) * 1);
            font-size: .85em;
            text-align: center;
          }

          .built span {
            font-weight: bold;
            color: var(--action-color);
          }
        `}</style>
      </footer>
    );
  }
}
