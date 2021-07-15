import * as React from 'react';
import List from '../../components/list/list';
import './dashboard.scss'

export default function Dashboard() {
  let db: any = JSON.parse(localStorage.getItem('db'));
  let listas: any = db.lists;
  return (

    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="list-container">
        {listas.map((list: any, index: any) =>
          <List title={list.list_title} color={list.list_color} key={index} />
        )}
        <div className="add-list-button">
          <i className='bx bx-plus-circle'></i>
        </div>
      </div>
    </div>
  );
}