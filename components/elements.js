import React from 'react'
import styled from 'react-emotion'

export const Main = styled('main')`
  display: flex;
  flex-direction: column;
  color: #666;
`

export const Section = styled('section')`
  background: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  & p + h2 {
    margin-top: 40px;
  }
`

export const Side = styled('div')`
  flex: .9;
  background: #eee;
`

export const Article = styled('article')`
  position: relative;
  flex: 4;
  width: 1px; // width to get the Article to not expand
  padding: 3.5em 0 3.5em 3.5em;
`

export const Title = styled('h1')`
  font-size: 4em;
  font-weight: 100;
  margin-top: -15px;
  margin-bottom: 130px;
  padding-bottom: 15px;
  border-bottom: 3px solid #f63;
`

export const Category = styled('h2')`
  font-size: .8em;
  font-weight: 100;
  color: #666;
  text-transform: uppercase;
`

export const Paragraph = styled('p')`
  font-size: 1.25em;
  font-weight: 300;
  color: #444;
  margin: 0;
  letter-spacing: -0.05px;
  line-height: 1.5em;
  max-width: 800px;

  &:not(:first-child):not(:last-child) {
    margin: 1em 0;
  }

  & strong, & b {
    font-weight: 600;
  }

  &  code {
    font-size: .95em;
    display: inline-block;
    padding: 0 5px;
    background-color: #eee;
    vertical-align: bottom;
  }
`

export const Blockquote = styled('blockquote')`
  margin: 0;
  padding-left: 1.25em;
  border-left: 5px solid; 
  & p > {
    margin: 0;
  }
`

export const CodeBlock = styled('pre')`
  margin: 1.5em 0;
  font-size: 1.2em;
  padding: .5em 1.2em;
  background: #f2f2f2;
  & .hljs {
    background: #f2f2f2;
  }
`

export const List = styled('ul')`  
  &, & li > p {
    font-size: 1.1em;
    line-height: 1.5em;
  }

  & code, & p code {
    font-size: 1em;
    display: inline-block;
    padding: 0 5px;
    background-color: #eee;
  }
  
`