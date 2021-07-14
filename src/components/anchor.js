
export default function Anchor ({ children, ...props }) {
  return (
    <a className='inline-block relative' style={{ textDecoration: 'none' }} {...props}>
      {children}
      <span className='absolute bottom-0 left-0 right-0 bg-action bg-opacity-30 h-1/3 w-full transition-all duration-75 hover:h-full'></span>
    </a>
  )
}
