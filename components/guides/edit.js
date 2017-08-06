
import React from 'react'
import pkg from '../../package'
import Github from '../icons/github'

export default (props) => {
  const { entry, branch = 'master', ...rest } = props
  const gitUrl = `${pkg.repository}/tree/${branch}/${entry}`

  return (
    <a target="_blank" href={gitUrl} {...rest} style={{fontSize: '.9em'}}>
      Edit this on 
      <Github 
        fill="#212121"
        width="16"
        style={{
          verticalAlign: 'bottom',
          paddingLeft: 3
        }}
      />
    </a>
  )
}
