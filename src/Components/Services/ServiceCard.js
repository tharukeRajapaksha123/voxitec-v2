import React from 'react'
import './ServiceCard.css'
function ServiceCard({service}) {
  return (
    <div className='service-card'>
        <div className='service-card-image-wrapper'>
            <img src={service.image} alt="service"/>
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="read-more-button"><p>Read More</p></div>
    </div>
  )
}

export default ServiceCard