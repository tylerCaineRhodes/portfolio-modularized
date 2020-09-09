import React from 'react';

export const ProjectCard = ({ image, title, projectLink, linkDescription, projectDescription }) => (
  <div className="col l4 m8 offset-m2 s12">
    <div className="card cardActionGuy">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={ image }/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{ title }<i className="material-icons right">more_vert</i></span>
        <p><a target="_blank" rel="noopener noreferrer" href={ projectLink }>{ linkDescription }</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{ title }<i className="material-icons right">close</i></span>
        <p>{ projectDescription }</p>
      </div>
    </div>
  </div>
);
