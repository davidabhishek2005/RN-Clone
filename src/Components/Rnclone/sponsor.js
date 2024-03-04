import React from 'react'
import wildstone from './Assets/wildstone_spo.jpeg';
import pizza from './Assets/pizza_spo.jpeg';
import logiczap from './Assets/logiczap_spo.jpeg';
import mentor from './Assets/mentor_spo.jpg';
import hoverRobot from './Assets/hoverRobotix_spo.jpg';
import geeks from './Assets/gg_spo.jpeg';
import wiley from './Assets/wiley_spo.jpg';
import redfm from './Assets/redfm_spo.jpeg';

const sponsor = () => {
  return (
    <div className='sponsor' id="spoid">
        <h1 className='text' id="text" >SPONSORS</h1>
        <div className='spo'>
            <a href="https://www.wildstone.in/"> <img  className='spoimg' src={wildstone}></img> </a>
            <a href="https://www.wiley.com/">  <img   className='spoimg' src={wiley}></img></a>
            <a href="https://www.geeksforgeeks.org/"> <img    className='spoimg' src={geeks}></img> </a>
            <a href="https://www.redfmindia.in/" ><img   className='spoimg' src={redfm}></img></a>
            <a href="https://www.mentor.in/"> <img   className='spoimg' src={mentor}></img></a>
            <a href="https://hoverrobotix.com/" > <img   className='spoimg' src={hoverRobot}></img></a>
            <a href="https://www.pizzahut.co.in/" ><img   className='spoimg' src={pizza}></img></a>
            <a  href="https://www.logiczapnextgen.com/" ><img    className='spoimg' src={logiczap}></img></a>
        </div>
    </div>
  );
};

export default sponsor;