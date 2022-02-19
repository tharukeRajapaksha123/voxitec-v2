import React from 'react'
import './TechnologyHeaderCard.css'
function TechnologyHeaderCard({activeIndex,index,title,setActiveIndexFunction}) {
  return (
    <div className='technology-header-card' onClick={()=>setActiveIndexFunction(index)}>
        <p>{title}</p>
        <div className="under-line" style={{backgroundColor : activeIndex === index ? "#00C1FF" : "grey"}}/>
    </div>
  )
}

export default TechnologyHeaderCard