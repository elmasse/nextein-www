import React, { Component } from 'react'
import Link from 'next/link'

import { Paragraph } from 'elems'

import Section from './section'
import { Button } from './button'
import Geut from './icons/geut'

export default class Sponsors extends Component {
  state = {
    enter: false,
    anim: {}
  }

  getRotations = (e) => {
    const { top, left, height, width } = this.state;

    const [x, y] = [
      e.clientX - left,
      e.clientY - top
    ];

    return [(-15 + (30 * y/height )), (15 + (-30 * x/width ))]
  }  

  onMouseEnter = (e)  => {
    const target =  e.currentTarget
    const { top, left, height, width } = target.getBoundingClientRect();

    this.setState({
      target,
      top, left, height, width
    })
  }

  onMouseMove = (e) => {
    const { target } = this.state
    const [rx, ry] = this.getRotations(e)
    target.style =  `
    transform: perspective(4000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.1, 1.1, 1.1);
    filter: drop-shadow( 4px 4px 3px rgba(0, 0, 0, .7));
    `
  }

  onMouseLeave = (e) => {
    const { target } = this.state
    target.style = `transform: perspective(0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); filter: none;`
    this.setState({
      target: undefined
    })
  }

  render() {
    return (
      <Section title="Sponsors">
        <div className="rows container">
          <div className="row description columns">
            <Paragraph>Amazing organizations that support this project.</Paragraph>
            <div className="actions">
              <Link href="https://opencollective.com/nextein" prefetch={false}>
                <Button raised>
                  <a target="_blank" rel="noopener noreferrer"><b>Become a Sponsor!</b></a>
                </Button>
              </Link>  
            </div>
          </div>
          <div className="row sponsors rows">
            <Link href="https://geutstudio.com" prefetch={false}>
              <a target="_blank" rel="noopener noreferrer" className="link"
                title="GEUT"
                onMouseEnter={this.onMouseEnter}
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
              >
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

          .sponsors .link {
            transition: all 200ms ease-out;
          }

        `}</style>
      </Section>
    )
  }
}