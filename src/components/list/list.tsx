import React from 'react';
import './list.scss';
import ListOptions from './list-options/listOptions'

interface listData {
    title: string,
    color: string,
    listId: number
    updateDashboard: Function
}

export default function List(props: listData) {
    const styles = {
        backgroundColor: props.color
    }
    const [showOptions, setShowOptions] = React.useState(false);
    const hideOrShowOptions = () => {
        showOptions ? setShowOptions(false) : setShowOptions(true);
    }
    return (
        <div className="list" id="my-list-id" style={styles}>
            { showOptions ? <ListOptions listId={props.listId} updateDashboard={props.updateDashboard}/> : <div></div> }
            <h2 className="listTitle">{props.title}</h2>
            <i className='bx bx-dots-vertical-rounded menuList' onClick={hideOrShowOptions}></i>
        </div>
    );
}