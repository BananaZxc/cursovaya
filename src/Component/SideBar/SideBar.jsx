import React from 'react';
import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";

import './side-bar.css';

const SideBar = () => {
  return (
    <div className="side-bar ">
      <menu className="side-bar-menu flex flex-column justify-around">
        <Link className="side-bar-menu__link" to="/">Главная</Link>
        <Link className="side-bar-menu__link" to="/info">Информация</Link>
      </menu>
    </div>
  )
}

export default SideBar;