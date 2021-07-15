import React from 'react';
import './sidebar.scss';
import logo from '../../assets/icons/listfy-logo-white.png';
import { Link } from 'react-router-dom';


function close() {

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
    menuBtnChange();
}

function menuBtnChange() {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-details">
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                <i className='bx bx-menu' id="btn" onClick={close}></i>
            </div>
            <ul className="nav-list">
                <li >
                    <i className='bx bx-search' onClick={close}></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Buscar</span>
                </li>
                <li>
                    <Link className="sizePad" to='/dashboard'>
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </Link>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <Link className="sizePad" to='/user'>
                        <i className='bx bx-user' ></i>
                        <span className="links_name">Usuário</span>
                    </Link>
                    <span className="tooltip">Usuário</span>
                </li>
                <li>
                    <Link className="sizePad" to='/notifications'>
                        <i className='bx bx-bell' ></i>
                        <span className="links_name">Notificações</span>
                    </Link>
                    <span className="tooltip">Notificações</span>
                </li>
                <li>
                    <Link className="sizePad" to='/data'>
                        <i className='bx bx-folder' ></i>
                        <span className="links_name">Dados</span>
                    </Link>
                    <span className="tooltip">Dados</span>
                </li>
                <li>
                    <Link className="sizePad" to='/calendar'>
                        <i className='bx bx-calendar'></i>
                        <span className="links_name">Calendário</span>
                    </Link>
                    <span className="tooltip">Calendário</span>
                </li>
                <li>
                    <Link className="sizePad" to='/settings'>
                        <i className='bx bx-cog' ></i>
                        <span className="links_name">Configurações</span>
                    </Link>
                    <span className="tooltip">Configurações</span>
                </li>
                <li className="profile">
                    <div className="profile-details">
                        <div className="name_job">
                            <div className="name">Charlie</div>
                            <div className="job">Brown</div>
                        </div>
                    </div>
                    <i className='bx bx-log-out' id="log_out" ></i>
                </li>
            </ul>
        </div>

    );
}