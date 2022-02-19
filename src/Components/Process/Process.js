import React from 'react'
import data from '../../constants/data';
import images from '../../constants/images';
import './Process.css'
import ProcessCard from './ProcessCard';


function Process({ theme }) {
    const d = [data.process1, data.process2, data.process3, data.process4, data.process5];
    const i = [images.process1, images.process2, images.process3, images.process4, images.process5];
    return (
        <div className="process-body" style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>

            <h1 className='process-title'>We Simplify Software Development Process</h1>

            <div className="process-body-container">
                <div className='process-section-right'>
                    <img src={images.rocket} alt="rocket"/>
                </div>
                <div className='process-section'>
                    {
                        d.map((process,index)=>{
                            return (<ProcessCard process = {process} key={index} image={i[index]} theme={theme}/>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Process