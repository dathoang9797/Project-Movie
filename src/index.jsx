import React from 'react';
import App from './App';
import { store } from '@Redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
