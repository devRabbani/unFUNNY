import React, { useState, useEffect } from 'react'
import JokeBox from '../../components/JokeBox/jokeBox.component'
import { Link } from 'react-router-dom'

const SecondJokes = () => {
  const [jokes, setJokes] = useState('')

  const fetchJoke = async () => {
    const res = await fetch(
      'http://api.icndb.com/jokes/random?firstName=Rabbani&lastName=bhaai'
    )
    const data = await res.json()
    setJokes(data.value)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className='App'>
      <JokeBox data={jokes} />
      <div onClick={fetchJoke} className='btnReload'>
        Another One
      </div>
      <div>
        <Link to='/'>Back to Home</Link>
      </div>
    </div>
  )
}

export default SecondJokes
