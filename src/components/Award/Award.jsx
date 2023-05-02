import React from 'react'
import './award.css'

const Award = ({image, title, description}) => {
  return (
    <div className="app__award">
      <img src={image} alt={title} />
      <div className="app__award-content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>{description}</p>
      </div>
    </div>
  )
}

export default Award