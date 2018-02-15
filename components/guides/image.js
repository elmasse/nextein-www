import React from 'react'
import styled from 'react-emotion'

export default ({ src, alt }) => {
  return (
    <React.Fragment>
      <Img src={src} alt={alt} />
      <Caption>{alt}</Caption>
    </React.Fragment>
    )
}

const Img = styled('img')`
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  box-shadow: 0 0 4px rgba(0,0,0, .16);
`
const Caption = styled('span')`
  display: inline-block;
  width: 100%;
  font-size: .65em;
  font-style: italic;
  text-align: center;
  
`
