import React from 'react'

const contact = () => {
  return (
    <div className='contact' id ="contactid">
       <h1 className='text'>CONTACT US</h1>
       {/* <div class="contact-right">
                <form name="submit-to-google-sheet">
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
                <span id="msg"></span>
            </div>
 */}
        <div>
          <form className='submitform'>
            <input type="text" name ="Name" placeholder ="Your Name"></input>
            
            <input type="text" name ="email" placeholder ="Your Email"></input>
            
            <input type="text" name ="Message" placeholder ="Your Message"></input>
            
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* <div>
        <p>Copyright @ David Abhishek G<br><br> Made with <i class="fa-solid fa-heart"></i> by David Abhishek G</p>
    </div> */}
       <div>
         <p className='text2'>Copyright @ David Abhishek G <br></br> <br></br> Made by David Abhishek G</p> 
       </div>

    </div>
  );
};

export default contact;