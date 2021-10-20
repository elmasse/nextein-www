
import Link from 'next/link'

import Github from './icons/github'
import Gitter from './icons/gitter'
import Nextein from './icons/nextein'
import Npm from './icons/npm'
import Twitter from './icons/twitter'

export default function Footer ({ children }) {
  return (
    <footer className='px-6 flex flex-col text-gray-500'>
      {children}
      <div className='flex justify-between'>
        <div className='space-y-2'>
          <div className='font-heading text-lg font-bold flex items-center space-x-2'>
            <Nextein className='w-8 fill-current' alt='Nextein'/>
            <div>Nextein</div>
          </div>
          <div className='text-sm font-light'>Copyright &copy; 2017 - { new Date().getFullYear() }<br/>Max Fierro</div>
        </div>
       
        <div className='self-center flex items-center space-x-4'>
          <Link href='https://twitter.com/nexteinjs'>
            <a target='_blank' rel='noopener noreferrer'>
            <Twitter className='h-5 fill-current' alt='Twitter'/>
            </a>
          </Link>
          <Link href='https://gitter.im/nextein'>
            <a target='_blank' rel='noopener noreferrer'>
            <Gitter className='h-5 fill-current' alt='Gitter IM'/>
            </a>
          </Link> 
          <Link href='https://github.com/elmasse/nextein'>
            <a target='_blank' rel='noopener noreferrer'>
              <Github className='h-5 fill-current' alt='Github' />
            </a>
          </Link>
          <Link href='https://www.npmjs.com/package/nextein'>
            <a target='_blank' rel='noopener noreferrer'>
              <Npm className='h-5 fill-current' alt='npm' />
            </a>
          </Link>
        </div>
      </div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-sm font-light'>Built with <span>♥︎</span> and <span>nextein</span> by <a href='https://github.com/elmasse'>/<span>elmasse</span></a></p>
      </div>
    </footer>
  )
}
