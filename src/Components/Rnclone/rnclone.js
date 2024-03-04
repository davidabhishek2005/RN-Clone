 import React from 'react'
import icon from  "./Assets/icon.png";
import nav_icon from "./Assets/menu_icon.svg";






const Rnclone = () => {
  let status = false;
  const openorcloseNav = () => {
    let mediaNav = document.querySelector('.mediaNav');
    if(status === true){
      status = false;
      mediaNav.style.display = "none";
    }
    else{
      status = true;
      mediaNav.style.display = "block";
    }
  };
    return (
            <div className='rnhead'>
             
                <nav className='nav-container'> 
                             
                    <ul className='ul'>
                    <div className='header'> 
                      <div className='header1'>
                        <div><li><a className='text1' href="#logo_background">HOME PAGE</a></li></div>
                        <div><li ><a  className='text1' href="#eventid">EVENTS</a></li></div> 
                        <div><li > <a  className='text1' href="#about">ABOUT US</a></li></div>
                      </div>

                        <div className='img_icon'><img className='icon' src= {icon} ></img></div>

                        <div className='nav_icon' onClick={openorcloseNav}>
                         <img src={nav_icon} ></img>
                        </div>

                        <div className='header2'>
                          <div><li ><a  className='text1' href="#teamid">OUR TEAM</a></li></div>
                          <div><li ><a  className='text1' href="#spoid">SPONSORS</a></li></div>
                          <div><li ><a className='text1' href="#contactid">CONTACT US</a></li></div>
                        </div>
                    </div>
                    </ul>

                    <div className='mediaNav'>
                      <ul>
                        <li><a href="#logo_background" className='text4'>HOME PAGE</a></li>                        
                        <li><a href="#eventid" className='text4'>EVENTS</a></li>                        
                        <li><a href="#about" className='text4'>ABOUT US</a></li>
                        <li><a href="#teamid" className='text4'>OUR TEAM</a></li>
                        <li><a href="#spoid" className='text4'>SPONSORS</a></li>
                        <li><a href="#contactid" className='text4'>CONTACT US</a></li>                        
                      </ul>
                    </div>
                </nav>
                <div className="background_img" id="logo_background"></div>
            </div> 
    );
  };


  
  export default Rnclone;