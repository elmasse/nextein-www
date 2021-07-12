import React, { useEffect, useState } from 'react'
import { Button } from './button'
import Link from 'nextein/link'
import { Menu, MenuItem } from './menu'

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
      <Button variant='highlight' border={false} onClick={toggleMenu}>
        <b className='normal-case text-white'>{version}</b>
      </Button>
      {open ? (
        <Menu className='absolute'>
          {Object.entries(all).map(([tag, name]) => (
            <MenuItem key={tag} selected={tag === selected}>
              <Link href={`/${section}/${tag}`}>
                <a><b className='normal-case'>{name}</b></a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      ) : null }
      {/* <style jsx>{`
        .selector {
          position: relative;
        }

        .selector .selector-version {
          text-transform: none;
        }

        .selector > :global(.menu) {
          position: absolute;
        }
        .selector > :global(button),
        .selector > :global(.menu) {
          width: 100px;
        }

        .selector > :global(.menu) a {
          color: inherit;
          text-decoration: none;
          display: block;
        }

        .selector :global(.menu-item) {
          display: flex;
          justify-content: center;
        }
      `}</style> */}
    </div>
  )
}