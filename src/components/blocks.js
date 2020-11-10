import React from 'react'
import { Blockquote, Paragraph } from 'elems'

const TYPES = {
  'blockquote': Blockquote,
  'tip': Tip
}

export default function Blocks ({ children }) {
  let kind = 'blockquoute'
  const item = children[0]?.props.children[0]
  if (item && typeof item === 'string') {
    kind = (children[0]?.props.children[0].toLowerCase())
  }
  let Type = TYPES[kind]

  if (!Type) {
    Type = Blockquote
  }

  return (
    <Type>
      {children}
    </Type>     
  )
}

function Tip ({ children }) {
  const [_, ...body] = children
  return (
    <div className="tip">     
      <i>Tip</i> 
      {body}
    <style jsx>{`
      .tip {
        background: var(--grey100);
        border-left: var(--spacing) solid var(--grey300);
        padding: calc(var(--spacing) * 2);
        margin: calc(var(--spacing) * 2) 0;
      }
      .tip i {
        display: block;
        margin-bottom: var(--spacing);
        font-weight: bold;
      }
      .tip :global(p) {
        margin: 0;
      }
    `}</style>  
    </div>
  )
}
