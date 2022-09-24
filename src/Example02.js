import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';

export const Example02 = () => {
  const [loader, setLoader] = useState(false);
  return (
    <>
      <button onClick={() => setLoader(!loader)}>
        {loader ? 'Сховати' : 'Показати'}</button>
      <div className="overlay">


        <CSSTransition
          in={loader}
          timeout={500}
          classNames={{
            enterActive: 'loader-show',
            enterDone: 'loader-rotate',
            exitActive: 'loader-hide',
            exitDone: 'loader-exit'
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className='loader'></div>
        </CSSTransition>
      </div>
    </>
  )
}