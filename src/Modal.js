import React from "react";
import { CSSTransition } from 'react-transition-group';

export const Modal = ({ showModal, setShowModal }) => {

  return (

    <CSSTransition
      in={showModal}
      timeout={500}
      classNames={{
        enterActive: 'opening__modal',
        exitActive: 'closing__modal'
      }}
      mountOnEnter
      unmountOnExit>

      <div className="modal">
        <span className="close" onClick={() => setShowModal(null)}> + </span>
        <p className="message">
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </div>

    </CSSTransition>


  );
}