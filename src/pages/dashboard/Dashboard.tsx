import * as React from 'react';
import List from '../../components/list/list';
import './dashboard.scss'
import { Redirect, useHistory, Link } from 'react-router-dom';
import { motion } from "framer-motion"
import NewList from '../../components/newList/NewList'
import NewListButton from '../../components/new-list-button/newListButton';
import OpenedList from '../../components/opened-list/openedList';
import NewItemModal from '../../components/new-item-modal/newItemModal';



export default function Dashboard() {
  const handleButtonClick = (event: any) => {
    history.push('/newlist')
  }
  const [db, setDb] = React.useState(JSON.parse(localStorage.getItem('db')))
  const updateDashboard = () => setDb(JSON.parse(localStorage.getItem('db')))
  const [newlist, setNewList] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const [selectedList, setSelectedList] = React.useState(0)

  function listOpener(listId: number) {
    setSelectedList(listId);
    setOpenList(true);
  }
  function listCloser(){
    setOpenList(false)
  }

  function showListCreator() {
    console.log(newlist)
    newlist ? setNewList(false) : setNewList(true);
    console.log(newlist);
  }


  let listas: any = db.lists;
  let history: any = useHistory();
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const animateList = {
    hidden: {
      opacity: 0,
      y: -80
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <div className={`dashboard ${openList ? 'opened-list' : ''}`}>
      <h1 className={`dashboard-page-title ${openList ? 'opened-list' : ''}`}>Dashboard</h1>
      <motion.div
        className="list-container"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {listas.map((list: any, index: any) =>
          <motion.div variants={animateList} key={index}>
            <List
              title={list.list_title}
              color={list.list_color}
              listId={list.list_id}
              updateDashboard={updateDashboard}
              listOpener={listOpener}
            />
          </motion.div>
        )}
        <motion.div variants={animateList}>
          {newlist ? <NewList
            showListCreator={showListCreator}
            updateDashboard={updateDashboard} /> :
            <NewListButton showListCreator={showListCreator} />}
        </motion.div>
      </motion.div>

      {
        openList ?
          <div className="opened-list-view">
            <OpenedList listId={selectedList} closeList={listCloser} openList={listOpener}/>
          </div> :
          null
      }
      
    </div>
  );
}