import React, { useState } from 'react';
import './newList.scss';




export default function NewList() {
    const colorList: any = ["#FFBE0B",
        "#FF006E",
        "#8338EC",
        "#3A86FF",
        "#1Db954"];


    return (
        <div className="new-list">

            <div className="modal" id="modal">
                <div className="modal-header">
                    <h1>Nova Lista</h1>
                </div>
                <div className="modal-body">
                    <div className="section-nome-da-lista">
                        <input type="text" className="nome-da-lista" placeholder="Nome da lista" />
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
                        <button className="modal-closer">
                            <i className='bx bx-x-circle'></i> Cancelar
                        </button>
                        <button className="list-creator">
                            <i className='bx bx-plus-circle'></i> Criar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}