import React, { Component } from 'react'
import Link from 'nextein/link'

export default class Pagination extends Component {
  render() {
    const { posts, post } = this.props
    const currIdx = posts.findIndex(p => ( p.data.title == post.data.title ))
    const prev = posts[currIdx - 1]
    const next = posts[currIdx + 1]

    return (
      <nav>
        {prev && (
          <Link {...prev}>
            <a className="prev columns">
              <div className="nav-to">Previous</div>
              <div className="title">{prev.data.title}</div>
              <div className="category">{prev.data.category}</div>
            </a>
          </Link>
        )}
        {next && (
          <Link {...next}>
            <a className="next columns">
              <div className="nav-to">Next</div>
              <div className="title">{next.data.title}</div>
              <div className="category">{next.data.category}</div>
            </a>
          </Link>
        )}
        <style jsx>{`
          nav {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            min-height: 4em;
            margin: calc(var(--spacing) * 8) 0;    
          }

          nav > .columns {
            flex: 1;
          }

          nav > a {
            text-decoration: none;
            color: var(--action-color);
          }

          .prev {
            justify-content: flex-start;
          }

          .next {
            justify-content: flex-end;
            text-align: right;
          }

          .nav-to {
            font-weight: bold;
          }

          .title {
            font-family: var(--font-family-heading);
            font-size: 1.4em;
            font-weight: bold;
          }

          .category {
            font-family: var(--font-family-heading);
            font-size: .85em;
            text-transform: uppercase;
          }
        `}</style> 

      </nav>
    )
  }
}