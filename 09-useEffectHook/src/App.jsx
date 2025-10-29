import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [randomNum, setRandomNum] = useState(0)
  const [increment, setIncremnt] = useState(0)

  function ChangeRandomNum() {
    setRandomNum(Math.random())
  }

  function Increment() {
    setIncremnt(increment + 1)
  }

  const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [randomNum])


  return (
    <div>
      <div>
        <p>{randomNum}</p>
        <button onClick={ChangeRandomNum}>Change Random No</button>
      </div>

      <div>
        <p>{increment}</p>
        <button onClick={Increment}>Increment No</button>
      </div>

    </div>
  )
}

export default App