import React from 'react'

export const Loader = ({isCentered}: {isCentered?: boolean}) => {
  return (
    <div className={`loader ${isCentered ? 'center': ''}`}></div>
  )
}
