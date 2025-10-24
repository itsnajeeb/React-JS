import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = (props) => {
  return (
    <div className=' h-[90vh] w-full flex justify-between items-center px-20 pt-6 pb-10 gap-5'>
        <LeftContent/>
        <RightContent user={props.user}/>
    </div>
  )
}

export default Page1