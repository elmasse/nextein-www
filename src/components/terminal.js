import React, { Component } from 'react'

export default class Terminal extends Component {

  render() {
    const { title, type = 'fish', children, ...rest } = this.props
    const Type = TERMINALS[type]
    return (      
      <div className="window" {...rest}>
        <div className="toolbar">
          <i className="close" />
          <i className="minimize" />
          <i className="maximize" />
          <div className="title">{title||type}</div>
        </div>
        <div className="tty"><Type>{children}</Type></div>
        <style jsx>{`
          .window {
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            background-color: #2f2f2f;
            padding: 8px;
            border-radius: 8px;
            border: 1px solid #333;
            border-top-color: #666;
            box-shadow: 4px 16px 42px rgba(0,0,0,.3);
            font-family: monospace;
            font-size: .85em;
            min-height: 250px;
            color: #fafafa;
          }
          .toolbar {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            position: relative;
            margin-bottom: 8px;
          }
          i {
            border-radius: 50%;
            margin: 4px;
            width: 12px;
            height: 12px;          
          }
          .close {
            background-color: #ff5f56;
          }
          .minimize {
            background-color: #ffbd2e;
          }
          .maximize {
            background-color: #27c93f;
          }
          .title {
            position: absolute;
            width: 100%;
            margin: 5px;
            text-align: center;
            line-height: 1;
            font-size: .9em;
          }
          .tty {
            flex: 1;
            padding: 8px;
          }
        `}</style>          
      </div>
    )
  }
}

export class Bash extends Component {
  render() {
    const { children } = this.props;
    return (
      <p>
        {children}
        <style jsx>{`
          p::before {
            content: '$';
            padding-right: 8px;
          }
        `}</style>
      </p>
    )
  }
}

export class Fish extends Component {
  getCommandLine = children => {
    const [ line ] = React.Children.toArray(children)    
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
    const { children } = this.props;
    return (
      <p>
        {this.getCommandLine(children)}
        <style jsx>{`
          p::before {
            content: '~';
            color: rgb(15,214,214);
            padding-right: 8px;
          }
        `}</style>
      </p>
    )
  }
}

const TERMINALS = {
  bash: Bash,
  fish: Fish
}
