import Link from 'next/link'

import Section from './section'
import { Button } from './button'
import Geut from './icons/geut'

export default function Sponsors () {  
  return (
    <Section title='Sponsors'>
      <div className='flex items-center'>
        <div className='flex-none flex-col space-y-10'>
          <p className='text-xl text-gray-400 font-light'>Amazing organizations that support this project.</p>
          <div className='flex'>
            <Link href='https://opencollective.com/nextein' prefetch={false}>
              <Button raised>
                <a target='_blank' rel='noopener noreferrer'><b>Become a Sponsor!</b></a>
              </Button>
            </Link>  
          </div>
        </div>
        <div className='flex-1 flex justify-center'>
          <Link href='https://geutstudio.com' prefetch={false}>
            <a target='_blank' rel='noopener noreferrer' title='GEUT'>          
              <Geut className='w-72' />
            </a>
          </Link>
        </div>
      </div>
    </Section>
  )
}
