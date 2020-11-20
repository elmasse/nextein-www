import React, { Component, Fragment } from 'react'
import { inCategory } from 'nextein/posts'
import Link from 'nextein/link'

import { List, ListItem } from 'elems'

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
    const { current, activeTarget, toc = true } = this.props
    const groups = this.groupPosts()
    return (
      <div className="container">
        <List>
          {groups.map(({ title, posts }) => 
            <Fragment key={`${title || 'all'}`}>
              {title && <div className="separator">{title}</div>}
              {posts.map((post) => {
                const { data } = post
                const active = post.data.url === current.data.url
                return (
                  <ListItem key={`sidenav-${post.data.__id}`}>
                    <Link { ...post } ><a className={`toc ${active ? 'active' : ''}`}>{data.title}</a></Link>
                    {toc && active && post.data.toc &&
                      <List>
                        {post.data.toc.map((item, itemIdx) => {
                          const active = item.href === `#${activeTarget}`
                          const href = `${post.data.url}${item.href}`
                          return (
                            <ListItem key={`sidenav-${post.data.__id}-item-${itemIdx}`} className={`target ${active ? 'active' : ''}`}>
                              <Link href={href}><a className={`toc toc-${item.type}`}>{item.value}</a></Link>
                            </ListItem>
                          )
                        })
                        }
                      </List>
                    }
                  </ListItem>
                )
              })}
            </Fragment>
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

            --li-font-size: 1rem;
          }

          @media screen and (max-width: 1024px) {
            .container {
              position: relative;
              width: 100vw;
              padding: 0 var(--spacing);
              height: auto;
              margin-bottom: calc(var(--spacing) * 8);
              font-size: 16px;
            }
          }

          .container :global(ul) {
            list-style: none;
            padding: 0;
          }

          .separator {
            text-transform: uppercase;            
            padding: var(--spacing);
            color: var(--grey700);
            font-weight: bold;
          }

          .toc {
            display: block;
            padding: var(--spacing);
            color: var(--grey600);
            text-decoration: none;
            font-size: 0.95em;
            font-weight: 600;
            line-height: 1.5;
          }

          .toc:hover,
          .toc.active,
          :global(.target.active) .toc[class*="toc-"],
          .toc[class*="toc-"]:hover {
            color: var(--grey900);
          }

          .toc.active {
            background: var(--grey200);
            font-weight: bold;
          }
          
          .toc[class*="toc-"]{
            color: var(--grey600);
            font-weight: 400;
            font-size: 0.90em;
          }
          
          .toc-h3 {
            padding-left: calc(var(--spacing) * 2);
          } 

          .container :global(.target)  {
            border-left: 2px solid transparent;
            transition: all 0.2s ease;
            margin-left: 0px;
            padding-left: var(--spacing);            
          }
          .container :global(.target.active) {
            border-left-color: var(--action-color);
          }

        `}</style>
      </div>
    )
  }
}