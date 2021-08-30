import React from 'react'
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
    </div>
  )
}

export default SkeletonCard
