import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div className='flex justify-center gap-10 py-5'>
                <Link to='men' className='font-semibold text-lg'>Men's </Link>
                <Link to='women' className='font-semibold text-lg'>Women's </Link>
            </div>
            <h1>Product</h1>
        </>
    )
}

export default Product