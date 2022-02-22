import React from 'react'
import './TechnologyBoxSmallScreen.css'


function TechnologyBoxSmallScreen({list}) {
  return (
    <div className='small-screeen-technology-box'>
         {
            list.map((technology,index)=>{
                return <div className="technology-index-wrapper-small-screen" key={index}>
                        <img src={technology.value} alt="technology-box-image" style={{fill :"black"}}/>
                        <p>{technology.name}</p>
                </div>
            })
        }
    </div>
  )
}

export default TechnologyBoxSmallScreen