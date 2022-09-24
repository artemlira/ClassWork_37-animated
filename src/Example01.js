import React, { useState } from "react";
import { Transition } from 'react-transition-group';

export const Example01 = () => {
  const [loader, setLoader] = useState(false);
  return (
    <>
      <button onClick={() => setLoader(!loader)}>
        {loader ? 'Сховати' : 'Показати'}</button>
      <div className="overlay">
        <Transition in={loader} timeout={500} mountOnEnter unmountOnExit >
          {state => <div className={`loader ${state}`}></div>}
        </Transition>
      </div>
    </>
  )
}