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
        <div className='facultyText'>
            <img  className="img4" src={faculty}></img>
            <h2 className='text4'>Dr. Tushar Kanti Bera</h2>
            <h3 className='text4'>Faculty Advisor</h3>

        </div>
        <div className='team'>
          <div><img className='img4' src={president}></img>
              <h2 className='text4'>Dhiraj Kumar</h2>
              <h3 className='text4'>President</h3>
          </div>
          <div><img className='img4' src={Vicepresident}></img>
              <h2 className='text4'>Akshay A Bhaiju</h2>
              <h3 className='text4'>Vice President & Sponsor Head</h3>
          </div>
          <div><img  className='img4' src={treasurer}></img>
              <h2 className='text4'> Kalyan Choubey</h2>
              <h3 className='text4'>Treasurer & Pubilicity Head </h3>
          </div>
          <div><img  className='img4' src={logistichead}></img>
              <h2 className='text4'>Sumit Kumar</h2>
              <h3 className='text4'>Event & Logistics Head</h3>

          </div>
          <div><img  className='img4' src={generalsecretary}></img>
              <h2 className='text4'>Priyanshu Burman</h2>
              <h3 className='text4'>General Secretary & Design Head</h3>
          </div>
          <div><img className='img4' src={techhead}></img>
              <h2 className='text4'>Amool Khudia</h2>
              <h3 className='text4'>Tech Head</h3>
          </div>
          <div><img  className='img4' src={convenor}></img>
              <h2 className='text4'>Ashish Raj</h2>
              <h3 className='text4'>Convenor</h3>
          </div>
          <div><img  className='img4' src={sankalp}></img>
               <h2 className='text4'>Sankalp Mishra</h2>
               <h3 className='text4'>Fest Head</h3>
          </div>
        </div>
    </div>
  );
};

export default ourteam;