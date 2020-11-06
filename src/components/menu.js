
import React from 'react'

export function Menu ({ children }) {
  return (
    <div className="menu">
      {children}
      <style jsx>{`
        .menu {
          --menu-bg-color: white;
          --menu-color: var(--main-color);

          color: var(--menu-color);
          display: inline-block;
          text-align: left;
          background: var(--menu-bg-color);
          box-shadow: 0 5px 10px rgba(0,0,0,.16);
          border-radius: 5px;
          min-width: auto;
          padding: 8px 0;          
        }
      `}</style>
    </div>
  )
}

export function MenuItem ({ selected, children }) {
  return (
    <div className={`menu-item ${selected ? 'selected' : ''}`}>
      {children}
      <style jsx>{`
        .menu-item {
          min-width: auto;
          padding: calc(var(--spacing) *  1) calc(var(--spacing) *  2); 
          position: relative;
          transition: color 0.1s ease,background-color 0.1s ease;
          font-size: var(--font-base);
          font-weight: 100;
        }
        .menu-item.selected, .menu-item.selected:hover {
          background: var(--action-color);
          color: var(--grey100);
        }
        .menu-item:hover {
          background: var(--grey200);
        }
      `}</style>
    </div>
  )
}

export function MenuDivider ({ children }) {
  return (
    <div className="menu-line">
      {children}
      <style jsx>{`
        .menu-line {
          border-top: 1px solid var(--main-color);
          margin:  var(--spacing) 0;
        }
      `}</style>
    </div>
  )
}
