import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './components/Button'
import Sidebar from './components/sidebar/Sidebar';
import './sass/app.scss'
export default function App(){
  return(
    <div className="app">
      <Sidebar/>
      <section className="home-section">
        <Button/>
      </section>
    </div>
  );
}

