import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
const JokeBox = lazy(() => import('../../components/JokeBox/jokeBox.component'))

const SecondJokes = () => {
  const [jokes, setJokes] = useState('')
  const [btnLoading, setBtnLoading] = useState(false)

  const fetchJoke = async () => {
    setBtnLoading(true)
    const res = await fetch(
      'https://api.icndb.com/jokes/random?firstName=Rabbani&lastName=bhaai'
    )
    const data = await res.json()
    setJokes(data.value)
    setBtnLoading(false)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className='flex'>
      {btnLoading ? (
        <h1 className='nowfunny'>nowFUNNY&#128534;!</h1>
      ) : (
        <h1 className='nowfunny'>nowFUNNY&#128520;!</h1>
      )}
      <Suspense fallback={null}>
        <JokeBox data={jokes} />
      </Suspense>

      <div
        onClick={fetchJoke}
        className={`btnReload ${btnLoading ? 'loading' : ''}`}
      >
        Another One
      </div>
      <br />
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default SecondJokes
