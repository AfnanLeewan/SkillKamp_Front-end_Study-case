import React, { useState } from 'react'
import './Cards.css'
const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1)
  }

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="card-container">
      <div className="cards" style={{ transform: `translateX(-${currentIndex * 100 / 4}%)` }}>
        <div className="card">asdf</div>
        <div className="card">asdf</div>
        <div className="card">asdf</div>
        <div className="card">asdf</div>
        <div className="card">asdf</div>
        <div className="card">asdf</div>
      </div>
      <div className="prev" onClick={handlePrevClick}>
        <i className="fas fa-angle-left">asdf</i>
      </div>
      <div className="next" onClick={handleNextClick}>
        <i className="fas fa-angle-right" />
      </div>
    </div>
  )
}

export default Card
