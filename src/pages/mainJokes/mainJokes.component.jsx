import React, { lazy, Suspense, useEffect, useState } from 'react'
import './mainJokes.style.css'
import { Link } from 'react-router-dom'
const JokeBox = lazy(() => import('../../components/JokeBox/jokeBox.component'))

const MainJokes = () => {
  const [jokes, setJokes] = useState('')
  const [catg, setCatg] = useState('Any')
  const [btnLoading, setBtnLoading] = useState(false)

  const fetchJoke = async () => {
    setBtnLoading(true)
    const res = await fetch(`https://v2.jokeapi.dev/joke/${catg}?type=single`)
    const data = await res.json()
    setJokes(data)
    setBtnLoading(false)
  }

  useEffect(() => {
    fetchJoke()
  }, [catg])

  return (
    <div className='flex'>
      {btnLoading ? <h1>unFUNNY!&#128534;</h1> : <h1>unFUNNY!&#128526;</h1>}

      <select value={catg} onChange={(e) => setCatg(e.target.value)}>
        <option defaultValue value='Any'>
          Any
        </option>
        <option value='Programming'>Programming</option>
        <option value='Misc'>Misc</option>
        <option value='Dark'>Dark</option>
        <option value='Pun'>Pun</option>
      </select>
      <Suspense fallback={null}>
        <JokeBox data={jokes} setCatg={setCatg} />
      </Suspense>

      <div
        onClick={fetchJoke}
        className={`btnReload ${btnLoading ? 'loading' : ''}`}
      >
        Another One
      </div>

      <br />
      <Link to='/achhawala'>Maja Nehi Aya</Link>
    </div>
  )
}

export default MainJokes
