import React from 'react'; // core library  for building interfaces
import ReactDOM from 'react-dom/client'; // library provides methods to interact with the DOM, allowing React components to be rendered.
import './index.css';
import App from './App'; // Main component of the application
import reportWebVitals from './reportWebVitals'; // measures performance in the application

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />         
  </React.StrictMode>
);
// <App is the main component that will be rendered inside the root.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// All this code sets up a basic react app, renders the main component and preps for performance tracking..