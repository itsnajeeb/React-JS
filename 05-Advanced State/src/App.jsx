import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState({ user: "Aman", city: "DBG", profiesion: "Programmer", age: 19 })
  // const handleClick = () => {
  //   setNum(prev => ({ ...prev, age: 20, Dream_company: "GOOGLE" }))
  // }


  // const [num, setNum] = useState([1, 2, 3, 4])
  const [arr, setArr] = useState(["apple","mango", "banana"])

  const handleClick = () => {
    // setNum(prev => [...prev, num.push(num.pop + 1)]) // number will increase on every click
    // setNum(prev=> [...prev, 5])

    //Remove Last Element
    // let lastElement= num.pop()
    // console.log("Last", lastElement);
    // setNum(prev => [...prev ])

    // Multiply all numbers by 2
    // setNum(num.map((n) => n * 2))

    // Toggle value in array
    console.log(arr.filter((item)=> item == "apple"));
    
    setArr((prev)=> 
      prev.includes("apple") ? prev.filter(item=> item!== "apple") : [...prev, "apple"])

  }
  return (
    <>
      {/* <h1>Name : {num.user}, {num.age} <br /> city : {num.city}, Profession : {num.profiesion}, Dream : {num.Dream_company}</h1> */}
      <h1>
        {/* {num.map((n) => n + ", ")} */}
        {arr.map((n) => n + ", ")}
      </h1>
      <button onClick={handleClick}>Add </button>
    </>
  )
}

export default App