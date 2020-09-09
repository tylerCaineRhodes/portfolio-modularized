import React from 'react';
import resume from '../assets/tylerRhodesResume.pdf';

export const Nav = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper blue-grey darken-2 scrollspy' id='top'>
          <a href='#!' className='brand-logo hide-on-med-and-down'>
            <span className='logo grey-text text-lighten-2'>Tyler Rhodes</span>
          </a>
          <a href='#!' className='brand-logo center-align show-on-small'>
            <span className='logo grey-text text-lighten-2'>Tyler Rhodes</span>
          </a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='#about'>About Me</a>
            </li>
            <li>
              <a href='#projects'>Recent Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href={ resume } download>
                Software Engineering Resume
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/tylerCaineRhodes'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Recent Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='./assets/TylerRhodesResume.pdf' download>
            Software Engineering Resume
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/tylerCaineRhodes'
          >
            Github
          </a>
        </li>
      </ul>
    </>
  );
}
