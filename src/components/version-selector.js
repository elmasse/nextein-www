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
    <div className="selector">
      <Button
        variant="highlight"        
        onClick={toggleMenu}>
          <b>{version}</b>
        </Button>
      {open ? (
        <Menu>
          {Object.entries(all).map(([tag, name]) => (
            <MenuItem key={tag} selected={tag === selected}>
              <Link href={`/${section}/${tag}`}>
                <a><b>{name}</b></a>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      ) : null }
      <style jsx>{`
        .selector {
          position: relative;
        }

        .selector :global(button:hover) {
          box-shadow: none;
          transform: translateY(-1px);
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
      `}</style>
    </div>
  )
}