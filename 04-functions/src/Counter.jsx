import React, { useState } from 'react'

const Hooks = () => {
    const [num, setNum] = useState(0)

    const handleIncrease = () => {
        setNum(num + 1)
    }

    const handleDecrease = () => {
        if (num > 0)
            setNum((prev) => prev - 1)
    }

    const JumpByFive = () => {
        if (num >= 0)
            setNum(num + 5)
    }

    return (
        <div className='container'>
            <h1>{num}</h1>
            <button className="btn" onClick={handleIncrease} >Increase</button>
            <button className="btn" onClick={handleDecrease} >Decrease</button>
            <button className="btn" onClick={JumpByFive} >Jump By 5</button>
        </div>
    )
}

export default Hooks