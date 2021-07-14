import Link from 'nextein/link'

export default function Pagination ({ posts, post, section }) {
  const currIdx = posts.findIndex(p => ( p.data.title == post.data.title ))
  const prev = posts[currIdx - 1]
  const next = posts[currIdx + 1]

  return (
    <nav className='flex items-start my-16 text-action'>
      {prev && (
        <Link {...prev}>
          <a className='prev flex-1 no-underline justify-start'>
            <div className='text-sm font-bold'>Previous</div>
            <div className='text-2xl md:text-3xl font-bold tracking-tight font-heading'>{prev.data.title}</div>
            <div className='text-sm font-medium uppercase'>{section}</div>
          </a>
        </Link>
      )}
      {next && (
        <Link {...next}>
          <a className='next flex-1 justify-end text-right'>
            <div className='text-sm font-bold'>Next</div>
            <div className='text-2xl md:text-3xl font-bold tracking-tight font-heading'>{next.data.title}</div>
            <div className='text-sm font-medium uppercase'>{section}</div>
          </a>
        </Link>
      )}
      {/* <style jsx>{`
        // nav {
        //   display: flex;
        //   flex-direction: row;
        //   align-items: flex-start;
        //   min-height: 4em;
        //   margin: calc(var(--spacing) * 8) 0;    
        // }

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
      `}</style>  */}

    </nav>
  )
}
