import React from 'react'

export default function Anchor ({ children, ...props }) {
  return (
    <a className='inline-block relative' style={{ textDecoration: 'none' }} {...props}>
      {children}
      <span className='absolute bottom-0 left-0 right-0 bg-action bg-opacity-30 h-1/3 w-full transition-all duration-75 hover:h-full'></span>
      {/* <style jsx>{`
        a::after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 30%;
          left: 0;
          bottom: 0;
          background-color: var(--action-color);
          opacity: .3;
          transition: all ease 0.15s;
        }
        a:hover::after {
          height: 100%;
        }
      `}</style> */}
    </a>
  )
}
