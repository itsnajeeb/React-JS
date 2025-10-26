import React, { useState } from 'react'
import { X } from 'lucide-react';
import './app.css'

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([])

  const handleSubmit = (e) => {

    e.preventDefault()
    const copyTask = []
    copyTask.push(...task, { title, details })
    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteTask = (i) => {
    const copyTask = [...task]
    copyTask.splice(i, 1)
    setTask(copyTask)

    
  }

  return (
    <div className=' flex h-screen lg:flex-row flex-col w-full'>
      <form onSubmit={(e) => {
        handleSubmit(e)
      }} className='lg:w-1/3 gap-5 flex flex-col px-10 py-10 w-full'>
        <h1 className='text-4xl font-semibold m'>Add Notes</h1>
        <input type="text"
          placeholder='Enter Notes Heading'
          className='text-base outline-none border   border-white py-2 px-5 rounded-md'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title}
        />
        <textarea
          type="text"
          placeholder='write Details'
          className='text-base outline-none border border-white py-2 px-5 rounded-md h-28'
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          value={details}
        />
        <button className='bg-white text-black py-3 rounded-lg cursor-pointer font-semibold'>Add Notes</button>
      </form>

      <div className='flex gap-5 flex-col lg:border-l-2 border-l-white px-10 h-full lg:w-2/3 py-10 w-full'>
        <h1 className='text-3xl font-semibold mb-1 text-center lg:text-start'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap justify-center items-center lg:justify-start'>
          {task.map((elem, idx) =>
            <div key={idx} className=" relative w-56 h-64 text-black px-3 py-10 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/671/small/sticky-note-paper-background-free-png.png')] bg-cover bg-no-repeat bg-center">
              <h3 className='text-lg font-bold  leading-tight'>{elem.title}</h3>
              <p className='text-sm font-semibold mt-2 '>{elem.details}</p>
              <h2
                onClick={() => {
                  deleteTask(idx)
                }}
                className='absolute top-2 right-0 bg-red-700 rounded-full text-white cursor-pointer' ><X size={32} strokeWidth={1.5} /></h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App