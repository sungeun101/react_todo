import React from 'react';
import { useState } from '../context';

import ADD from './Add';
import List from './List';
import ToDo from './ToDo';

function App() {
  const { toDos, completed } = useState();

  return (
    <>
      <ADD />
      <List>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List title={completed.length !== 0 ? 'Completed List' : ''}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
