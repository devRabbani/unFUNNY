import React from 'react'
import SkeletonElements from './skeletonElements'

const SkeletonCardSmall = () => {
  return (
    <div className='skeleton-wrapper shrink' id='shrink'>
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='text' />
      <SkeletonElements type='copy' />
    </div>
  )
}

export default SkeletonCardSmall
