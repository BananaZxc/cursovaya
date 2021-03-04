import React from 'react';

import BoxWithInfo from '../../BoxWithInfo/BoxWithInfo.jsx';
import './main-page.css';

const MainPage = () => {
  return (
    <>
      <BoxWithInfo
        title="Контакты"
        className="contacts"
      >
        <ul className="contacts-list">
          <li className="contacts-list__item">
            Юридический адрес: 143962, Москвоская обл. г. Реутов,  Юбилейный проспект, д. 58.
          </li>
          <li className="contacts-list__item">
            Почта: ebalRot@gmail.com
          </li>
          <li className="contacts-list__item">
            График работы: пн-пт с 11:00 до 21:00. 
          </li>
          <li className="contacts-list__item">
            Телефоны: 8 (800) 555 35 35
          </li>
        </ul>
      </BoxWithInfo>
      <BoxWithInfo
        title="Обратная связь"
        className="feedback flex flex-column items-start"
      >
        <input className="feedback__name input" placeholder="Имя Фамилия"/>
        <input className="feedback__email input" placeholder="email"/>
        <textarea className="feedback__comments" placeholder="Комментарий"/>
        <button
          className="feedback__btn"
        >
          Отправить
        </button>
      </BoxWithInfo>
    </>
  )
}

export default MainPage;