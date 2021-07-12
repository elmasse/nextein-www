import React from 'react'

export const Button = React.forwardRef(({ children, variant='normal', border=true, className='', ...props }, ref) => {
  return (
    <button
      ref={ref}
      type='text'
      className={[
        'flex items-center justify-center h-10 px-6',
        'uppercase font-normal',
        'rounded-md',
        variant === 'normal' && 'bg-gray-100 hover:bg-gray-300 text-gray-900',
        variant === 'highlight' && 'bg-action text-gray-900',
        border && 'border-gray-900 border',
        'hover:shadow-sm',
        className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
})
