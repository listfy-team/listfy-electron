import React, { useState } from 'react';
import './openedList.scss';
import Item from '../item/item'

interface openListProps {
    listId: number,
    closeList: Function
}
interface itemFormat {
    item_id: number,
    item_title: string,
    description: string,
    date: string,
    is_checked: boolean,
}
interface listFormat {
    list_id: number,
    list_title: string,
    list_color: string,
    list_items: itemFormat[],
}
const noneList = {
    list_id: 0,
    list_title: 'none',
    list_color: 0,
    list_items: [{
        item_id: 0,
        item_title: 'none',
        description: 'none',
        date: 'none',
        is_checked: false,
    }
    ]
}
export default function OpenedList(props: openListProps) {
    const db = JSON.parse(localStorage.getItem('db'));
    //const [db, setDb] = useState(JSON.parse(localStorage.getItem('db')));
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
            </div>
        </div>
    )
}
