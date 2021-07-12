import Link from 'next/link'

import Section from './section'
import { Button } from './button'


export default function Contributors ({ contributors: { data: { contributors = [] } } }) {
  return (
    <Section title='Contributors'>
      <div className='flex items-center space-x-12 my-20'>
        <div className='flex-none flex flex-col space-y-10'>
          <p className='text-xl text-gray-400 font-light' >This project exists thanks to all the people who contribute.</p>
          <div className=''>
            <Link href='https://github.com/elmasse/nextein' prefetch={false}>
              <Button raised>
                <a target='_blank' rel='noopener noreferrer'><b>Become a Contributor!</b></a>
              </Button>
            </Link>  
          </div>
        </div>
        <div className='flex-1 flex flex-wrap items-center justify-center space-x-2'>
        {contributors.map(({ login, avatar_url, html_url }) => (
            <div className='' key={login}>
              <Link href={html_url} prefetch={false}>
                <a target='_blank' rel='noopener noreferrer' title={login}>
                  <img className='rounded-full w-28 shadow-md border-2 border-black border-opacity-10' src={avatar_url}/>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
  }
