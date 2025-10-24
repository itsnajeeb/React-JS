import React from 'react'
import style from './header.module.css'
const Header = () => {
  return (
    <div className={style.container}>
      <h1>Login here </h1>
      <button className={style.btn}>Login Now</button>
    </div>
  )
}

export default Header