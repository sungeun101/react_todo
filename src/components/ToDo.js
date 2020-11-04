import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { UNCOMPLETE, COMPLETE, DEL } from '../actions';
import { useDispatch } from '../context';

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={text} />
        </ListItem>
      </List>

      <button
        onClick={() =>
          dispatch({
            type: DEL,
            payload: id,
          })
        }
      >
        ❌
      </button>

      <button
        onClick={() =>
          dispatch({
            type: isCompleted ? UNCOMPLETE : COMPLETE,
            payload: id,
          })
        }
      >
        {isCompleted ? '⤴️' : '✔️'}
      </button>
    </div>
  );
};
