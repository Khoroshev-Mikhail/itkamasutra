import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Таня'},
  {id: 2, name: 'Фрол'},
  {id: 3, name: 'Мама'},
  {id: 4, name: 'Лена'},
]
let messagesData = [
    {id: 1, message: 'Перове сообщение'},
    {id: 2, message: 'Второе сообщение'},
    {id: 3, message: 'Третье сообщение'},
    {id: 4, message: 'Четвёртое сообщение'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
