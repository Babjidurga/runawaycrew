import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LineWithCircle from '../Underline';

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h2> OUR Services</h2>
      <LineWithCircle />
      <ul className="facilities-list">
      <li className="col-12 col-md-3 col-lg-2 facility-item">
        <h1>EXPLAINER </h1>
          <p> unveil your brand's potential <br/>
           with our captivating explainer <br/>
           videos engaging visuals, <br/>
           seamless animations, and <br/>
           strategic storytelling that <br/>
           educates and inspires action. <br/>
            elevate your brand with patco <br/>
            productions, let's bring your <br/>
             story to life. </p>
        </li>
        
        <li className="col-12 col-md-3 col-lg-2 facility-item">

        <h1>MOTION GRAPHICS </h1>
          <p> captivating motion graphics <br/>
          that bring your brand to life. <br/>
          enhance your content with <br/>
          dynamic visuals, engaging <br/>
          animations, and seamless <br/>
          transitions. elevate your<br/>
          message with our expert motion <br/>
          graphics services. </p>
        </li>
        
        <li className="col-12 col-md-3 col-lg-2 facility-item">

        <h1 className='mt-3'>3D/VFX </h1>
          <p> experience the power of 3d vfx.<br/>
          mind-blowing visual effects, <br/>
          realistic simulations, and <br/>
          Immersive virtual worlds, take <br/>
          your visuals to new dimensions<br/>
           with cutting-edge 3d vfx. </p>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">

        <h1>LIVE SHOOT </h1>
          <p> immersive live shoots that <br/>
          capture the essence of the <br/>
          moment expertly crafted <br/>
          visuals, dynamic camera work, <br/>
          and captivating storytelling <br/>
          experience the magic of live<br/>
          shoots with us. </p>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">

        <h1>VIDEO EDITING </h1>
          <p> precise video editing that brings <br/>
          your story to life. enhance your<br/>
          footage, add captivating <br/>
          effects, and deliver a polished<br/>
          final product elevate your<br/>
           videos with our expert editing <br/>
           services. </p>
        </li>
        
        <li className="col-12 col-md-3 col-lg-2 facility-item">
        <h1 className='mt-3'>CONTENT WRITING </h1>
          <p> compelling content that <br/>
          captivates and engages, from <br/>
          website copy to blog posts, we <br/>
          craft words that leave a lasting <br/>
          impression. ignite your brand <br/>
          with our expert content writing.</p>
        </li>
        <li className="col-12 col-md-3 col-lg-2 facility-item">
        <h1>SOCIAL MEDIA <br/> CREATIVES </h1>
          <p> engaging social media content <br/>
          that sparks conversations and <br/>
          drives results, stand out. <br/>
          connect with your audience, <br/>
          and make an impact with our<br/>
          strategic social media <br/>
          solutions.</p>
        </li>
      </ul>
    </div>
  );
}

export default Facilities;