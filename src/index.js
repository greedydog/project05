import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Ex03';
import reportWebVitals from './reportWebVitals';
//useEffect 사용해보기

//2. 랜덤게임 진행해보기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
