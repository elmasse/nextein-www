import Link from 'next/link'

import Section from './section'
import { Button } from './button'
import Geut from './icons/geut'

export default function Sponsors () {  
  return (
    <Section title='Sponsors'>
      <div className='flex flex-col md:flex-row space-x-0 space-y-8 md:space-x-12 md:space-y-0'>
        <div className='flex-none flex-col space-y-10'>
          <p className='text-xl text-gray-400 font-light'>Amazing organizations that support this project.</p>
          <div className='flex'>
            <Link href='https://opencollective.com/nextein' prefetch={false} legacyBehavior>
              <Button>
                <a target='_blank' rel='noopener noreferrer'><b>Become a Sponsor!</b></a>
              </Button>
            </Link>  
          </div>
        </div>
        <div className='flex-1 flex justify-center' />
      </div>
    </Section>
  );
}
