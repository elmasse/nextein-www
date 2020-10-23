import React, { Component } from 'react'
import Link from 'next/link'

import { Paragraph } from 'elems'

import Section from './section'
import { Button } from './button'


export default class Contributors extends Component {
  render() {
    const { contributors: { data: { contributors = [] } } } = this.props;

    return (
      <Section title="Contributors">
        <div className="rows container">
          <div className="row description columns">
            <Paragraph>This project exists thanks to all the people who contribute.</Paragraph>
            <div className="actions">
              <Link href="https://github.com/elmasse/nextein" prefetch={false}>
                <Button raised>
                  <a target="_blank" rel="noopener noreferrer"><b>Become a Contributor!</b></a>
                </Button>
              </Link>  
            </div>
          </div>
          <div className="row contributors rows">
            {
              contributors.map(({ login, avatar_url, html_url }) => (
                <div className="row columns contributor" key={login}>
                  <Link href={html_url} prefetch={false}>
                    <a target="_blank" rel="noopener noreferrer" title={login}>
                      <div className="avatar"><img src={avatar_url}/></div>
                    </a>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
        <style jsx>{`
          --avatar-size: calc(var(--spacing) * 14);

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

          .contributors {
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

          .contributor {
            flex: 0;
            margin: 0;
            align-items: center;
            justify-content: center;
          }

          .avatar img {
            width: var(--avatar-size);
            max-width: fit-content;
            border-radius: calc(var(--avatar-size) * 0.5);
            border: 6px solid rgba(0,0,0,.16);
            box-shadow: 0 5px 10px rgba(0,0,0,.16);
          }
        `}</style>
      </Section>
    )
  }
}