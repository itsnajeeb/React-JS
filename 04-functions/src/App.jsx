import React, { useEffect, useState } from 'react'

const App = () => {
  const [increment, setIncrement] = useState(0)
  function handleInputChage(e) {
    document.getElementsByTagName('p')[0].innerText = e.target.value
  }

  let count = 0;
  function handleClick() {
    count++
    console.log(count);

  }

  const handleHookClick = () => {
    setIncrement((prev) => prev + 1)
    setIncrement((prev) => prev + 1)
  }


  return (
    <div>
      <div>
        <input type="text" onChange={(e) => handleInputChage(e)} />
        <p> </p>
      </div>

      <div>
        <button onClick={handleClick}>Click</button>
        <p>{count}</p>
      </div>

      <div>
        <button onClick={handleHookClick}>Click</button>
        <p>{increment}</p>
      </div>
    </div>
  )
}

export default App