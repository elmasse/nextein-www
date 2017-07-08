
import React from 'react'
import styled from 'emotion/react'

export default () => {
  return (
    <Header>
      <Hello>Hello there!</Hello>
      <Title>I'm <Brand>Nextein</Brand></Title>
    </Header>
  )
}

const Header = styled('header')`
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background: #f9f9f9;
`

const Hello = styled('span')`
  font-size: 1.5em;
  color: #999;
`

const Title = styled('h1')`
  padding: 10px;
  font-weight: 100;
  border-bottom: 4px solid #f63;
`

const Brand = styled('span')`
  font-weight: 400;
`
