import React from 'react';

export const ExpertiseCard = ({
  cardTitle,
  description,
  link,
  linkDescription,
  color,
  iconclassName
}) =>
  color === 'grey' ? (
    <div className='card medium blue-grey accent-4 z-depth-3 cardActionGuy'>
      <div className='card-content white-text'>
        <h3 className='center-align'>
          <i className={iconclassName}></i>
        </h3>
        <div className='divider'></div>
        <span className='card-title'>{cardTitle}</span>
        <p>{description}</p>
      </div>

      <div className='card-action'>
        <a target='_blank' rel='noopener noreferrer' href={link} className="modal-trigger">
          {linkDescription}
        </a>
      </div>
    </div>
  ) : (
    <div className='card medium red accent-2 z-depth-3 cardActionGuy'>
      <div className='card-content white-text'>
        <h3 className='center-align'>
          <i className={iconclassName}></i>
        </h3>
        <div className='divider'></div>
        <span className='card-title'>{cardTitle}</span>
        <p>{description}</p>
      </div>

      <div className='card-action'>
        <a target='_blank' rel='noopener noreferrer' href={link} className="modal-trigger">
          {linkDescription}
        </a>
      </div>
    </div>
  );
