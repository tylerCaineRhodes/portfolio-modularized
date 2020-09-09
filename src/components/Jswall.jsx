import React from 'react';
import jswallPic from '../assets/images/javascriptWall.jpg';
import { Parallax }  from './Parallax';

export const JSwall = () => (
  <Parallax image={jswallPic} imageDescription='large wall of javascipt code'>
    <div className='row center'>
      <div className='col l10 offset-l1 valign'>
        <h2 className='center-align white-text cta'>
          Have I caught your attention?
        </h2>
        <a href='#contact' className='center btn-large hoverable red accent-2'>
          GET IN TOUCH
        </a>
      </div>
    </div>
  </Parallax>
  //   <div className="parallax-container valign-wapper">
  //   <div className="container">
  //     <div className="row center">
  //       <div className="col l10 offset-l1 valign">
  //         <h2 className="center-align white-text cta">Have I caught your attention?</h2>
  //         <a href="#contact" className="center btn-large hoverable red accent-2">GET IN TOUCH</a>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="parallax"><img src={jswallPic} /></div>
  // </div>
);

