import React, { Component } from 'react'
import { inCategory } from 'nextein/posts'
import Link from 'nextein/link'

import { List, ListItem } from './elements'

export default class Sidebar extends Component {
  groupPosts() {
    const { posts, categories = {} } = this.props
    posts.sort((a, b) => a.data.order - b.data.order)

    const keys = Object.keys(categories)
    return keys.length ?
      keys.map(category => ({ title: categories[category], posts: posts.filter(inCategory(category)) }))
      : [{ posts }]
  }
  render() {
    const { current } = this.props
    const groups = this.groupPosts()
    return (
      <div className="container">
        <List>
          {groups.map(({ title, posts }) => 
            <React.Fragment key={`${title || 'all'}`}>
              {title && <div className="separator">{title}</div>}
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
            </React.Fragment>
            
          
          )}
        </List>
        <style jsx>{`
          .container {
            position: fixed;
            top: 0;
            height: 100vh;
            width: ${'width' in this.props ? `${this.props.width}` : 'auto'};
            padding: 0 var(--spacing);
            padding-top: calc(var(--spacing) * 8);
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            background: var(--grey100);
          }
          .separator {
            text-transform: uppercase;            
            padding: var(--spacing);
            border-bottom: 1px solid var(--grey400);
            color: var(--main-color);
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