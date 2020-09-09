import React from 'react';

const Modal = ({ children }) => {
  return (
    <>
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <div className='container'>
            { children }
          </div>
        </div>
        <div className='modal-footer'>
          <a href='#!' className='modal-close waves-effect waves-green btn-flat'>
            close
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
