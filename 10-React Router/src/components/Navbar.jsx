import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='nav'>
            <h2>Company Logo</h2>
            <div className='nav_menu'>
                <Link to='/' > Home</Link>
                <Link to='/about'>About</Link>
                <Link to='contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>

        </div>
    )
}

export default Navbar