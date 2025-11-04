import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
const App = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setData(data)
  }
  useEffect(() => {
    getData()
  }, [index])

  return (
    <div className='text-white mt-10'>
      <h1 className='text-2xl font-semibold grid h-full place-items-center '>{data.length > 0 || "Loading...."}</h1>

      <div className='flex flex-wrap gap-7 justify-center'>
        {data.map((data, idx) =>
          <Card data={data} key={idx} />
        )}
      </div>

      <div className='flex gap-5 justify-center mt-10'>
        <Button setIndex={setIndex} index={index} />
      </div>

    </div >

  )
}

export default App