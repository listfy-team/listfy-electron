import React from 'react';
import ReactDOM from 'react-dom';
import App  from './app';
import { BrowserRouter } from 'react-router-dom';


function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>, document.getElementById('root'));
}
//p
render();