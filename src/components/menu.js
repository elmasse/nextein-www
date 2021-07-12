
export function Menu ({ className, children }) {
  return (
    <div
      className={[
        'bg-white inline-block text-left shadow rounded-sm py-2',
        className
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export function MenuItem ({ selected, children }) {
  return (
    <div
      className={[
        'relative py-2 px-6 text-md min-w-full text-right transition-all duration-100',
        !selected && 'bg-gray-100 hover:bg-gray-200',
        selected && 'bg-action text-gray-100'
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
