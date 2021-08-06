import React from 'react'
import './jokeBox.style.css'

const JokeBox = ({ data, setCatg }) => (
  <div className={`jokeBox ${!data.category ? 'shrink' : ''}`}>
    <p className='joke'>{data.joke}</p>

    {data.category && (
      <p className='category'>
        Category :{' '}
        <span onClick={() => setCatg(data.category)}>{data.category}</span>
      </p>
    )}
  </div>
)

export default JokeBox
