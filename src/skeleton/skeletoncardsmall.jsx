import React from 'react'
import Shimmer from './shimmer'
import SkeletonElements from './skeletonElements'

const SkeletonCardSmall = () => {
  return (
    <div className='skeleton-wrapper shrink' id='shrink'>
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='copy' />
      <Shimmer />
    </div>
  )
}

export default SkeletonCardSmall
