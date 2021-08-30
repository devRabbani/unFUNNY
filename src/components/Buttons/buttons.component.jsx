import React from 'react'
import { Link } from 'react-router-dom'
import './buttons.style.css'

const Buttons = ({ fetchJoke, isSecPath }) => {
  return (
    <div className='buttons'>
      <div className='btnDiv'>
        <div onClick={fetchJoke} className='btnReload'>
          Another One
        </div>
        {isSecPath ? (
          <Link to='/'>Back To Home</Link>
        ) : (
          <Link to='/achhawala'>Maja Nehi Aya</Link>
        )}
      </div>

      <div className='mobileDiv'>
        <div onClick={fetchJoke} className='btnReload'>
          Another One
        </div>
        {isSecPath ? (
          <Link to='/'>Back To Home</Link>
        ) : (
          <Link to='/achhawala'>Maja Nehi Aya</Link>
        )}
      </div>
    </div>
  )
}

export default Buttons
