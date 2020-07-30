import React from 'react'

export default function Gitter ({ alt, ...props }) {
 return (
    <svg  {...props} viewBox="0 0 18 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
      { alt && <title>{alt}</title> }
      <rect x="15" y="5" width="2" height="10"></rect>
      <rect x="10" y="5" width="2" height="20"></rect>
      <rect x="5" y="5" width="2" height="20"></rect>
      <rect width="2" height="15"></rect>
    </svg>
  )
}
