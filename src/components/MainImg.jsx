import React from 'react'

function MainImg({ image }) {
  return (
    <div className="main-img">
      <img className='w-full in h-[75vh] object-cover' src={image} alt="" />
    </div>
  )
}

export default MainImg