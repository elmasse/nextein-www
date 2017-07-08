import React from 'react'
import styled from 'emotion/react'

export default () => {
  return (
    <Footer>
      <BuiltWithLove by="elmasse" />
    </Footer>
  )
}

const BuiltWithLove = ({ by }) => <Built>Built with ♥︎ and nextein by {by}</Built>

const Footer = styled('footer')`
  display: flex;
  flex-direction: row;
  background: #e4e4e4;
  height: 100px;
`

const Built = styled('div')`
  align-self: flex-end;
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  color: #999;
`
