import React from 'react'
import './item.scss'

interface itemProps{
    itemColor: string,
    itemTitle: string,
    itemDescription: string,
    itemDate: string,
    isChecked: boolean
}
export default function Item(props: itemProps) {
    return (
        <div className="item-container">
            <ul>
                <li>cor: {props.itemColor}</li>
                <li>Titulo:{props.itemTitle}</li>
                <li>Descrição:{props.itemDescription}</li>
                <li>Data:{props.itemDate}</li>
                <li>Checkado:{props.isChecked.toString()}</li>
            </ul>
        </div>
    )
}
