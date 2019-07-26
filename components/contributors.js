import React, { Component } from 'react'
import Link from 'next/link'

import Section from './section'
import { Heading6 } from './elements'


export default class Contributors extends Component {
  render() {
    const { contributors: { data: { contributors } } } = this.props;

    return (
      <Section title="Contributors">
        <div className="rows contributors">
        {
          contributors.map(({ login, avatar_url, html_url }) => (
            <div className="row columns contributor" key={login}>
              <div className="avatar"><img src={avatar_url} /></div>
              <Link href={html_url} prefetch={false}>
                <a target="_blank" rel="noopener noreferrer">
                  <Heading6>{login}</Heading6>
                </a>
              </Link>
            </div>
          ))
        }
        </div>
        <style jsx>{`
          --avatar-size: calc(var(--spacing) * 15);

          a, a:visited {
            text-decoration: none;
          }

          .contributors {
            margin: calc(var(--spacing) * 3);
            min-height: 50vh;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }

          .contributor {
            margin: var(--spacing);
            align-items: center;
          }

          .avatar img {
            width: var(--avatar-size);
            border-radius: calc(var(--avatar-size) * 0.5);
            
          }
        `}</style>
      </Section>
    )
  }
}