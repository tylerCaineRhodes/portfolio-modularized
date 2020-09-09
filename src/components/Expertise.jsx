import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';

export const Expertise = () => (
  <div className='container'>
    <div className='row'>
      <h2 className='section-header'>Expertise</h2>
    </div>

    <div className='row scrollspy' id='expertise'>
      <div className='col l6 s12'>
        <ExpertiseCard
          cardTitle='Web Developement'
          description='I create functional websites, from conception to deployment. I have experience using a myriad of technologies from the full stack.'
          link='https://github.com/tylerCaineRhodes'
          linkDescription='Check out my Github'
          color='grey'
          iconclassName='fa fa-laptop-code fa-3x'
        />
      </div>

      <div className='col l6 s12'>
        <ExpertiseCard
          cardTitle='Music and Mentorship'
          description='I have eight years of experience teaching classNameical guitar and
              music theory, as well as experience teaching the full gamut of web
              technologies. I can help you reach your personal or professional
              goals.'
          link='#modal1'
          linkDescription='Musical Bio'
          color=''
          iconclassName='fas fa-chalkboard-teacher fa-3x'
        />
      </div>
    </div>

    <div className='row'>
      <div className='col l6 s12'>
        <ExpertiseCard
          cardTitle='Learning and Problem Solving'
          description='Learning is a skill in itself. Occupying my mind with new
              challenges gives me life force! From Japanese language to medical
              terminology, my curiosity drives me to be the best version of
              myself.'
          link=''
          linkDescription=''
          color=''
          iconclassName='fas fa-book-reader fa-3x'
        />
      </div>

      <div className='col l6 s12'>
        <ExpertiseCard
          cardTitle='Concerts'
          description='classNameical guitarist. I perform gigs, special events, weddings,
              house concerts, etc.'
          link='#contact'
          linkDescription='send me an email'
          color='grey'
          iconclassName='fas fa-guitar fa-3x'
        />
      </div>
    </div>

  </div>
);
