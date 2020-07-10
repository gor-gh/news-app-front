import React from 'react';
import ReactDOM from 'react-dom';
// import {createBrowserHistory, createBrowserHistory as createHistory} from 'history';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
// const history = createBrowserHistory({
//     basename: '/news-app'
// })

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/news-app'>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

