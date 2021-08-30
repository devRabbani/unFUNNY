import React from 'react'
import './skeleton.style.css'
const SkeletonElements = ({ type }) => {
  return <div className={`skeleton ${type}`}></div>
}

export default SkeletonElements
