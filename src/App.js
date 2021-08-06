import React from 'react'
import './App.css'
import MainJokes from './pages/mainJokes/mainJokes.component'
import SecondJokes from './pages/secondJokes/secondJokes.component'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  console.log(window.location.pathname)

  return (
    <div className='App'>
      <h1>notFUNNY!</h1>
      <Switch>
        <Route exact path='/' component={MainJokes} />
        <Route exact path='/achhawala' component={SecondJokes} />
        <Route component={SecondJokes} />
      </Switch>
    </div>
  )
}

export default App
