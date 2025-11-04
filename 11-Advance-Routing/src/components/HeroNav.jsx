import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroNav = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#042142] py-5 px-8 flex gap-10'>
            <button
                onClick={() => navigate('/')}
                className='bg-yellow-300 text-black px-4 py-2 rounded  cursor-pointer '>
                Go to home Page
            </button>

            <button
                onClick={() => navigate(-1)}
                className='bg-yellow-300 text-black px-4 py-2 rounded  cursor-pointer '>
                Prev
            </button>

            <button
                onClick={() => navigate(+1)}
                className='bg-yellow-300 text-black px-4 py-2 rounded  cursor-pointer '>
                Next
            </button>
        </div>
    )
}

export default HeroNav