import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import images from '../../../constants/images'
function Navbar({theme,changeTheme}) {
  return (
    <div className='navbar-container'>
        <div className='menu-icon'>
            <GiHamburgerMenu fontSize={25} color={!theme ?'black'  :"#fff"} onClick = {()=>{}} className="icon"/>
        </div>
        <div className="small-screen-link-container">
            <ul className='link-list'>
                <li className="nav-link"><h2>About</h2></li>
                <li className="nav-link"><h2>Services</h2></li>
                <li className="nav-link"><h2>Tehnologies</h2></li>
                <li className="nav-link"><h2>Projects</h2></li>
                {/* <li className="nav-link"><div className='get-touch-button'><h3>Get Touch</h3></div></li>
                <li className="nav-link"><div className='change-theme-icon-container'><img className='change-theme-icon' src={!theme ? images.change_theme_logo : images.light_theme} alt='change-theme'/></div></li> */}
            </ul>
        </div>
        <div className="spacer"/>
        <div className="logo-container">     
            <img src={theme ? images.logo : images.light_logo} alt="logo" className='logo'/>       
        </div>
        <div className="spacer"/>
        <div className="link-container" style={{color : theme ? "white" : "black"}}>
            <ul className='link-list'>
                <li className="nav-link"><h2>About</h2></li>
                <li className="nav-link"><h2>Services</h2></li>
                <li className="nav-link"><h2>Tehnologies</h2></li>
                <li className="nav-link"><h2>Projects</h2></li>
                <li className="nav-link"><div className='get-touch-button'><h3>Get Touch</h3></div></li>
                <li className="nav-link"><div className='change-theme-icon-container' onClick={()=>{changeTheme(!theme)}}><img className='change-theme-icon' src={!theme ? images.change_theme_logo : images.light_theme} alt='change-theme'/></div></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar