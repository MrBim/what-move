import React from 'react'

const PieceContainer = ({ children }) => {
    return (
        <div
            style={{
                width: '800px',
                height: '130px',
                display: 'flex',
                justifyContent: 'space-evenly',
                border: '2px solid grey',
                margin: '0 auto'
            }}
        >{children}</div>
    )
}

export default PieceContainer