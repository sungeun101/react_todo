import React from 'react';
import ReactDOM from 'react-dom';
import ToDosProvider from './context';
import App from './components/App';

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById('root')
);
