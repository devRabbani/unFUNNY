import React from 'react'
import SkeletonCard from './skeletonCard'
import SkeletonElements from './skeletonElements'

const SkeletonMain = () => {
  return (
    <>
      <SkeletonElements type='input' />
      <SkeletonCard />
    </>
  )
}

export default SkeletonMain
