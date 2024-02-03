import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {provider} : provides redux store access to out application
import { Provider} from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrapping our App under <Provider/> component to have store access all over the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


