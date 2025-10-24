import React from 'react'
import Section1 from './components/section1/section1'

const App = () => {
  const cardContent = [
    {
      tag: 1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur possimus dolores ea quasi deserunt?",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      buttonText: "Satisfied",
      color:"blue"
    },

    {
      tag: 2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur possimus dolores ea quasi deserunt?",
      imageUrl: "https://images.unsplash.com/photo-1752170080622-18196de87763?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749",
      buttonText: "Underserved",
      color:"orange"

    },
    {
      tag: 3,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur possimus dolores ea quasi deserunt?",
      imageUrl: "https://images.unsplash.com/photo-1602796390662-2cbb0042cae8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=689",
      buttonText: "Underbanked",
      color:"lightblue"

    },

    {
      tag: 4,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur possimus dolores ea quasi deserunt?",
      imageUrl: "https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      buttonText: "Underserved",
      color:"pink"

    },

    {
      tag: 5,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequatur possimus dolores ea quasi deserunt?",
      imageUrl: "https://images.unsplash.com/photo-1545184180-25d471fe75eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      buttonText: "Underbanked",
      color:"green"

    },
  ]
  return (
    <>
      <Section1 user={cardContent} />
    </>
  )
}

export default App