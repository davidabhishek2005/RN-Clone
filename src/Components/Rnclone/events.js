import React from 'react'
import event1 from './Assets/events_1.jpg';
import event2 from './Assets/events_2.jpg';
import event3 from './Assets/events_3.jpg';
import event4 from './Assets/events_4.jpg';
import event5 from './Assets/events_5.jpg';
import event6 from './Assets/events_6.jpg';

const events = () => {
  return (
    <div className='events' id="eventid">
        <h1 className='text'>EVENTS</h1>
        <div className='event'>
          <img className='eventimg' src={event1}></img>
          <img  className='eventimg' src={event2}></img>
          <img className='eventimg' src={event3}></img>
          <img  className='eventimg' src={event4}></img>
          <img className='eventimg' src= {event5}></img>
          <img className='eventimg' src={event6}></img>
        </div>


    </div>
  )
}

export default events

