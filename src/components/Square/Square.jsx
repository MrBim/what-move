import React from 'react'

const Square = ({backgroundColor}) => {
  return (
    <div 
    style={{
        width: 'calc(20% - 4px)',
        height: 'calc(20% - 4px)',
        border: '2px solid grey',
        backgroundColor,
    }}
    ></div>
  )
}

export default Square