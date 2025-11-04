import React from 'react'
import { Link } from 'react-router-dom'

const Women = () => {
    return (
        <>
            <div className='flex justify-center gap-10 py-5'>
                <Link to='/product/men' className='font-semibold text-lg'>Men's </Link>
                <Link to='/product/women' className='font-semibold text-lg'>Women's </Link>
            </div>
            <h1>Women's Collection</h1>
        </>
    )
}

export default Women