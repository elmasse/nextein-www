import React, { Component } from 'react'
import Link from 'next/link'

import Section from './section'
import { Heading3 } from './elements'
import Geut from './icons/geut'

export default class Sponsors extends Component {
  render() {

    return (
      <Section title="Sponsors">
        <div className="rows sponsors">
          <div className="row columns sponsor">
            <div className="avatar">
              <Geut width="280" />
            </div>
            <Link href="https://geutstudio.com" prefetch={false}>
              <a target="_blank" rel="noopener noreferrer">
                <Heading3>GEUT</Heading3>
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          --avatar-size: calc(var(--spacing) * 15);

          a, a:visited {            
            text-decoration: none;
          }

          .sponsors {
            margin: calc(var(--spacing) * 3);
            // min-height: 50vh;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }

          .sponsor {
            align-items: center;
          }

        `}</style>
      </Section>
    )
  }
}