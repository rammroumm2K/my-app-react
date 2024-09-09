import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './HelloWorld';
import Message from './message';
import Counter from './UseState';
import TaskApp from './Add';
import BasicExample from './form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HelloWorld />
    <Message text= "Salut" />
    <Counter /> <br />
    <TaskApp /> 
    <BasicExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
