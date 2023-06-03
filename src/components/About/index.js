import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';


const About = () => {
  return (
    <div className='about-content'>
  <div className='about-container'>
        <div className='headings-container'>
          <h2>ABOUT US</h2>
          <div className="line-container-after">
          <div className="line-after"></div>
            <div className="circle-after"></div>
            
        </div>
          <h4>"DELIVERING STUNNING <br/> 
              VISUAL NARRATIVES"</h4>
              <p>pride that the intense vision of our experienced personnel a niche in the <br/>
                  industry by serving clients across the globe</p>
        </div>
        <div className='content-container'>
        <p><span>PATCO PRODUCTIONS</span> has earned its reputation in the market for its services <br/>
                and products. We aim to grow as the most prominent firm for our Customers. <br/>
                  Business Associates & Stakeholders and we take pride that the intensive vision of <br/>
                    our experienced personnel encourage us to create a nice in the industry by <br/>
                    serving clients across the globe.<br/> </p>
                    <h2>OUR STORY</h2>
                    <div className="line-container-before">
                        <div className="circle-after"></div>
                        <div className="line-after"></div>
                  </div>
        </div> 
      
    </div>
    <div >
        <p className='about'>about</p>
      </div>
   </div>
  )
}

export default About;
