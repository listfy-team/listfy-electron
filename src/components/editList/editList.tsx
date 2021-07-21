import React, { useState } from 'react';
import './editList.scss';
import { useHistory } from 'react-router-dom'
import { addNewList } from '../../controller/localStorage'
import { editList } from '../../controller/localStorage'


interface editListControl {
    showListEditor: Function,
    updateDashboard: Function,
    title: string,
    color: string,
    listId: number
}
export default function EditList(props: editListControl) {

    const cancelEditList = () => {
        props.showListEditor();
    }
    const handleButtonClick = (event: any) => {
        //editList
        let listTitle: any = (document.querySelector('input.list-name') as HTMLInputElement).value;
        console.log(listTitle);
        let listColor: string;
        let radioColorGroup: any = [];
        radioColorGroup = document.querySelectorAll('input.color-selector');
        for (let i = 0; i < radioColorGroup.length; i++) {
            if (radioColorGroup[i].checked) {
                listColor = radioColorGroup[i].value;
                break;
            } else {
                listColor = null
            }
        }
        editList(listTitle, listColor, props.listId);
        props.updateDashboard();
        props.showListEditor();
    }
    return (
        <div className="new-list" id="new-list">
            <div className="new-list-header">
                <h1>Nova Lista</h1>
            </div>
            <div className="new-list-body">
                <div className="section-list-name">
                    <input type="text" className="list-name" placeholder="Nome da lista" defaultValue={props.title} />
                </div>
                <form className="radio-buttons">
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#FFBE0B" className="color-selector" defaultChecked={props.color === "#FFBE0B"}/>
                        <span className="radio-btn" style={{ backgroundColor: '#FFBE0B' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#FF006E" className="color-selector" defaultChecked={props.color === "#FF006E"}/>
                        <span className="radio-btn" style={{ backgroundColor: '#FF006E' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#8338EC" className="color-selector" defaultChecked={props.color === "#8338EC"}/>
                        <span className="radio-btn" style={{ backgroundColor: '#8338EC' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#3A86FF" className="color-selector" defaultChecked={props.color === "#3A86FF"}/>
                        <span className="radio-btn" style={{ backgroundColor: '#3A86FF' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#1Db954" className="color-selector" defaultChecked={props.color === "#1Db954"}/>
                        <span className="radio-btn" style={{ backgroundColor: '#1Db954' }}>
                        </span>
                    </label>
                </form>
                <div className="options-buttons">
                    <button className="new-list-closer" onClick={cancelEditList}>
                        <i className='bx bx-x-circle'></i> Cancelar
                    </button>
                    <button className="list-creator" value="/dashboard" onClick={handleButtonClick}>
                        <i className='bx bx-plus-circle' ></i> Criar
                    </button>
                </div>
            </div>
        </div>

    );
}