
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
          kind === 'note' && 'bg-sky-100 border-sky-300',
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
    )
  }
  BlockRender.displayName = `Block(${kind})`
  return BlockRender
}
