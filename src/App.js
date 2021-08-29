import React, { lazy, Suspense } from 'react'
import './App.css'
import MainJokes from './pages/mainJokes/mainJokes.component'
import { Switch, Route } from 'react-router-dom'

const SecondJokes = lazy(() =>
  import('./pages/secondJokes/secondJokes.component')
)

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={MainJokes} />
          <Route exact path='/achhawala' component={SecondJokes} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
