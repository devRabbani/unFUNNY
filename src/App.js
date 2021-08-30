import React, { lazy, Suspense, useState } from 'react'
import './App.css'
import MainJokes from './pages/mainJokes/mainJokes.component'
import { Switch, Route, withRouter } from 'react-router-dom'
import Buttons from './components/Buttons/buttons.component'

const SecondJokes = lazy(() =>
  import('./pages/secondJokes/secondJokes.component')
)

const App = ({ location: { pathname } }) => {
  const [jokes, setJokes] = useState('')
  const [catg, setCatg] = useState('Any')
  const [btnLoading, setBtnLoading] = useState(false)
  const isSecPath = pathname === '/achhawala'

  const fetchJokeV1 = async () => {
    setJokes('')
    setBtnLoading(true)
    const res = await fetch(`https://v2.jokeapi.dev/joke/${catg}?type=single`)
    const data = await res.json()
    setJokes(data)
    setBtnLoading(false)
  }
  const fetchJokeV2 = async () => {
    setJokes('')
    setBtnLoading(true)
    const res = await fetch(
      'https://api.icndb.com/jokes/random?firstName=Rabbani&lastName=bhaai'
    )
    const data = await res.json()
    setJokes(data.value)
    setBtnLoading(false)
  }

  return (
    <div className='App flex'>
      {pathname === '/achhawala' ? (
        <h1 className='nowfunny'>
          nowFUNNY!
          {btnLoading ? <span>&#128534;</span> : <span>&#128520;</span>}
        </h1>
      ) : (
        <h1>
          unFUNNY!{btnLoading ? <span>&#128534;</span> : <span>&#128526;</span>}
        </h1>
      )}
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/'>
            <MainJokes
              fetchJoke={fetchJokeV1}
              jokes={jokes}
              setCatg={setCatg}
              catg={catg}
            />
          </Route>
          <Route exact path='/achhawala'>
            <SecondJokes fetchJoke={fetchJokeV2} jokes={jokes} />
          </Route>
        </Switch>
      </Suspense>
      <Buttons
        fetchJoke={pathname === '/achhawala' ? fetchJokeV2 : fetchJokeV1}
        btnLoading={btnLoading}
        isSecPath={pathname === '/achhawala'}
      />
    </div>
  )
}

export default withRouter(App)
