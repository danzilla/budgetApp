import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './react/App';
import reportWebVitals from './reportWebVitals';

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// App render
root.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
