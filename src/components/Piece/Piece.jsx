import React from 'react'

const Piece = ({ piece, setPiece }) => {
    const handlePieceClick = () => {
        setPiece(piece)
    }
    return (
        <div style={{
            width: '156px',
            maxHeight: '156px',
            border: '2px solid grey',
            objectFit: 'contain',
            overflow: 'hidden'
        }}>
            <img
                onClick={handlePieceClick}
                style={{
                    width: '100%',
                    objectFit: 'contain'
                }}
                src={`./images/${piece}.png`}
                alt=''
            />
        </div>
    )
}

export default Piece