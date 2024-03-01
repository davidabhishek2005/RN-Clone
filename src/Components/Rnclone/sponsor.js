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
        <h1 className='text'>SPONSORS</h1>
        <div className='spo'>
            <img  className='spoimg' src={wildstone}></img>
            <img   className='spoimg' src={wiley}></img>
            <img    className='spoimg' src={geeks}></img>
            <img   className='spoimg' src={redfm}></img>
            <img   className='spoimg' src={mentor}></img>
            <img   className='spoimg' src={hoverRobot}></img>
            <img   className='spoimg' src={pizza}></img>
            <img    className='spoimg' src={logiczap}></img>
        </div>
    </div>
  );
};

export default sponsor;