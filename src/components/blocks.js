import React from 'react'
import { Blockquote } from 'elems'


export default function Blocks ({ children }) {
  let Type = Blockquote
  let kind
  const item = children[0]?.props.children[0]
  if (item && typeof item === 'string') {
    kind = (children[0]?.props.children[0].toLowerCase())
    if (['example', 'note', 'warning', 'tip'].includes(kind)){
      Type = Block(kind)
    }
  }

  return (
    <Type>
      {children}
    </Type>     
  )
}

function Block (kind) {
  function BlockRender ({ children }) {
    return (
      <div className={`block ${kind}`}>     
        {children}
      <style jsx>{`
         --block-background: var(--grey100);
         --block-border-color: var(--grey300);         
        .block {
          background: var(--block-background);
          border-left: var(--spacing) solid var(--block-border-color);
          padding: calc(var(--spacing) * 2);
          margin: calc(var(--spacing) * 2) 0;
        }
        .block :global(p:first-child) {
          display: block;
          margin-bottom: var(--spacing);
          font-weight: bold;
        }
        .block :global(p) {
          margin: 0;
        }

        @media screen and (min-width: 1024px) {
          .block {
            margin-left: calc(var(--spacing) * -1);
          }
        }

        .block.note {
          --block-background: rgb(173, 216, 230, .3);
          --block-border-color: rgb(173, 216, 230);
        }

        .block.warning {
          --block-background: rgba(255, 229, 100, .3);
          --block-border-color: rgb(255, 229, 100);
        }
      `}</style>  
      </div>
    )
  }
  BlockRender.displayName = `Block(${kind})`
  return BlockRender
}
