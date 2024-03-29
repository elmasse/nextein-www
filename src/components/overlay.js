function Toolbar ({ children }) {
  return (
    <div className='flex-none h-11 flex items-center justify-start relative px-4'>
      <div className='flex space-x-1.5'>
        <div className='w-3 h-3 rounded-full bg-red-500'></div>
        <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
        <div className='w-3 h-3 rounded-full bg-green-400'></div>
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>{children}</div>
    </div>
  )
}

export function Window ({ title, children, className }) {
  return (
    <div className={['relative overflow-hidden rounded-xl shadow-2xl flex bg-light-blue-500 pb-6 md:pb-0 border border-gray-800', className].join(' ')} style={{ borderTopColor: '#666' }}>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative w-full flex flex-col'>
        <Toolbar><div className='text-sm text-gray-300'>{title}</div></Toolbar>
        <div className='relative min-h-0 flex-auto flex flex-col'>
          <div className='w-full flex-auto flex min-h-0 overflow-auto'>
            <div className='w-full relative flex-auto'>
              <pre className='flex min-h-full text-xs md:text-sm'>
                <code className='flex-auto relative block text-white pt-4 pb-4 px-4 overflow-auto'>
                  {children}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        // Kill pre code background generated by prism theme. We want the window to act as the code container.
        div :global(:not(pre) > code[class*="language-"]),
        div :global(pre[class*="language-"]) {
          background: transparent;
        }
      `}</style>
    </div>
  )
}

export function Browser ({ title, children, className }) {
  return (
    <div
      className={['relative overflow-hidden rounded-xl shadow-2xl flex bg-light-blue-500 pb-6 md:pb-0', className].join(' ')}>
      <div className='absolute inset-0 bg-gray-50'></div>
      <div className='relative w-full flex flex-col'>
        <Toolbar><div className='text-sm text-gray-700'>{title}</div></Toolbar>
        <div className='relative border-t border-white border-opacity-10 min-h-0 flex-auto flex flex-col'>
          <div className='w-full flex-auto flex min-h-0 overflow-auto'>
            <div className='w-full relative flex-auto bg-gray-50'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
