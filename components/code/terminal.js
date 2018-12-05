import React, { Component } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export default class Terminal extends Component {
  render() {
    const { color = 'white', width, children, shadow = true, radius = 5 } = this.props;

    return (
      <Window width={width} color={color} shadow={shadow} radius={radius}>
        <Header>
          <IconX />
          <IconMinus />
          <IconPlus />
          <Title>term</Title>
        </Header> 
        <Body>{ children }</Body>
      </Window> 
    )
  }
}

const Window = styled('div')`
  background-color: ${({ color }) => color };
  border-radius: ${({ radius }) => `${radius}px`};
  ${({ shadow }) => shadow && `box-shadow: 2px 8px 16px rgba(0,0,0, 0.3);`}
  width: 100%;
  height: 100%;
  position: relative;
  & .hljs {
    display: block;
  }  
`
const Header = styled('div')`
  width: 100%;
  height: 36px;
  position: absolute;
`
const Icon = css`
  border-radius: 50%;
  display: inline-block;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
`

const IconX = styled('div')`
  ${Icon}
  background-color: #ff5f56;
  left: 13px;  
`
const IconMinus = styled('div')`
  ${Icon}
  background-color: #ffbd2e;
  left: 33px;
`
const IconPlus = styled('div')`
  ${Icon}
  background-color: #27c93f;
  left: 53px;
`
const Title = styled('div')`
  color: #999;
  font-size: 12px;
  line-height: 24px;
  position: absolute;
  top: 3px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  padding: 4px;

`
const Body = styled('div')`
  width: 100%;
  height: 100%;
  line-height: 1em;
  padding-top: 36px;
  font-size: 16px;
  overflow: auto;
  & code {
    background-color: transparent;
    padding: 1.5em 2em;
  }
`