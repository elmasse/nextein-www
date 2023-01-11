import Link from 'next/link'

export default function Pagination ({ posts, post, section }) {
  const currIdx = posts.findIndex(p => ( p.data.title == post.data.title ))
  const prev = posts[currIdx - 1]
  const next = posts[currIdx + 1]

  return (
    <nav className='flex items-start my-16 text-action'>
      {prev && (
        (<Link
          as={`/${prev.data.category}/${prev.data.slug}`}
          href={`/${section}/[[...${section}]]`}
          className='prev flex-1 no-underline justify-start'>

          <div className='text-sm font-bold'>Previous</div>
          <div className='text-2xl md:text-3xl font-bold tracking-tight font-heading'>{prev.data.title}</div>
          <div className='text-sm font-medium uppercase'>{section}</div>

        </Link>)
      )}
      {next && (
        (<Link
          as={`/${next.data.category}/${next.data.slug}`}
          href={`/${section}/[[...${section}]]`}
          className='next flex-1 justify-end text-right'>

          <div className='text-sm font-bold'>Next</div>
          <div className='text-2xl md:text-3xl font-bold tracking-tight font-heading'>{next.data.title}</div>
          <div className='text-sm font-medium uppercase'>{section}</div>

        </Link>)
      )}
    </nav>
  );
}
