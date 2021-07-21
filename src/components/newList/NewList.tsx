import React, { useState } from 'react';
import './newList.scss';
import { useHistory } from 'react-router-dom'
import { addNewList } from '../../controller/localStorage'


interface newlistControl {
    showListCreator: Function,
    updateDashboard:Function
}
export default function NewList(props: newlistControl) {
    const colorList: any = ["#FFBE0B",
        "#FF006E",
        "#8338EC",
        "#3A86FF",
        "#1Db954"];
    const history = useHistory();
    const cancelNewList = () => {
        props.showListCreator();
    }
    const handleButtonClick = (event: any) => {
        createList();
        props.updateDashboard();
        props.showListCreator();
    }
    function createList() {
        let listTitle: any = (document.querySelector('input.list-name') as HTMLInputElement).value;
        if (listTitle == null || listTitle == '') {
            listTitle = "untitled list";
        }
        console.log(listTitle);
        let listColor
        let radioColorGroup: any = [];
        radioColorGroup = document.querySelectorAll('input.color-selector');
        for (let i = 0; i < radioColorGroup.length; i++) {
            if (radioColorGroup[i].checked) {
                listColor = radioColorGroup[i].value;
                break;
            } else {
                listColor = '#CCC'
            }
        }
        addNewList(listTitle, listColor);
        console.log('fiz minha parte')
    }
    return (
        <div className="new-list" id="new-list">
            <div className="new-list-header">
                <h1>Nova Lista</h1>
            </div>
            <div className="new-list-body">
                <div className="section-list-name">
                    <input type="text" className="list-name" placeholder="Nome da lista" />
                </div>
                <form className="radio-buttons">
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#FFBE0B" className="color-selector" />
                        <span className="radio-btn" style={{ backgroundColor: '#FFBE0B' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#FF006E" className="color-selector" />
                        <span className="radio-btn" style={{ backgroundColor: '#FF006E' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#8338EC" className="color-selector" />
                        <span className="radio-btn" style={{ backgroundColor: '#8338EC' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#3A86FF" className="color-selector" />
                        <span className="radio-btn" style={{ backgroundColor: '#3A86FF' }}>
                        </span>
                    </label>
                    <label className="custom-radio">
                        <input type="radio" name="radio" value="#1Db954" className="color-selector" />
                        <span className="radio-btn" style={{ backgroundColor: '#1Db954' }}>
                        </span>
                    </label>
                </form>
                <div className="options-buttons">
                    <button className="new-list-closer" onClick={cancelNewList}>
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