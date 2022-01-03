import Link from 'next/link'

import { Button } from './button'
import { Window } from './overlay'

export default function Header () {
  return (
    <div className='flex items-center my-40'>
      <div className='flex-1 flex flex-col px-8 text-gray-100 space-y-12'>
        <div>
          <p className='text-7xl md:text-8xl tracking-tighter font-light font-heading text-gray-500'>Hello, I'm</p>
          <h1 className='text-7xl md:text-8xl tracking-tight font-extrabold font-heading'>
            <span className='pb-14 border-b-4 border-gray-100 inline-flex'>N</span>extein.
          </h1>
        </div>
        <p className='text-lg md:text-xl font-light'>
          Nextein is a static site &amp; blog generator. <br />
          Combine the simplicity of <b>Markdown</b> and the power of <b>Next.js</b>.
        </p>
        <div className='flex flex-1 space-x-2'>
          <Link href='/guides'>
            <Button variant='highlight'>
              <a><b>Guides</b></a>
            </Button>
          </Link>
          <Link href='/docs'>
            <Button>
              <a><b>Docs</b></a>
            </Button>
          </Link>
        </div>
      </div>
      <div className='hidden md:block flex-1 px-8'>
        <Window>
          <div className='text-xs text-gray-400 h-48'>$ npm install nextein</div>
        </Window>
      </div>
    </div>
  )
}
