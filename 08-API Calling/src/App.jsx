import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users/4')
    // const data = await response.json()
    // console.log(data);

    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/')
    // console.log(data);


    const { data } = await axios.get('https://picsum.photos/v2/list')
    setData(data)

  }
  return (
    <div>
      API Calling
      <br />
      <br />
      <button onClick={getData}>Get Data</button>
      <br />
      <br />
      <div>
        {
          data.map((elem, idx) => <h1 key={idx}>Hello, {elem.author},{idx}</h1>)
        }
      </div>
    </div>
  )
}

export default App