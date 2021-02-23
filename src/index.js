import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';


let reRenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
            <BrowserRouter>
                <App 
                    state={state} 
                    addPost={addPost} 
                    addMessage={addMessage}
                    updateNewPostText = {updateNewPostText} 
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

reRenderEntireTree();
subscribe(reRenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
