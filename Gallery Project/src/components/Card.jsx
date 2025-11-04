import React from 'react'

const Card = (props) => {
    return (
        <a href={props.data.url} target='_back' >
            <div className='flex gap-1 flex-col '>
                <img src={props.data.download_url}
                    className='bg-cover w-60 h-48 rounded-xl bg-center'
                    alt="" />
                <p className='font-semibold text-lg text-center'>{props.data.author}</p>
            </div>
        </a>
    )
}

export default Card