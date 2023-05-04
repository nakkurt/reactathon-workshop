'use client'

import { useState } from 'react'

const ClickToLikeContainer = ({ children }) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  return (
    <button onClick={handleClick} className="click-to-like">
      {children}
      <p>
        {isLiked ? '❤️' : '♡'} {isLiked ? 'Liked' : 'Like'}
      </p>
    </button>
  )
}

export default ClickToLikeContainer
