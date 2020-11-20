import React, { Component } from 'react'
import { Anchor, Blockquote, Heading1, Heading2, Heading3, Heading4, Paragraph, List, ListItem } from 'elems'
import Link from 'nextein/link'

import Nextein from '../components/icons/nextein'

export default class NotFound extends Component {
  render() {
    return (
      <div className="container columns">
        <article>
          <hgroup>
            <Link href="/"><a><Nextein width="128" alt="home" /></a></Link>
            <Heading1>404</Heading1>
          </hgroup>
          <Heading2>Not Found.</Heading2>
          <Blockquote>
            <Paragraph>
              We have been moving things around. Sorry about that, this page is not here anymore.
              Maybe you are looking for:
            </Paragraph>
          </Blockquote>
          <List>
            <ListItem><Link href="/"><Anchor>Home</Anchor></Link></ListItem>
            <ListItem><Link href="/guides"><Anchor>Guides</Anchor></Link></ListItem>
            <ListItem><Link href="/docs"><Anchor>Docs</Anchor></Link></ListItem>
            <ListItem><Link href="/404"><Anchor>This Page :)</Anchor></Link></ListItem>
          </List>
        </article>
        <style jsx>{`
          .container {
            height: 100vh;
            background: radial-gradient(ellipse at 50% 0% , var(--grey50), var(--grey200));              
          }
          article {
            --h1-margin: 0;            
            // margin: calc(var(--spacing) * 4) auto;
            margin: auto;
          }
          article hgroup {
            display: flex;
            align-items: center;
          }
          article hgroup :global(svg){
            fill: var(--action-color);
            padding-right: calc(var(--spacing) * 2)
          }
          article :global(a) {
            cursor: pointer;
          }
          article :global(li) {
            list-style: none;
          }
        `}</style>
      </div>
    )
  }        
}