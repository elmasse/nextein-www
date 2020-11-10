import React, { Component } from 'react'
import { Anchor, Blockquote, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph, Preformatted, List, ListItem } from 'elems'

import { Button } from '../components/button'
import { Menu, MenuItem, MenuDivider } from '../components/menu'

const loremImpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export default class Design extends Component {
  render() {
    return (
      <div className="container">
        <article className="columns">
          <Heading1>Heading 1</Heading1>
          <Paragraph>{loremImpsum}</Paragraph>
          <Heading2>Heading 2</Heading2>
          <Paragraph>{loremImpsum}</Paragraph>
          <Heading3>Heading 3</Heading3>
          <Paragraph>{loremImpsum}</Paragraph>
          <Heading4>Heading 4</Heading4>
          <Heading5>Heading 5</Heading5>
          <Heading6>Heading 6</Heading6>
          <Paragraph>This <Anchor>Paragraph</Anchor> {loremImpsum}</Paragraph>
          <Heading2>Heading 2</Heading2>
          <Paragraph>{loremImpsum}</Paragraph>
          <Paragraph>{loremImpsum}</Paragraph>
          <Blockquote><Paragraph>Lorem ipsum dolor sit amet</Paragraph></Blockquote>
          <Paragraph>{loremImpsum}</Paragraph>
          <Preformatted>This is a pre</Preformatted>
          <Paragraph>{loremImpsum}</Paragraph>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>
              Item 3
              <List>
                <ListItem>Sub Item</ListItem>
                <ListItem>{loremImpsum}</ListItem>
              </List>
            </ListItem>
          </List>
          <Heading1>Components</Heading1>
          <Heading2>Buttons</Heading2>
          <div className="button component">
            <Button>Button</Button>
            <Button variant="highlight"><a><b>Guides</b></a></Button>
          </div>
          <Heading2>Menu</Heading2>
          <div className="menu component">
            <Menu>
              <MenuItem>item</MenuItem>
              <MenuDivider />
              <MenuItem><a><b>Guides</b></a></MenuItem>
              <MenuItem><a><b>Docs</b></a></MenuItem>
            </Menu>
          </div>          
        </article>
        <style jsx>{`
          article {
            padding-right: calc(var(--spacing) * 3);
          }

          .component {
            padding: calc(var(--spacing) * 2);
            min-height: 50vh;
            border: 1px solid silver;
          }

          .button > :global(button) {
            margin: calc(var(--spacing) * 1);
          }

          :global(pre) {
            background: var(--grey400);
          }
        `}</style>
      </div>
    )
  }
}