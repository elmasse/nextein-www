
export default function Blocks ({ children }) {
  let Type = props => <blockquote {...props} />

  const item = children[0]?.props.children[0]
  let kind

  if (item && typeof item === 'string') {
    kind = (children[0]?.props.children[0].toLowerCase())
    if (['example', 'note', 'warning', 'tip'].includes(kind)){
      Type = Block(kind)
    }
  }

  return <Type>{children}</Type>
}

function Block (kind) {
  function BlockRender ({ children, ...props }) {
    return (
      <div
        className={[
          ' my-8 border-l-8 px-6 py-4',
          (kind === 'example' || kind === 'tip') && 'bg-gray-100 border-gray-300',
          kind === 'note' && 'bg-sky-200 border-sky-400',
          kind === 'warning' && 'bg-yellow-100 border-yellow-300'
        ].filter(Boolean).join(' ')}
        {...props}
      > 
      {children}
        <style jsx>{`
          div :global(p:first-child) {
            font-weight: bold;
          }
        `}
        </style>
      </div>

      /* <style jsx>{`
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
      */
    )
  }
  BlockRender.displayName = `Block(${kind})`
  return BlockRender
}
