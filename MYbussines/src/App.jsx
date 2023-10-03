import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'

function App() {

  return (
    <>
    <h1>Titulo</h1> 
   <Saludo nombre="joa"/>
   <Saludo nombre="FACU"/>
   <Saludo nombre="ALEX"/>
   <Saludo nombre="ALEX2"/>

    </>
  )
}

export default App
