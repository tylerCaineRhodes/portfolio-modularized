import React from 'react';

export const Footer = () => (
  <footer>
  <div className='page-footer blue-grey darken-2'>
    <div className='container'>
      <div className='row'>
        <div className='col l4 s12'>
          <h5 className='white-text'>Web dev</h5>
          <div className='divider'></div>
          <ul className='grey-text text-lighten-4'>
            <li className='grey-text text-lighten-4'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/tylerCaineRhodes'
              >
                Github
              </a>
            </li>
            <li className='grey-text text-lighten-4'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/tylercainerhodes/'
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className='col l4 offset-l2 s12'>
          <h5 className='white-text'>Links</h5>
          <div className='divider'></div>
          <ul>
            <li>
              <a href='#expertise' className='grey-text text-lighten-3'>
                Expertise
              </a>
            </li>
            <li>
              <a href='#about' className='grey-text text-lighten-3'>
                About
              </a>
            </li>
            <li>
              <a href='#projects' className='grey-text text-lighten-3'>
                Software Engineering Projects
              </a>
            </li>
            <li>
              <a href='#top' className='grey-text text-lighten-3'>
                Back to Top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer-copyright blue-grey darken-4'>
      <div className='container white-text'>
        &copy; 2020 Copyright Tyler Rhodes, All Rights Reserved
        <a href='#top' className='grey-text text-lighten-4'>
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</footer>
);
