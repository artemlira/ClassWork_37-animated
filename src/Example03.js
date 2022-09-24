import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { Modal } from './Modal.js';

export const Example03 = () => {
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Показати повідомлення
      </button>

      <CSSTransition
        in={showModal}
        timeout={300}
        classNames={{
          enterActive: 'opening__overlay',
          exitActive: 'closing__overlay'
        }}
        mountOnEnter
        unmountOnExit>
        <div className="modal__overlay">
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>


      </CSSTransition>






    </>

  )
}