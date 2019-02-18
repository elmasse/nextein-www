import React from 'react'

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

export const Heading1 = ({ children, ...props }) => {
  return (
    <h1 {...props}>
      {children}
      <style jsx>{`
        h1 {
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 4);
          margin-top: calc(var(--spacing) * 6)
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
          margin-left: calc(var(--spacing) * -0.5);
          margin-bottom: calc(var(--spacing) * 2);
          margin-top: calc(var(--spacing) * 3)
        }
      `}</style>
    </h4>
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
          color: var(--main-color);
        }
      `}</style>
    </p>
  )
}

export const Pre = ({ children, ...props }) => {
  return (
    <pre {...props}>
      {children}
      <style jsx>{`
        pre {
          margin: calc(var(--spacing) * 3) 0;
          padding: calc(var(--spacing) * 2);
          border: 1px solid var(--main-color);
          overflow: auto;
          line-height: 1;
          font-size: .9em;
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
