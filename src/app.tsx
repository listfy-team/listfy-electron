import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import './sass/app.scss'

import Dashboard from './pages/dashboard/Dashboard';
import User from './pages/user/User';
import Notifications from './pages/notifications/Notifications';
import Data from './pages/data/Data';
import Calendar from './pages/calendar/Calendar';
import Settings from './pages/settings/Settings';

export default function App(){
  return(
    <div className="app">
      <Sidebar/>
      <section className="home-section">
      <Switch>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route path='/user' component={User}/>
            <Route path='/notifications' component={Notifications}/>
            <Route path='/data' component={Data}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/settings' component={Settings}/>
      </Switch>
      </section>
    </div>
  );
}

