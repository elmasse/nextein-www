
import React from 'react'
import styled from 'emotion/react'

export default () => {
  return (
    <Header>
      <Main>
        <Hello>Hello there!</Hello>
        <Title>I'm <Brand>Nextein</Brand></Title>
      </Main>
      <Actions>
        <Button href="/guides">Guides </Button>
        <Secondary href="/docs" inverted>Docs</Secondary>
      </Actions>
    </Header>
  )
}

const Header = styled('header')`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background: #f1f1f1;
  background-image: radial-gradient(circle at center, #fff 0%,  #e9e9e9 100%);
  
`

const Main = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

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

const Actions = styled('div')`
  width: 100vw;
  display: flex;
  justify-content: center;

`

const Button = styled('a')`
  border: 2px solid #f63;
  border-radius: 4px;
  color: #fff;
  background-color: #f63;
  
  font-size: .45em;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: .25em;
  padding: 10px 20px;
  margin: 20px 10px;  
  &:hover {
    color: #f63;
    background-color: #fafafa;
  }
`

const Secondary = styled(Button)`
  color: #f63;
  background-color: #fff;

  &:hover {
    color: #f63;
    background-color: #f9f9f9;
  }
`