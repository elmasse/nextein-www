import React, { Component } from 'react'
import { Blockquote, Heading1, Heading2, Heading3, Heading4, Paragraph, Pre, List, ListItem } from '../components/elements'

const loremImpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export default class Design extends Component {
  render() {
    return (
      <div className="container">
        <article>
          <Heading1>Heading 1</Heading1>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Heading4>Heading 4</Heading4>
          <Paragraph>{loremImpsum}</Paragraph>
          <Blockquote><Paragraph>Lorem ipsum dolor sit amet</Paragraph></Blockquote>
          <Pre>This is a pre</Pre>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>
              Item 3
              <List>
                <ListItem>Sub Item</ListItem>
              </List>
            </ListItem>
          </List>
        </article>
        <style jsx>{`
          .container {
            margin: 0 auto;
            max-width: 64em;
            display: flex;
            flex-direction: column;
          }
          article {
            padding-right: calc(var(--spacing) * 3);
          }

        `}</style>
      </div>
    )
  }
}