import React from 'react';
import './list.scss';

interface listData {
    title: string,
    color: string,

}

export default function List(props: listData) {
    const styles = {
        backgroundColor: props.color
    }
    return (
        <div className="list" id="my-list-id" style={styles}>
            <div className="hidded-options" id="">
                <div className="list-trash">
                    <i className='bx bxs-trash'></i>
                </div>
                <div className="list-edit">
                    <i className='bx bxs-pencil'></i>
                </div>
            </div>
            <h2 className="listTitle">{props.title}</h2>
            <i className='bx bx-dots-vertical-rounded menuList'></i>
        </div>
    );
}