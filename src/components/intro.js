import React, { Component } from 'react'
import { Paragraph } from 'elems'
import Content from 'nextein/content'
import renderers from 'elems/renderers'

import Section from './section'
import Window from './windows/window'

const byOrderSorter = (a, b) => a.data.order - b.data.order

export default class Intro extends Component {
  render() {
    const { snippets = [] } = this.props
    snippets.sort(byOrderSorter)
    return (
      <Section title="About">
        <div className="container">
            <Paragraph>
              Built on top of <b>Next.js</b>, Nextein brings you the possibility of using plain Markdown 
              files along with your React components to create static sites in minutes.
            </Paragraph>
            <div className="rows examples">
            {snippets.map(code =>
              <Window
                key={code.data.__id}
                type={code.data.type}
                cmd={code.data.cmd}
                title={code.data.title}
                className={`${code.data.type} window example`}
              >
                <Content {...code} renderers={code.data.type === 'browser' && renderers}/>
              </Window>
            )}
            </div>
        </div>
        <style jsx>{`
          .container {
            min-height: 50vh;
            margin-bottom: 5em;
          }

          .rows.examples {
            margin: 5em 0;
            perspective: 1500px;
          }

          :global(.window.example) {
            flex: 1;
          }
          :global(.window.example:nth-child(1)) {
            transform: scale(.9) rotateY(15deg) rotateX(5deg);
          }
          :global(.window.example:nth-child(2)) {
            transform: scale(1.1);
            margin-left: -4em;
          }
          :global(.window.example:nth-child(3)) {
            transform: scale(1.1) rotateY(-24deg) rotateX(12deg);
          }

          @media screen and (max-width: 1024px) {
            .rows.examples {
              display: flex;
              flex-direction: column;
            }
            :global(.window.example:nth-child(1)) {
              transform: scale(1);
            }
            :global(.window.example:nth-child(2)) {
              transform: scale(1.1);
              margin-left: 0;
              marign-top: -8em;
              
            }
            :global(.window.example:nth-child(3)) {
              transform: scale(1);
              marign-top: -8em;
            }            
          }
          
          :global(.window.browser .browser) {
            --main-color: var(--grey700);
            background: var(--grey100);
            align-items: center;
            flex-direction: column;
            display: flex;
          }
        `}</style>
      </Section>
    )
  }
}