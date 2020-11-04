import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

const ToDosContext = createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export const useState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ToDosContext.Provider value={{ state, dispatch }}>
        {children}
      </ToDosContext.Provider>
    </div>
  );
};

export default ToDosProvider;
