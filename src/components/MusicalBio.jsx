import React from 'react';
import Modal from './Modal';
import concertPic from '../assets/images/concert.jpg';

export const MusicalBio = () => (
  <Modal>
    <div className='row center-align'>
      <div className='col s12 l12'>
        <img
          id='bio-pic'
          src={concertPic}
          height='35%'
          width='35%'
        />
      </div>
    </div>
    <div className='row'>
      <p className='flow-text'>
        Tyler Rhodes is a classNameical guitarist from Austin, Texas. He holds a
        degree in music performance at the University of Texas at Austin, where
        he studied with guitarist Adam Holzman. Tyler won his first competition
        at Eastfield Community College in Dallas st the age of twelve. Around
        the same time, he joined the Austin Bella Corda, a guitar ensemble of
        young advanced players who recorded a CD titled "Gypsy Teens”. Tyler has
        performed solo guitar concerts all over the US and abroad. He has
        received multiple honors in the Mid-America Guitar Competition in St.
        Louis, Musical Minds Festival in Houston TX, and the Yamaha Young
        Performing Artist Competition. At age eighteen, he appeared on From the
        Top in Carmel, Indiana (2012) and was a recipient of From the Top’s Jack
        Kent Cooke Young Artist Award. Tyler spent summer of 2012 in France
        studying and performing under the guidance of Olivier Chassain,
        professor of guitar at the Paris conservatory of music. Tyler was a
        member of the UT Guitar Quartet and awarded the UT System Regents’
        Outstanding Student Awards in the Arts & Humanities in 2015. He received
        two master's degrees at Yale University under the guidance of guitarist
        and composer Benjamin Verdery. While studying at Yale, Tyler gave
        countless performances at venues such as the New England Guitar Society
        and Carnegie Hall. Tyler spent a semester abroad in Hakodate Japan,
        where he took private koto lessons and gave a lecture and performance in
        Japanese on the Sakura Variations for guitar and koto. In 2019, Tyler
        traveled to Vercelli Italy to perform pieces for the great Italian
        composer Angelo Gilardino. Tyler enjoys technology and works as a web
        developer while also performing and teaching music on the side.
      </p>
    </div>
  </Modal>
);

