import * as React from 'react';
import List from '../../components/list/list';
import './dashboard.scss'
import { Redirect, useHistory, Link } from 'react-router-dom';

export default function Dashboard() {
  let db: any = JSON.parse(localStorage.getItem('db'));
  let listas: any = db.lists;
  let history:any = useHistory();
  function openNewListPage() {
    return(
      <Redirect to="/newlist"/>
    );
  }
  return (

    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="list-container">
        {listas.map((list: any, index: any) =>
          <List title={list.list_title} color={list.list_color} key={index} />
        )}

        <Link className="add-list-button" to="/newlist">
          <i className='bx bx-plus-circle'></i>
        </Link>
      </div>
    </div>
  );
}