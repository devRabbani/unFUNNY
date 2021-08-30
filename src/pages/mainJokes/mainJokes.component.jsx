import React, { useEffect } from 'react'
import SkeletonCard from '../../skeleton/skeletonCard'
import './mainJokes.style.css'
import JokeBox from '../../components/JokeBox/jokeBox.component'

const MainJokes = ({ fetchJoke, catg, setCatg, jokes, btnLoading }) => {
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
      {!btnLoading ? (
        <JokeBox data={jokes} setCatg={setCatg} />
      ) : (
        <SkeletonCard />
      )}
    </>
  )
}

export default MainJokes
