import React, { Component } from 'react'

class TTY extends Component {
  render () {
    const { className, children } = this.props;
    return (
      <div className={["tty"].concat(className).join(' ')}>
        {children}
        <style jsx>{`
          .tty {
            padding: 8px;
            font-family: monospace;
            font-size: .85em;
            color: #fafafa;
          }
        `}</style>        
      </div>
    )
  }
}

export class Bash extends Component {
  render() {
    const { cmd, children } = this.props;
    return (
      <TTY className="bash">
        {cmd ? <span>{cmd}</span> : null}
        {children}
        <style jsx>{`
          span::before {
            content: '$';
            padding-right: 8px;
          }
        `}</style>
      </TTY>
    )
  }
}

export class Fish extends Component {
  getCommandLine = (line = '') => {
    return (
      <React.Fragment>
        {line.split(' ').map((part, i) => {
          return (<span key={i} className={i === 0 ? "command" : "argument"}>{part} </span>);
        })}
        <style jsx>{`        
          .command {
            font-weight: bold;
            color: #fafafa;
          }
          .argument {
            color: rgb(15,214,214);
          }      
        `}</style>
      </React.Fragment>
    )
  }

  render() {
    const { cmd, children } = this.props;
    return (
      <TTY className="fish">
        {this.getCommandLine(cmd)}
        {children}
        <style jsx>{`
          :global(.fish::before){
            content: '~';
            color: rgb(15,214,214);
            padding-right: 8px;
          }
        `}</style>
      </TTY>
    )
  }
}
