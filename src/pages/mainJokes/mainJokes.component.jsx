import React, { useEffect, useState } from 'react'
import './mainJokes.style.css'
import JokeBox from '../../components/JokeBox/jokeBox.component'
import { Link } from 'react-router-dom'

const MainJokes = () => {
  const [jokes, setJokes] = useState('')
  const [catg, setCatg] = useState('Any')

  const fetchJoke = async () => {
    const res = await fetch(`https://v2.jokeapi.dev/joke/${catg}?type=single`)
    const data = await res.json()
    setJokes(data)
  }

  useEffect(() => {
    fetchJoke()
  }, [catg])

  return (
    <div className='App'>
      <select value={catg} onChange={(e) => setCatg(e.target.value)}>
        <option defaultValue value='Any'>
          Any
        </option>
        <option value='Programming'>Programming</option>
        <option value='Misc'>Misc</option>
        <option value='Dark'>Dark</option>
        <option value='Pun'>Pun</option>
      </select>
      <JokeBox data={jokes} setCatg={setCatg} />
      <div onClick={fetchJoke} className='btnReload'>
        Another One
      </div>
      <p>
        Or <br />
        Maaja Nehi Aya Toh : <Link to='/achhawala'>Hlw</Link>
      </p>
    </div>
  )
}

export default MainJokes
