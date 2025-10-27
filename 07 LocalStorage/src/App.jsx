
import React from 'react'

const App = () => {
  // localStorage.setItem('user', 'Najeeb')
  // localStorage.setItem('age', 20)
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // // localStorage.removeItem('user')
  // console.log(user, age);

  const user = [
    {
      userName: "Najeeb",
      age: 20,
      city: "Bhopal",
      address: "India",
    },
    {
      userName: "Kamil",
      age: 21,
      address: "India"
    }
  ]

  const fruits = ["Apple", "banana", "Graps"]

  localStorage.setItem("userDetails", JSON.stringify(user))
  const userData = localStorage.getItem('userDetails');
  localStorage.setItem("fruits", JSON.stringify(fruits))
  const fruitesData = localStorage.getItem("fruits")
  console.log(JSON.parse(fruitesData));
  console.log(JSON.parse(userData));


  return (
    <div>
      <h1>Local Storage method</h1>
      <ul>
        <li>localStorage.setItem('key', 'value')</li>
        <li>localStorage.setItem('key')</li>
        <li>localStorage.removeItem('key')</li>
        <li>localStorage.clear()</li>
      </ul>
    </div>
  )
}

export default App