import React, { lazy, Suspense, useEffect } from 'react'
import './mainJokes.style.css'
const JokeBox = lazy(() => import('../../components/JokeBox/jokeBox.component'))

const MainJokes = ({ fetchJoke, catg, setCatg, jokes }) => {
  useEffect(() => {
    fetchJoke()
  }, [catg])

  return (
    <>
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
    </>
  )
}

export default MainJokes
