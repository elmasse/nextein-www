import React from 'react'

export const Button = React.forwardRef(({ children, variant="normal", raised=false, ...props }, ref) => {
  return (
    <button type="text" {...props} ref={ref}>
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
})
