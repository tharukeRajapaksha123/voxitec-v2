import React from 'react'
import './ProcessCard.css'
function ProcessCard({process,image,theme}) {
  return (
    <div className='process-card'>
        
        <div className='process-image-container'> 
            <img src={image} alt="process" className='process-image'/>
        </div>
           
        <div className='process-data-container'>
            <p>{process}</p>
        </div>
    </div>
  )
}

export default ProcessCard