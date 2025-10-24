import React from 'react'
import style from './button.module.css'
const Button = () => {
  return (
    <div className={style.container}>
        <h1>This is a button</h1>
        <button className={style.btn}>Click here</button>
    </div>
  )
}

export default Button