import React from 'react'
import './Footer.css'
import technologies from '../../../constants/technologies'
function Footer() {
  return (
    <div className='footer'>
      {
        technologies.map((technology, index) => {
          return (<div className='technology-card' key={index}>
              <div className='image-wrapper'>
                  <img src={technology.value} alt="technology" />
              </div>
              <h3>{technology.name}</h3>
              <div style={{flex : 1}}/>
          </div>)
        })
      }
    </div>
  )
}

export default Footer