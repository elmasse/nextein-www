import Content from 'nextein/content'
import Link from 'next/link'

import Section from './section'
import { Browser, Window } from './overlay'
import { Button } from './button'

function byOrderSorter (a, b) { return a.data.order - b.data.order }
function overlayByType (type) { return type === 'browser' ? Browser : Window }

export default function Intro ({ snippets = [] }) {
  snippets.sort(byOrderSorter)
  return (
    <Section title='About'>
      <div className='space-y-10'>
        <p className='text-xl text-gray-400 font-light'>
          Built on top of <b>Next.js</b>, Nextein brings you the possibility of using plain Markdown 
          files along with your React components to create static sites in minutes.
        </p>
        <div className='flex flex-col md:flex-row py-8 __overlay-container'>
          {snippets.map((code) => {
            const Overlay = overlayByType(code.data.type)
            return (
              <Overlay
                key={code.data.__id}
                title={code.data.title}
                className='__overlay flex-1'
              >
                <Content {...code} className={code.data.type === 'browser' ? 'p-6 prose prose-lg' : ''}/>
              </Overlay>
            )
          })}
        </div>
        <p className='text-xl text-gray-400 font-light'>
          Get started right now with our Guides or check the Starter Kit.
        </p>
        <div className='flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0'>
          <Link href='/guides' legacyBehavior>
            <Button variant='highlight'>
              <a target='_blank' rel='noopener noreferrer'><b>Get Started!</b></a>
            </Button>
          </Link>  
          <Link href='https://github.com/elmasse/nextein-starter' passHref legacyBehavior>
            <Button>
              <a target='_blank' rel='noopener noreferrer'><b>Check the starter kit</b></a>
            </Button>
          </Link>  
        </div>
      </div>
      <style jsx>{`
        // perspectives
        :global(.__overlay-container) {
          perspective: 1500px;
        }
        :global(.__overlay:nth-child(1)) {
          transform: scale(.9) rotateY(15deg) rotateX(5deg);
        }
        :global(.__overlay:nth-child(2)) {
          transform: scale(1.1);
          margin-left: -4em;
        }
        :global(.__overlay:nth-child(3)) {
          transform: scale(0.8) rotateY(-24deg) rotateX(6deg) translateZ(150px);
          margin-left: -4em;
        }

        @media screen and (max-width: 768px) {
          :global(.__overlay:nth-child(1)) {
            transform: scale(1);
          }
          :global(.__overlay:nth-child(2)) {
            transform: scale(1.1);
            margin-left: 0;
            marign-top: -8em;
            
          }
          :global(.__overlay:nth-child(3)) {
            transform: scale(1);
            margin-left: 0;
            marign-top: -8em;
          }            
        }        
      `}</style>
    </Section>
  );
}