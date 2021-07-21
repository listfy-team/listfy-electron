import React from 'react'

interface newListButton{
    showListCreator: Function
}
export default function NewListButton(props: newListButton) {

    function handleClick(){
        props.showListCreator();
    }
    return (
        <div className="add-list-button" onClick={handleClick}>
            <i className='bx bx-plus-circle'></i>
        </div>
    )
}
