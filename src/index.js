import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Portfolio from './components/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <Switch>
        {/* <Route exact path='/'>
          <Products />
        </Route> */}
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
