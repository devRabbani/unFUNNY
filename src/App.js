import React, { lazy, Suspense, useState } from 'react'
import './App.css'
import { Route, withRouter } from 'react-router-dom'
import Buttons from './components/Buttons/buttons.component'
import SkeletonMain from './skeleton/skeletonMain'
import SkeletonCardSmall from './skeleton/skeletoncardsmall'

const MainJokes = lazy(() => import('./pages/mainJokes/mainJokes.component'))
const SecondJokes = lazy(() =>
  import('./pages/secondJokes/secondJokes.component')
)

const App = ({ location: { pathname } }) => {
  const [jokes1, setJokes1] = useState('')
  const [jokes2, setJokes2] = useState('')
  const [catg, setCatg] = useState('Any')
  const [btnLoading, setBtnLoading] = useState(false)

  const fetchJokeV1 = async () => {
    setBtnLoading(true)
    try {
      const res = await fetch(`https://v2.jokeapi.dev/joke/${catg}?type=single`)
      const data = await res.json()
      setJokes1(data)
      setBtnLoading(false)
    } catch (error) {
      console.log(error)
      setBtnLoading(false)
    }
  }
  const fetchJokeV2 = async () => {
    setBtnLoading(true)
    try {
      const res = await fetch(
        'https://api.chucknorris.io/jokes/random?name=Rabbani%20Bhai'
      )
      const data = await res.json()
      setJokes2(data)
      setBtnLoading(false)
    } catch (error) {
      console.log(error)
      setBtnLoading(false)
    }
  }

  return (
    <div className="App">
      {pathname === '/achhawala' ? (
        <h1 className="nowfunny">
          nowFUNNY!
          {btnLoading ? <span>&#128534;</span> : <span>&#128520;</span>}
        </h1>
      ) : (
        <h1>
          unFUNNY!{btnLoading ? <span>&#128534;</span> : <span>&#128526;</span>}
        </h1>
      )}

      {/* <Switch> */}
      <Suspense fallback={<SkeletonMain />}>
        <Route exact path="/">
          <MainJokes
            fetchJoke={fetchJokeV1}
            jokes={jokes1}
            setCatg={setCatg}
            catg={catg}
            btnLoading={btnLoading}
          />
        </Route>
      </Suspense>
      <Suspense fallback={<SkeletonCardSmall />}>
        <Route exact path="/achhawala">
          <SecondJokes
            fetchJoke={fetchJokeV2}
            jokes={jokes2}
            btnLoading={btnLoading}
          />
        </Route>
      </Suspense>
      {/* </Switch> */}
      <Buttons
        fetchJoke={pathname === '/achhawala' ? fetchJokeV2 : fetchJokeV1}
        isSecPath={pathname === '/achhawala'}
      />
    </div>
  )
}

export default withRouter(App)
