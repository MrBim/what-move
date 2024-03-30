import React from 'react'

const SquareContainer = ({ children }) => {
    return (
        <div
            style={{
                width: '800px',
                height: '800px',
                display: 'flex',
                flexWrap: 'wrap',
                border: '2px solid grey',
                margin: '24px auto 24px auto',
            }}
        >{children}</div>
    )
}

export default SquareContainer