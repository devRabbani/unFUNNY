import React from 'react'
import './jokeBox.style.css'

const JokeBox = ({ data, copyRef }) => (
  <div className='jokeBox'>
    <p className='joke'>{data.joke}</p>
    <p className='category'>
      Category : <span>{data.category}</span>
    </p>
  </div>
)

export default JokeBox
