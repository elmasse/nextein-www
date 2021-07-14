
export default function Section ({ title, children, className, ...props }) {
  return (
    <section className={['mt-4 px-8', className].join(' ')} {...props}>
      <div className='m-0 w-20 h-1 bg-gray-300' />
      <div className='my-8 text-action'>
        <h1 className='text-4xl font-heading font-extrabold tracking-tight'>{title}</h1>
      </div>
      {children}        
    </section>

  )
}
