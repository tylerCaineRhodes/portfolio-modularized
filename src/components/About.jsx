import React from 'react';
import TylerHasFun from '../assets/images/tyler-has-fun.jpg';

export const About = () => (
  <div className="container">

      <div className="row">
        <div className="col s12 l12">
          <h2 className="section-header scrollspy" id="about">About Me</h2>
        </div>
        <div className="col s12 l12">
          <img className="materialboxed" src={ TylerHasFun } height="35%" width="35%" id="slyimage-chan" />
        </div>
      </div>
      
      <div className="row">
        <p className="flow-text">
          Hi, I'm Tyler! I’m a software engineer with a focus in web development. 
          I've worked mainly with the MERN/SERN stack and React front-end libraries. 
          I love anything Javascript/Typescript! 
          I have a strong track record as an educator, including my most recent experience as a resident software engineer and technical mentor at Hack Reactor, a software engineering emmersive that targets career changers and veterans.<br /><br />
          I firmly believe that the skills necessary for success as a classNameical musician heavily correlate to those required for software engineering. 
          Both disciplines require countless hours of study, focus, practice, and tenacity. 

          At the end of the day, the goal is the final product, communicating with an audience, and performing effectively. 
          Combined with my teaching experience, I’m excited to see how these qualities continue to enable me to grow into an even greater software engineer. 
          Some of my other unique leadership experiences include being elected as the vice president of a nonprofit housing cooperative and trained as a conflict mediator. 
          I also love languages and have limited working proficiency in Japanese.
        </p>
      </div>

  </div>
);
