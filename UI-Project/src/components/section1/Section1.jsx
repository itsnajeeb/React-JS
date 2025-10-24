import React from 'react'
import Navbar from './Navbar'
import Page1 from './Page1'

const Section1 = (props) => {
  
  return (
    <div>
        <Navbar/>
        <Page1 user={props.user}/>
    </div>
  )
}

export default Section1