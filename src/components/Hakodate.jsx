import React from 'react';
import hakodateImg from '../assets/images/fe4906d6297f9e5b09b5813ce768f200-hakodate.jpg';
import { Parallax } from './Parallax';

export const Hakodate = () => {
  return (
    <Parallax image={ hakodateImg } imageDescription="from the peak of the mountain">
      <div className='row'>
        <div className='col l8 s12 white-text'>
          <h4 className='thin-text left-align'>
            Software engineer, educator, musician, traveler, &amp; lifelong
            learner.
          </h4>
        </div>
      </div>
      <div className='row'>
          <div className='col l4'>
            <a
              className='waves-effect btn-large hoverable red accent-2 center-align'
              href='#contact'
            >
              Get in touch
            </a>
          </div>
      </div>
    </Parallax>  

    // <div className="parallax-container valign-wrapper">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col l8 s12 white-text">
    //         <h4 className="thin-text left-align">Software engineer, educator, musician, traveler, &amp; lifelong learner.</h4>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col l4">
    //         <a className="waves-effect btn-large hoverable red accent-2 center-align" href="#contact">Get in touch</a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="parallax"><img src={hakodateImg} /></div>
    // </div>
  );
}


