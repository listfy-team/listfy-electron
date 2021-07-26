import React, { useState, useEffect } from 'react';
import './openedList.scss';
import Item from '../item/item'
import NewItemModal from '../new-item-modal/newItemModal'

interface openListProps {
    listId: number,
    closeList: Function,
    openList: Function,
}

export default function OpenedList(props: openListProps) {
    const db = JSON.parse(localStorage.getItem('db'));
    //const [db, setDb] = useState(JSON.parse(localStorage.getItem('db')));
    const [newItemRequired, setNewItemRequired] = useState(false)
    function closeNewItemModal() {
        setNewItemRequired(false);
    }
    function openNewItemModal() {
        setNewItemRequired(true);
    }
    function closeThatList() {
        props.closeList();
    }
    var listData: any;
    for (let i = 0; i < db.lists.length; i++) {
        if (db.lists[i].list_id == props.listId) {
            //separateList(db.lists[i]);
            listData = db.lists[i]
            break;
        }
    }
    return (
        <div className="opened-list-container">
            <header>
                <div className="title-opened-list">
                    <h1>
                        {listData.list_title}
                    </h1>
                </div>
                <div className="header-options">
                    <i className='bx bx-x-circle close-list-button' onClick={closeThatList}></i>
                </div>
            </header>
            <div className="opened-list">

                {listData.list_items.map((item: any, index: any) =>
                    <Item
                        itemColor={listData.list_color}
                        itemTitle={item.item_title}
                        itemDescription={item.description}
                        itemDate={item.date}
                        isChecked={item.is_checked}
                        key={index}
                    />
                )}
                <div className="new-item-button"
                    onClick={() => openNewItemModal()}>
                    <p><i className='bx bx-plus-circle'></i>Nova tarefa</p>
                </div>
            </div>

            {
                newItemRequired ?
                    <NewItemModal
                        closeModal={closeNewItemModal}
                        isNewItemRequired={newItemRequired} 
                        listId={props.listId}
                        reloadList={props.openList}/>
                    : null
            }

        </div>
    )
}
