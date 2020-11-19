import React from 'react'

export default function Anchor ({ children, ...props }) {
  return (
    <a {...props}>
      {children}
      <style jsx>
        {`
        a {
          color: var(--anchor-color, var(--main-color));
          text-decoration: none;
          display: inline-block;
          position: relative;
        }
        a::after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 10px;
          left: 0;
          bottom: 0;
          background-color: var(--action-color);
          transition: all ease 0.3s;
        }
      `}
      </style>
    </a>
  )
}