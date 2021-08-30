import React from 'react'
import Shimmer from './shimmer'
import SkeletonElements from './skeletonElements'

const SkeletonCard = () => {
  return (
    <div className='skeleton-wrapper'>
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='text hidden' />

      <div className='skelCatg'>
        <SkeletonElements type='category' />
        <SkeletonElements type='rcategory' />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonCard
