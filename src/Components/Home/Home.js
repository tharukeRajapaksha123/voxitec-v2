import React from 'react'
import Body from './Body/Body'
import './Home.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
function Home({theme,changeTheme}) {
  return (
    <div className="home-container" style={{ backgroundColor:theme ? 'black' : 'white'}}>
        <Navbar theme={theme} changeTheme = {changeTheme}/>
        <Body theme={theme}/>
        <Footer />
    </div>
  )
}

export default Home