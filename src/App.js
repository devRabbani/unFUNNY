import React, { useEffect, useState } from 'react'
import './App.css'
import JokeBox from './components/JokeBox/jokeBox.component.jsx'

const App = () => {
  const [jokes, setJokes] = useState('')

  const fetchJoke = async () => {
    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Programming?type=single'
    )
    const data = await res.json()
    setJokes(data)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className='App'>
      <h1>notFUNNY!</h1>
      <JokeBox data={jokes} />
      <div onClick={fetchJoke} className='btnReload'>
        Another One
      </div>
    </div>
  )
}

export default App
