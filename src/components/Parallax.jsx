import React from 'react';

export const Parallax = ({ children, image, imageDescription }) => (
  <div className="parallax-container valign-wapper">
    <div className="container">
      { children }
    </div>

    <div className="parallax">
      <img src={ image } alt={ imageDescription }/>
    </div>
  </div>
);
