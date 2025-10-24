import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

    return (
        <div className='w-2/3 h-full  flex gap-4 overflow-x-auto py-8 '>
            {
                props.user.map((elem) => <RightCard  imageUrl={elem.imageUrl} tag={elem.tag} text={elem.text} buttonText={elem.buttonText} color={elem.color}  />)
            }

        </div>
    )
}

export default RightContent