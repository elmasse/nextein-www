import { useEffect, useState } from 'react'
import Link from 'nextein/link'

export default function VersionSelector ({ section, selected, versions = {} }) {
  const [open, setOpen] = useState(false)
  const { latest, ...all } = versions
  const version = all[selected] || all[latest]

  function toggleMenu (ev) {
    ev.stopPropagation()
    setOpen(value => !value)
  }

  function closeMenu () {
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <div className='relative'>
      <button className='flex items-center space-x-1 py-2 pl-6 pr-3 text-gray-100 bg-action rounded-md' onClick={toggleMenu}>
        <b className='text-sm normal-case'>{version}</b>
        <svg className='h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </button>
      {open ? (
        <div className='absolute inset-x-0 mt-1 bg-white inline-block text-left shadow-lg rounded border py-1'>
          {Object.entries(all).map(([tag, name]) => (
            <div
              key={tag}
              className={[
                'relative py-2 px-6 text-md min-w-full text-right transition-all duration-100',
                (tag === selected) ? 'bg-action text-gray-100' : 'hover:bg-gray-100'
              ].filter(Boolean).join(' ')}
            >
              <Link href={`/${section}/${tag}`}>
                <a><b className='normal-case text-sm'>{name}</b></a>
              </Link>
            </div>
          ))}
        </div>
      ) : null }
    </div>
  )
}
