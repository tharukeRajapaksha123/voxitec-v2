import React from 'react'
import './TechnologyBox.css'
function TechnologyBox({technologies}) {
  return (
    <div className='technology-box-body'>
        {
            technologies.map((technology,index)=>{
                return <div className="technology-index-wrapper" key={index}>
                        <img src={technology.value} alt="technology-box-image" style={{fill :"black"}}/>
                        <p>{technology.name}</p>
                </div>
            })
        }
    </div>
  )
}

export default TechnologyBox