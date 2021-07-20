import React from 'react'
import './listOptions.scss'
import { deleteList } from '../../../controller/localStorage'


interface optionsData{
    listId:number,
    updateDashboard: Function
}
export default function ListOptions(props: optionsData) {
    function deleteThisList(){
        console.log('deletando lista');
        deleteList(props.listId);
        console.log('lista deletada')
        props.updateDashboard();
    }
    return (
        <div className="list-options" id="">
            <div className="list-trash" onClick={deleteThisList}>
                <i className='bx bxs-trash'></i>
            </div>
            <div className="list-edit">
                <i className='bx bxs-pencil'></i>
            </div>
        </div>
    )
}
