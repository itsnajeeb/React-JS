import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='flex justify-between px-10 py-4 bg-[#032d5e]'>
            <h2 className='text-lg font-bold'>Logo</h2>
            <div className='flex gap-5'>
                <Link to='/' className='font-semibold text-md'>Home</Link>
                <Link to='/about' className='font-semibold text-md'>About</Link>
                <Link to='/contact' className='font-semibold text-md'>Contact</Link>
                <Link to='/product' className='font-semibold text-md'>Product</Link>
                <Link to='/course' className='font-semibold text-md'>Course</Link>
            </div>
        </div>
    )
}
