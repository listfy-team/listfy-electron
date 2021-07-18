import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { verifyStorage } from './controller/localStorage'
import Sidebar from './components/sidebar/Sidebar';
import './sass/app.scss'

import Dashboard from './pages/dashboard/Dashboard';
import User from './pages/user/User';
import Notifications from './pages/notifications/Notifications';
import Data from './pages/data/Data';
import Calendar from './pages/calendar/Calendar';
import Settings from './pages/settings/Settings';
import NewList from './pages/newList/NewList';

export default function App() {
  verifyStorage();
  return (
    <div className="app">
      <Sidebar />
      <section className="home-section">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/user' component={User} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/data' component={Data} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/settings' component={Settings} />
          <Route path='/newlist' component={NewList}/>
        </Switch>
      </section>
    </div>
  );
}

