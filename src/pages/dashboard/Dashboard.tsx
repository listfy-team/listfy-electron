import * as React from 'react';
import List from '../../components/list/list';
import './dashboard.scss'
import { Redirect, useHistory, Link } from 'react-router-dom';

export default function Dashboard() {

  const [db, setDb] = React.useState(JSON.parse(localStorage.getItem('db')))
  const updateDashboard = () => setDb(JSON.parse(localStorage.getItem('db')))
  let listas: any = db.lists;
  let history:any = useHistory();
  return (

    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="list-container">
        {listas.map((list: any, index: any) =>
          <List 
          title={list.list_title} 
          color={list.list_color} 
          listId={list.list_id}
          updateDashboard={updateDashboard} 
          key={index} />
        )}

        <Link className="add-list-button" to="/newlist">
          <i className='bx bx-plus-circle'></i>
        </Link>
      </div>
    </div>
  );
}