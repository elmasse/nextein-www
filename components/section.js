import React, { Component } from 'react'

import { Heading3 } from './elements'

export default class Section extends Component {
  render() {
    const { title, children } = this.props
    return (
      <div className="container">
        <div className="separator" />
        <div className="title">
          <Heading3>{title}</Heading3>
        </div>
        {children}
        <style jsx>{`
          --avatar-size: calc(var(--spacing) * 15);

          .container {
            margin-top: calc(var(--spacing) * 2);
            padding: 0 calc(var(--spacing) * 4);
          }

          .separator {
            margin: 0;
            width: calc(var(--spacing) * 10);
            height: calc(var(--spacing) * .5);
            background-color: var(--main-color);
          }

          .title :global(h2) {
            margin-top: calc(var(--spacing) * 3)
          }
          `}</style>        
      </div>

    )
  }
}
