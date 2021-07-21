import React from 'react';
import './list.scss';
import ListOptions from './list-options/listOptions'
import EditList from '../editList/editList';

interface listData {
    title: string,
    color: string,
    listId: number,
    updateDashboard: Function
}

export default function List(props: listData) {
    const styles = {
        backgroundColor: props.color
    }
    const [showOptions, setShowOptions] = React.useState(false);
    const [editList, setEditList] = React.useState(false)
    function showListEditor() {
        editList ? setEditList(false) : setEditList(true);
    }
    const hideOrShowOptions = () => {
        showOptions ? setShowOptions(false) : setShowOptions(true);
    }
    return (

        editList ?
            <EditList
                showListEditor={showListEditor}
                updateDashboard={props.updateDashboard}
                title={props.title}
                color={props.color}
                listId={props.listId}

            /> :

            <div className="list" id="my-list-id" style={styles}>
                {
                    showOptions ?
                        <ListOptions
                            listId={props.listId}
                            updateDashboard={props.updateDashboard}
                            showListEditor={showListEditor} /> :
                        <div></div>
                }
                <h2 className="listTitle">{props.title}</h2>
                <i className='bx bx-dots-vertical-rounded menuList' onClick={hideOrShowOptions}></i>
            </div>

    );
}