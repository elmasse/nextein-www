import React, { Component } from 'react'
import Link from 'next/link'

import { Paragraph } from 'elems'

import Section from './section'
import { Button } from './button'
import Geut from './icons/geut'

export default class Sponsors extends Component {
  render() {

    return (
      <Section title="Sponsors">
        <div className="rows container">
          <div className="row description columns">
            <Paragraph>Amazing organizations that support this project.</Paragraph>
            <div className="actions">
              <Button raised>
                <Link href="https://opencollective.com/nextein" prefetch={false}>
                  <a target="_blank" rel="noopener noreferrer"><b>Become a Sponsor!</b></a>
                </Link>  
              </Button>
            </div>
          </div>
          <div className="row sponsors rows">
            <Link href="https://geutstudio.com" prefetch={false}>
              <a target="_blank" rel="noopener noreferrer" title="GEUT">
                <Geut width="280" />
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          @media screen and (max-width: 1024px) {
            .container.rows {
              flex-direction: column;
            }
            .row.description {              
              align-items: center;
            }
          }

          .container {
            margin-bottom: calc(var(--spacing) * 4);
          }

          .row {
            flex: 1;
          }
  
          .sponsors {
            flex: 2;
            margin: calc(var(--spacing) * 3);
            flex-wrap: wrap;
            min-height: 40vh;          
            align-items: center;
            justify-content: center;
          }

          .actions {
            margin-top: calc(var(--spacing) * 2);
            margin-left: calc(var(--spacing) * -1);
          }

          .actions :global(button) {
            --button-color: var(--grey900);
            margin: 0 calc(var(--spacing) * 1);
          }


        `}</style>
      </Section>
    )
  }
}