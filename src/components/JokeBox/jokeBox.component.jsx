import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { MdContentCopy, MdDoneAll } from 'react-icons/md'
import './jokeBox.style.css'

const JokeBox = ({ data, setCatg, marginBool }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 4000)
  }

  return (
    <>
      {marginBool && <div className='marginTop'></div>}
      <div className={`jokeBox ${!data.category ? 'shrink' : ''}`}>
        <p className='joke'>{data.joke}</p>
        <div className='bottomDiv'>
          {data.category && (
            <p className='category'>
              Category :{' '}
              <span onClick={() => setCatg(data.category)}>
                {data.category}
              </span>
            </p>
          )}
          <CopyToClipboard
            className={`copy ${isCopied ? 'done' : ''}`}
            text={data.joke}
            onCopy={handleCopy}
          >
            <span>{isCopied ? <MdDoneAll /> : <MdContentCopy />}</span>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}

export default JokeBox
