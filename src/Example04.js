import { useState } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'animate.css';


export const Example04 = () => {

  // const [] = useState();

  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 01' },
    { id: 2, title: 'Task 02' },
    { id: 3, title: 'Task 03' },
    { id: 4, title: 'Task 04' },
    { id: 5, title: 'Task 05' }
  ])

  return (

    <TransitionGroup component='ul'>

      {todos.map(item =>
        <CSSTransition
          key={item.id}
          timeout={2000}
          classNames={{
            exitActive: 'animate__hinge'
          }}
        >
          <li
            className="animate__animated"
            onClick={() => {
              setTodos(
                [
                  ...todos.filter(todo => todo.id !== item.id)
                ]
              )
            }}

          >{item.title}</li>
        </CSSTransition>
      )}

    </TransitionGroup>

  );
}