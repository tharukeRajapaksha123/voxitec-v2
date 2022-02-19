import React from 'react'
import './OurWorks.css'
import Title from '../../Widgets/Title/Title'
import our_works from '../../constants/our_works'
import Slider from 'react-slick'


function OurWorks({ theme }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className='our-works-body' style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}>
      <Title title="Our Works" />
      <div className='our-works-body-container'>
        <div className='our-works-gradient-box'>
          <Slider {...settings} className="carauesel">
              {/* <div className='works-details-container'>
                  <img src={our_works[0].main_image} alt="our-works"/>
              </div>
              <div className='works-details-container'>
                <img src={our_works[1].main_image} alt="our-works"/>
              </div> */}
              {
                our_works.map((work,index)=>{
                  return <div className='works-details-container' key={index}>
                  <img src={work.main_image} alt="our-works"/>
              </div>
                })
              }
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default OurWorks