import React from 'react'

const RightCard = (data) => {
        
    return (
        <div className='w-76 h-full shrink-0 rounded-4xl  overflow-hidden relative '>
            <img
                className='w-full h-full object-cover '
                src={data.imageUrl} alt="Image" />

            <div className=' absolute h-full w-full top-0 px-8 py-9 flex flex-col justify-between'>
                <h1 className='bg-white w-10 h-10 flex justify-center items-center rounded-full font-semibold'>{data.tag}</h1>

                <div className='flex flex-col gap-10'>
                    <p className='leading-[1.7] font-medium text-white '>{data.text}</p>
                    <div className='flex justify-between '>
                        <button style={{backgroundColor:data.color}} className=' text-black px-8 font-semibold rounded-full cursor-pointer'>{data.buttonText}</button>
                        <button className='bg-blue-600 text-white w-10 h-10 rounded-full  cursor-pointer'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard