import React, { useEffect, lazy, Suspense } from 'react'
import SkeletonCardSmall from '../../skeleton/skeletoncardsmall'
const JokeBox = lazy(() => import('../../components/JokeBox/jokeBox.component'))

const SecondJokes = ({ fetchJoke, jokes, btnLoading }) => {
  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        {!btnLoading ? (
          <JokeBox data={jokes} marginBool />
        ) : (
          <SkeletonCardSmall />
        )}
      </Suspense>
    </>
  )
}

export default SecondJokes
