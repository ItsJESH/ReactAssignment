import React from 'react'

export default function Greeting() {
    const name = "Jenish"
    return (
    <>
      <h1> Hello, {name} </h1>
      <p> Date: {new Date().toLocaleDateString()}</p>
    </>
  )
}
