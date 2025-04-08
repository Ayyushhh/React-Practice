import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <Card username="Ayush" btnText="Click me"/>
      <Card username="Jain" btnText="Check out"/>
    </>
  )
}

export default App
