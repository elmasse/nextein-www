import React from 'react'
import Highlight from 'react-highlight/lib/optimized'

export default ({className = "", children}) => {
  const [, lang] = className.split('-')
  if (lang) {
    return <Highlight languages={['javascript', 'json', 'markdown','bash', 'yaml', 'xml']} className={className}>{children.join('')}</Highlight>
  }

  return <code className={className}>{children}</code>
}
