 import React from 'react'
import icon from  "./Assets/icon.png";



const Rnclone = () => {
    return (
            <div className='rnhead'>
             
                <nav className='nav-container'> 
                             
                    <ul className='ul'>
                    <div className='header'> 
                    <div>
                       <div><li ><a  className='text1' href="#eventid">EVENTS</a></li></div> 
                        <div><li > <a  className='text1' href="#about">ABOUT US</a></li></div>

                    </div>
                        <div className='img_icon'><img className='icon' src= {icon} ></img></div>
                      <div>

                        <div><li ><a  className='text1' href="#teamid">OUR TEAM</a></li></div>
                        <div><li ><a  className='text1' href="#spoid">SPONSORS</a></li></div>
                        <div><li ><a className='text1' href="#contactid">CONTACT US</a></li></div>
                      </div>
                        </div>
                    </ul>
                    
                </nav>
                <div className="background_img"></div>
            </div> 
    );
  };


  
  export default Rnclone;