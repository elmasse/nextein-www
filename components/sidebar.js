import React, { Component } from 'react'
import Link from 'nextein/link'

import { List, ListItem } from './elements'

export default class Sidebar extends Component {
  render() {
    const { posts, current, ...props } = this.props

    return (
      <div className="container">
        <List>
          {posts.map((post, idx) => {
            const { data } = post
            const active = post.data.url === current.data.url
            return (
              <ListItem key={`sidenav-${idx}`}>
                <Link { ...post } ><a className={`toc ${active ? 'active' : ''}`}>{data.title}</a></Link>
                {active && post.data.toc &&
                  <List>
                    {post.data.toc.map((item, itemIdx) => {
                      return (
                        <ListItem key={`sidenav-${idx}-item-${itemIdx}`}>
                          <Link href={item.href}><a className={`toc toc-${item.type}`}>{item.value}</a></Link>
                        </ListItem>
                      )
                    })
                    }
                  </List>
                }
              </ListItem>
            )
          })}
        </List>
        <style jsx>{`
          .container {
            position: ${'fixed' in props ? 'fixed': 'static'};
            display: flex;
            flex-direction: column;
            max-width: 288px;
          }

          .toc {
            display: block;
            padding: var(--spacing);
            color: var(--main-color);
            text-decoration: none;
            font-size: 0.95em;
            font-weight: 400;
            line-height: 1.5;
          }

          .toc:hover, .toc.active {          
            color: var(--grey900);
          }

          .toc.active {
            background: var(--grey200);
          }

          .toc-h2 {
            font-size: 0.90em;
          } 
          .toc-h3 {
            font-size: 0.88em;
            font-style: italic;
            padding-left: calc(var(--spacing) * 2);
          } 
        `}</style>
      </div>
    )
  }
}