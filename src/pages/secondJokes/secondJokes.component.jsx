import React, { useEffect, lazy, Suspense } from 'react'
const JokeBox = lazy(() => import('../../components/JokeBox/jokeBox.component'))

const SecondJokes = ({ fetchJoke, jokes }) => {
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <JokeBox data={jokes} marginBool />
      </Suspense>
    </>
  )
}

export default SecondJokes
