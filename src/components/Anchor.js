import React from 'react'

export default function Anchor ({ children, ...props }) {
  return (
    <a {...props}>
      {children}
      <style jsx>{`
        a {
          color: var(--main-color);
          text-decoration: none;
          display: inline-block;
          position: relative;
        }
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
          height: 50%;
        }
      `}</style>
    </a>
  )
}
