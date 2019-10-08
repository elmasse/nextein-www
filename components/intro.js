import React, { Component } from 'react'
import Link from 'next/link'

import Section from './section'
import { Paragraph } from './elements'

export default class Intro extends Component {
  render() {

    return (
      <Section title="About">
        <div className="rows container">
        <Paragraph>
          Built on top of <b>Next.js</b>, Nextein brings you the possibility of using plain Markdown files along with your React components to create static sites in minutes.
        </Paragraph>

        </div>

        <style jsx>{`
          .container {
            min-height: 50vh;
          }
        `}</style>
      </Section>
    )
  }
}