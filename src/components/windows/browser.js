import React, { Component } from 'react'

export class Browser extends Component {
  render () {
    const { className, children } = this.props;
    return (
      <div className={["browser"].concat(className).join(' ')}>
        {children}
        <style jsx>{`
          .browser {
            flex: 1;
            padding: 8px;
            font-family: monospace;
            font-size: 1em;
            background: #fafafa;
            color: #181818;
          }
        `}</style>        
      </div>
    )
  }
}