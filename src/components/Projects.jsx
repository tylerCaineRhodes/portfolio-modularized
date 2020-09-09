 import React from 'react';
 import { ProjectCard } from './ProjectCard';
 import animePic from '../assets/images/animeicon.png';
 import WowesCarouselPic from '../assets/images/carousel480.png';
 import WowesItemPagePic from '../assets/images/wowesproxy.png';
 import ZoopPic from '../assets/images/nottilted.png';
 import HaruhiPic from '../assets/images/haruhi480.png';
 import WeventPic from '../assets/images/weventcomp.png';


 export const Projects = () => (
   <div className='container'>
     <h2 className='section-header scrollspy' id='projects'>
       Recent Software Engineering Projects
     </h2>

     <div className='row'>
       <ProjectCard
         image={animePic}
         title={'AniMミ'}
         projectLink={'https://github.com/tylerCaineRhodes/AniME'}
         linkDescription={'Check out on Github'}
         projectDescription={
           'AniMミ is an app that simplifies the process for searching and saving anime suggestions. It provides functionality for English and Japanese titles.'
         }
       />
       <ProjectCard
         image={WowesCarouselPic}
         title={'Wowes Carousel'}
         projectLink={'https://github.com/tylerCaineRhodes/AniME'}
         linkDescription={'Check out on Github'}
         projectDescription={
           ' Wowes Carousel dynamically renders a scrollable list of related World of Warcraft themed products for a searched item. A second carousel component lists previously viewed items. The challenge for this app was not using css libraries or any premade components.'
         }
       />
       <ProjectCard
         image={WeventPic}
         title={'Wevent'}
         projectLink={'http://wevent.us-east-2.elasticbeanstalk.com/'}
         linkDescription={'View Live Site'}
         projectDescription={`Wevent is a responsive web application that allows users to view
                events on a calendar based on a set location. Users can search
                for events by applying filters based on their location (city,
                state), category type, number of attendees, private / public , or
                the cost of an event. Users can choose whether or not to attend
                and event or just as easily create a new event with similar
                filters`}
       />
     </div>

     <div className='row'>
       <ProjectCard
         image={WowesItemPagePic}
         title={'Wowes Item Page'}
         projectLink={'https://github.com/tylerCaineRhodes/Wowes'}
         linkDescription={'Check out on Github'}
         projectDescription={`No Css libraries or third party components were used in making
                this items page. Four full stack deployed components were
                rendered together via a proxy server, and they interact by
                listening for and dispatching custom events.`}
       />
       <ProjectCard
         image={HaruhiPic}
         title={'Haruhi'}
         projectLink={'https://github.com/tylerCaineRhodes/Haruhi'}
         linkDescription={'Check out on Github'}
         projectDescription={` My fist extension for google chrome. It finds any div in google
                that contains the name Suzimiya Haruhi, and deletes it from the
                page! It's an inside joke from 'The disappearance of Suzumiya
                Haruhi'. I submited to Google for review to be published but it
                was rejected. They must not be huge anime fans!`}
       />
       <ProjectCard
         image={ZoopPic}
         title={'Zoop'}
         projectLink={'https://github.com/tylerCaineRhodes/Zoop'}
         linkDescription={'Check out on Github'}
         projectDescription={
           'A Simple and silly little zoom clone using Socket.io and EJS templating.'
         }
       />
     </div>
   </div>
 );
