import React from 'react'
import './Body.css'
import data from '../../../constants/data'
import images from '../../../constants/images'
import { Fade } from 'react-reveal'
function Body({theme}) {
  return (
    <div className='home-body' style={{color : theme ? 'white' : 'black' }}>
        <div className='section'>
            <div className='wrapper'>
                <h1 className='title'>Innovative, Effective <br/>  With Quality<br></br> Assured </h1>
                <div className='small-screen-image'>
                    <img src={images.coding} alt='home' className='home-image'/>
                </div>
               
                <p className='description'>{data.home_description}</p>
                <Fade right><div className='get-started-button'><h3>Get Started</h3></div></Fade>
            </div>
        </div>
        <Fade bottom>
            <div className='section'>
                <div className='image-container'>
                    <img src={images.coding} alt='home' className='home-image'/>
                </div>
            </div>
        </Fade>
    </div>
  )
}

export default Body