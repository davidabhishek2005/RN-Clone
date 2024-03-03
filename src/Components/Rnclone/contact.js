import React from 'react'

const contact = () => {
  return (
    <div className='contact' id ="contactid">
       <h1 className='text'>CONTACT US</h1>
  
        <div>
          <form className='submitform'>
            <input type="text" name ="Name" placeholder ="Your Name"></input>
            
            <input type="text" name ="email" placeholder ="Your Email"></input>
            
            <input type="text" name ="Message" placeholder ="Your Message"></input>
            
            <button type="submit">Submit</button>
          </form>
        </div>

      
       <div>
         <p className='text2'>Copyright @ David Abhishek G <br></br> <br></br> Made by David Abhishek G</p> 
       </div>

    </div>
  );
};

export default contact;