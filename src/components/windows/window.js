import React, { Component } from 'react'
import { Bash, Fish } from './terminal'
import { Browser } from './browser'

const TYPES = {
  bash: Bash,
  zsh: Fish,
  browser: Browser
}

export default class Window extends Component {
  render() {
    const { title, type, children, className = '', ...rest } = this.props
    const Type = TYPES[type] || ((props) => props.children)
    return (      
      <div className={["window"].concat(className).join(' ')}>
        <div className="toolbar">
          <i className="close" />
          <i className="minimize" />
          <i className="maximize" />
          <div className="title">{title||type}</div>
        </div>
        <div className="body">
          <Type {...rest}>{children}</Type>
        </div>
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
          .body {
            flex: 1;
            display: flex;
          }
        `}</style>          
      </div>
    )
  }
}