import React from 'react'
import './Text.css'

interface Props{
    txt: string;
}

const Text: React.FC<Props> = ( { txt } ) => {
  return (
    <p className='p'>{txt}</p>
  )
}

export default Text
