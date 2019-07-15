import React from 'react'

export const Anchor = ({ children, ...props }) => {
  return (
    <a {...props}>
      {children}
      <style jsx>{`
        a {
          color: var(--action-color);
        }
      `}</style>
    </a>
  )
}

export const Blockquote = ({ children, ...props }) => {
  return (
    <blockquote {...props}>
      {children}
      <style jsx>{`
        blockquote {
          margin: calc(var(--spacing) * 3) 0;
          padding-left: calc(var(--spacing) * 3);
          border-left: calc(var(--spacing) * .5) solid var(--grey500);
          background-color: var(--grey50);
        }
      `}</style>
    </blockquote>
  )
}

export const Button = ({ children, variant="normal", raised=false, ...props }) => {
  return (
    <button type="text" {...props}>
      {children}
      <style jsx>{`
        button {
          ${(variant === "normal" && `
            --button-bg-color: var(--main-contrast-color);
            --button-border-color: var(--main-contrast-color);
            --button-color: var(--main-color);
            --button--hover-bg-color: var(--main-contrast-color);
            --button--hover-border-color: var(--main-color);
            --button--hover-color: var(--main--contrast-color);
          `) || ''}
          ${(variant === "highlight" && `
            --button-bg-color: var(--action-color);
            --button-border-color: var(--action-color);
            --button-color: var(--grey100);
          `) || ''}
          ${(raised && `
            box-shadow: 0 5px 10px rgba(0,0,0,.16);
          `) || ''}


          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 25px;
          height: 40px;

          background-color: var(--button-bg-color);
          border: 1px solid var(--button-border-color);
          border-radius: 5px;
          color: var(--button-color);
          font-size: var(--font-base);
          font-weight: 100;

          outline: none;

          text-transform: uppercase;
          cursor: pointer;
          text-align: center;
          user-select: none;
          position: relative;
          overflow: hidden;
          transition: all 0.15s ease;
          white-space: nowrap;
          line-height: 0;
        }

        button > :global(*) {
          text-decoration: none;
          color: inherit;
        }

        button:hover {
          ${(variant === "highlight" || raised) && `
          box-shadow: 0 7px 20px rgba(0,0,0,.32);
          transform: translateY(-1px);
          ` || `          
          background-color: var(--button--hover-bg-color);
          border: 1px solid var(--button--hover-border-color);          
          color: var(--button--hover-color);
          `
        }
      `}</style>
    </button>
  )

}

export const Code = ({ children, ...props }) => {
  return (
    <code {...props}>
      {children}
      <style jsx>{`
        code {
          background-color: var(--grey100);
        }
      `}</style>
    </code>
  )
}

export const Heading1 = ({ children, ...props }) => {
  return (
    <h1 {...props}>
      {children}
      <style jsx>{`
        h1 {
          font-family: var(--font-family-heading);
          font-size: 4.4em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 4);
          margin-top: calc(var(--spacing) * 8);
          line-height: .95em;
        }
      `}</style>
    </h1>
  )
}

export const Heading2 = ({ children, ...props }) => {
  return (
    <h2 {...props}>
      {children}
      <style jsx>{`
        h2 {
          font-family: var(--font-family-heading);
          font-size: 2.35em;
          color: var(--main-color);          
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 3);
          margin-top: calc(var(--spacing) * 5)
        }
      `}</style>
    </h2>
  )
}

export const Heading3 = ({ children, ...props }) => {
  return (
    <h3 {...props}>
      {children}
      <style jsx>{`
        h3 {
          font-family: var(--font-family-heading);
          font-size: 1.8em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2.5);
          margin-top: calc(var(--spacing) * 4)
        }
      `}</style>
    </h3>
  )
}

export const Heading4 = ({ children, ...props }) => {
  return (
    <h4 {...props}>
      {children}
      <style jsx>{`
        h4 {
          font-family: var(--font-family-heading);
          font-size: 1.5em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3)
        }
      `}</style>
    </h4>
  )
}

export const Heading5 = ({ children, ...props }) => {
  return (
    <h5 {...props}>
      {children}
      <style jsx>{`
        h5 {
          font-family: var(--font-family-heading);
          font-size: 1.3em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3)
        }
      `}</style>
    </h5>
  )
}
export const Heading6 = ({ children, ...props }) => {
  return (
    <h6 {...props}>
      {children}
      <style jsx>{`
        h6 {
          font-family: var(--font-family-heading);
          font-size: 1.1em;
          color: var(--main-color);
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3)
        }
      `}</style>
    </h6>
  )
}

export const Paragraph = ({ children, ...props }) => {
  return (
    <p {...props}>
      {children}
      <style jsx>{`
        p {
          margin: calc(var(--spacing) * 3) 0;
          line-height: 1.54;
          letter-spacing: -0.003em;
          font-weight: 400;
          font-size: 1.2em;
          color: var(--main-color);
        }
      `}</style>
    </p>
  )
}

export const Pre = ({ children, border = false, ...props }) => {
  return (
    <pre {...props}>
      {children}
      <style jsx>{`
        pre {
          margin: calc(var(--spacing) * 3) 0;
          padding: calc(var(--spacing) * 2);
          border: ${border ? '1px solid var(--main-color)' : '0px'};
          ${!border && 'border-radius: 0px;'}
          overflow: auto;
          line-height: 1;
          font-size: .9em;
        }

        pre :global(code) {
          background-color: transparent;
        }
      `}</style>
    </pre>
  )
}

export const List = ({ children, ...props }) => {
  return (
    <ul {...props}>
      {children}
      <style jsx>{`
        ul {
          margin: calc(var(--spacing) * 2) 0;
        }

        ul :global(ul) {
          margin: 0;
        }
      `}</style>
    </ul>
  )
}

export const ListItem = ({ children, ...props }) => {
  return (
    <li {...props}>
      {children}
      <style jsx>{`
        li {
          list-style: none;
          margin: calc(var(--spacing) * 1);
        }
      `}</style>
    </li>
  )
}

export const Img = (props) => {
  return (
    <React.Fragment>
      <img {...props} />
      <style jsx>{`
        img {
          display: block;
          margin: auto;
          max-width: 100%;
          height: auto;
          box-shadow: 0 0 4px rgba(0,0,0, .16); 
        }
      `}</style>
    </React.Fragment>
  )
}

