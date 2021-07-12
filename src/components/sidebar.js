import { inCategory } from 'nextein/posts'
import Link from 'nextein/link'

export default function Sidebar ({ posts,  current, activeTarget, toc = true  }) {
  posts.sort((a, b) => a.data.order - b.data.order)

  return (
    <div className='relative w-screen md:fixed md:w-80 top-0 h-screen overflow-y-auto pt-16 px-6'>
      <ul className='flex flex-col space-y-4 text-gray-600 font-bold'>
      {posts.map((post) => {
        const { data } = post
        const active = post.data.url === current.data.url
        return (
          <li key={`sidenav-${post.data.__id}`}>
            <Link { ...post } >
              <a
                className={[
                  'inline-block w-full p-2',
                  active && 'bg-gray-200 text-gray-800'
                  ].filter(Boolean).join(' ')}
                >
                  {data.title}
                </a>
            </Link>
            {toc && active && post.data.toc &&
              <ul className='text-gray-600 font-medium'>
                {post.data.toc.map((item, itemIdx) => {
                  const active = item.href === `#${activeTarget}`
                  const href = `${post.data.url}${item.href}`
                  return (
                    <li
                      key={`sidenav-${post.data.__id}-item-${itemIdx}`}
                      className={[
                        'py-2 border-l-2 pl-4',
                        'transition-all duration-200 ease-linear',
                        !active && 'border-gray-100',
                        active && 'border-action'
                      ].filter(Boolean).join(' ')}
                    >
                      <Link href={href}><a className={`toc toc-${item.type}`}>{item.value}</a></Link>
                    </li>
                  )
                })
                }
              </ul>
            }
          </li>
        )
      })}

      </ul>
      {/* <style jsx>{`
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
          ul-style: none;
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
        :global(.target.active) .toc[class*='toc-'],
        .toc[class*='toc-']:hover {
          color: var(--grey900);
        }

        .toc.active {
          background: var(--grey200);
          font-weight: bold;
        }
        
        .toc[class*='toc-']{
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

      `}</style> */}
    </div>
  )
}
