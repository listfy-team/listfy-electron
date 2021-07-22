import React from 'react'
import './item.scss'

interface itemProps {
    itemColor: string,
    itemTitle: string,
    itemDescription: string,
    itemDate: string,
    isChecked: boolean
}
export default function Item(props: itemProps) {
    return (
        <div className="item-container" style={{backgroundColor: props.itemColor}}>
            <div className="item-header">
                <h2 className="item-title">
                    {props.itemTitle}
                </h2>
                <div className="item-date">
                    <h3>{props.itemDate}</h3>
                </div>
                <div className="item-config">
                    <i className='bx bxs-cog'></i>
                </div>
            </div>
            <div className="item-body">
                <div className="item-description">
                    {props.itemDescription}
                </div>
                <div className="item-checkbox-container">
                    <input type="checkbox" className="item-checkbox" defaultChecked={props.isChecked === true}/>
                </div>
            </div>
        </div>
    )
}
