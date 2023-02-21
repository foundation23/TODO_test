import React from 'react';
import './nav-bar.css'
import {Link} from "react-router-dom";
import {GROUP_ROUTE, LIST_ROUTE} from "../utils/consts";

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="panel">Панель управления</div>

            <div className="group-btn">
                    <Link className="btn" to={LIST_ROUTE}>Список задач</Link>
                    <Link className="btn" to={GROUP_ROUTE}>Группы задач</Link>
            </div>
        </nav>
    );
};

export default Navbar;