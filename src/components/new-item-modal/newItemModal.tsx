import React, { useState, useEffect } from 'react'
import { addItemToList } from '../../controller/localStorage'
import './newItemModal.scss'

interface newItemModalProps {
  closeModal: Function,
  isNewItemRequired: boolean,
  listId: number,
  reloadList: Function;
}
export default function NewItemModal(props: newItemModalProps) {
  function closeThisModal() {
    props.closeModal()
  }
  function createNewItem() {
    let newItemObject = {
      itemTitle: (document.querySelector('input.new-item-title-input') as HTMLInputElement).value.toString(),
      itemDate: (document.querySelector('input.new-item-date-input') as HTMLInputElement).value.toString().substr(0, 10).split('-').reverse().join('/'),
      itemDescription: (document.querySelector('textarea.new-item-description-input') as HTMLInputElement).value.toString()
    }
    if (newItemObject.itemTitle == '' || null) {
      alert('Adicione um título ao item.');
    } else if (newItemObject.itemTitle == '' || null) {
      alert('Escolha uma data para a tarefa.')
    } else {

      let isSuccess:boolean = addItemToList(props.listId, newItemObject);
      isSuccess ? console.assert(true, 'Item Criado com sucesso') : console.assert(false, 'Erro ao criar item');
      props.reloadList(props.listId);
      closeThisModal();
    }
  }
  return (
    <div className="new-item-modal-overlay">
      <div className="new-item-modal">
        <div className="new-item-modal-header">
          <h1>Nova Terefa</h1>
          <div className="new-item-options">
            <i className='bx bx-x-circle' onClick={closeThisModal}></i>
          </div>
        </div>
        <form className="new-item-modal-form">
          <input type="text" className="new-item-title-input" required />
          <input type="date" className="new-item-date-input" required />
          <textarea className="new-item-description-input"></textarea>
        </form>
        <button className="new-item-create-button" onClick={createNewItem}><i className='bx bx-check-square'></i> Criar tarefa</button>
      </div>
    </div>
  )
}
