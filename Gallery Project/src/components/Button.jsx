import React from 'react'

const Button = ({ setIndex, index }) => {
    return (
        <>
            <button
                onClick={() => {
                    if (index > 1)
                        setIndex(index - 1)
                }}
                className='bg-yellow-500 px-8 py-1 rounded-lg text-lg cursor-pointer'
                style={{ opacity: index == 1 ? 0.5 : 1 }}>Prev</button>
            <button
                onClick={() => {
                    setIndex(index + 1)
                }}
                className='bg-yellow-500 px-8 py-1 rounded-lg text-lg cursor-pointer'>Next</button>
        </>
    )
}

export default Button