import Link from 'next/link'

export default function Sidebar ({ posts,  current, activeTarget, toc = true, section  }) {
  posts.sort((a, b) => a.data.order - b.data.order)

  return (
    <div className='relative w-screen md:fixed md:w-80 top-0 h-screen overflow-y-auto pt-16 px-0.5'>
      <ul className='flex flex-col space-y-2 text-gray-600 font-bold'>
      {posts.map((post) => {
        const active = post.data.__id === current.data.__id
        return (
          <li key={`sidenav-${post.data.__id}`}>
            <Link as={`/${post.data.category}/${post.data.slug}`} href={`/${section}/[[...${section}]]`}>
              <a
                className={[
                  'inline-block w-full px-4 py-2 border-l-2',
                  active ? 'bg-gray-200 text-gray-800 border-gray-300' : 'border-gray-100'
                  ].filter(Boolean).join(' ')}
                >
                  {post.data.title}
                </a>
            </Link>
            {toc && active && post.data.toc &&
              <ul className='text-gray-500 font-medium'>
                {post.data.toc.map((item, itemIdx) => {
                  const active = item.href === `#${activeTarget}`
                  const href = `/${post.data.category}/${post.data.slug}${item.href}`
                  return (
                    <li
                      key={`sidenav-${post.data.__id}-item-${itemIdx}`}
                      className={[
                        'py-2 border-l-2 pl-6',
                        'transition-all duration-200 ease-linear',
                        active ? 'border-action text-gray-900' : 'border-gray-100',
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
    </div>
  )
}
