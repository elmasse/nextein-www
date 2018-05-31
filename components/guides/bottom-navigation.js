import React, { Component } from 'react'
import styled from 'react-emotion'
import Link from 'nextein/link'

export default class BottomNavigation extends Component {
  render () {
    const { guides, post } = this.props
    const currIdx = guides.findIndex(guide => ( guide.data.title == post.data.title ))
    const prev = guides[currIdx - 1]
    const next = guides[currIdx + 1]
  
    return (
      <BottomNav>
        <NavPrev>
        {
          prev &&
          <Link {...prev}><a className="prev"><div className="nav-title">Previous</div><div className="article-title"> {prev.data.title}</div></a></Link>
        }
        </NavPrev>
        <NavNext>
        {
          next &&
          <Link {...next}><a className="next"><div className="nav-title">Next</div><div className="article-title"> {next.data.title}</div></a></Link>
        }
        </NavNext>
    </BottomNav>      
    )
  }
}

const BottomNav = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-left: -3.75em;
  margin-top: 3em;
  
  .nav-title {
    font-size: .7em;
    text-transform: uppercase;
    letter-spacing: .2em;    
  }

  .article-title {
    font-size: 1.5em;
    font-weight: 300;
  }

  & a {
    text-decoration: none;
    color: #f63;
    font-size: 1.1em;
  }
`
const NavPrev = styled('div')`
  padding-left: 1.8em;
`

const NavNext = styled('div')`
  padding-right: 1.8em;
  text-align: right;
`