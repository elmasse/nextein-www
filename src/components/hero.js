import Link from 'nextein/link'

import { Button } from './button'
import { Window } from './overlay'

export default function Header () {
  return (
    <div className='flex items-center my-40'>
      <div className='flex-1 flex flex-col px-16 text-gray-100 space-y-12'>
        <div>
          <p className='text-8xl tracking-tighter font-light font-heading text-gray-500'>Hello, I'm</p>
          <h1 className='text-8xl tracking-tight font-extrabold font-heading'>
            <span className='pb-14 border-b-4 border-gray-100 inline-flex'>N</span>extein.
          </h1>
        </div>
        <p className='text-xl font-light'>
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
            <Button raised>
              <a><b>Docs</b></a>
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex-1 terminal row'>
        <Window>
          <div className='text-xs text-gray-400 h-48'>$ npm install nextein</div>
        </Window>
      </div>
      {/* <style jsx>{`
        .container {
          min-height: 90vh;
        }

        .row {
          flex: 1;
        }

        .title {
          display: flex;
          flex-direction: column;
          align-items: self-start;
          justify-content: center;
          padding: 0 calc(var(--spacing) * 8);
        }

        h1:first-child {
          font-weight: 300;
          color: var(--grey500);
          letter-spacing: -0.031em;
          margin: 0;
        }

        h1 {
          font-family: var(--font-family-heading);
          font-weight: 600;
          font-size: 6em;
          color: var(--grey50);
          margin: 0;
          margin-top: calc(var(--spacing) * -3);
        }

        h1 span {
          border-bottom: calc(var(--spacing) * .5) solid var(--grey100);
          padding-bottom: calc(var(--spacing) * 4 );
        }

        .title :global(p) {
          --main-color: var(--grey400);
          margin-top: calc(var(--spacing) * 10);
          font-weight: 200;
        }

        .actions {
          margin-top: calc(var(--spacing) * 2);
          margin-left: calc(var(--spacing) * -1);
        }

        .actions :global(button) {
          --button-color: var(--grey900);
          margin: 0 calc(var(--spacing) * 1);
          width: 150px;
        }

        .terminal {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          flex: 1;
          padding: 0 calc(var(--spacing) * 8);
        }

        @media screen and (max-width: 1024px) {
          .container.rows {
            flex-direction: column;
          }
          .title {
            padding: calc(var(--spacing) * 4);
            margin: 0 auto;
          }

          .terminal {
            display: none;
          }
        }
        @media screen and (max-width: 400px) {
          h1 {
            font-size: 5em;
          }
          .actions.rows {
            flex-direction: column;
            align-self: center;
            width: 100%;              
          }

          .actions :global(button) {
            margin: calc(var(--spacing) * 1) 0;
            width: 100%;
          }
        }
      `}</style>           */}
    </div>
  )
}
