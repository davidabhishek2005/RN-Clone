import React from 'react'
import Vicepresident from './Assets/Vice_president.png';
import sankalp from './Assets/sankalp_festhead.jpg';
import logistichead from './Assets/event_logistics head.jpeg';
import generalsecretary from './Assets/generalSecretary_design head.jpg';
import president from './Assets/President.jpg';
import treasurer from './Assets/treasurer_publicity head.jpg';
import faculty from './Assets/faculty_advisor.jpeg';
import techhead from './Assets/tech head.jpg';
import convenor from './Assets/covenor.jpg';

const ourteam = () => {
  return (
    <div className='ourteam' id="teamid">
        <h1 className='text'>Our Team</h1>
        <div>
            <img  className="img4" src={faculty}></img>
            <h2 className='text'>Faculty Advisor</h2>
        </div>
        <div className='team'>
          <img className='img4' src={president}></img>
          <img className='img4' src={Vicepresident}></img>
          <img  className='img4' src={treasurer}></img>
          <img  className='img4' src={logistichead}></img>
          <img  className='img4' src={generalsecretary}></img>
          <img className='img4' src={techhead}></img>
          <img  className='img4' src={convenor}></img>
          <img  className='img4' src={sankalp}></img>
        </div>
    </div>
  );
};

export default ourteam;