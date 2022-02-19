import React from 'react'
import './Services.css'
import services from '../../constants/services_data'
import ServiceCard from './ServiceCard'
function Services({ theme }) {
    
    return (
        <div className='services-body' style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>
            <div className='services-title-container'>
                <h1 className='services-title'>Our Services</h1>
            </div>
            <div className='services-body-container'>
                {
                    services.map((service,index)=>{
                        return (<ServiceCard service={service} key={index}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Services