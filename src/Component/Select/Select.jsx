import React, { useState } from 'react';

import './select.css';
import arrowDonw from '../../static/caret-down.svg';
import arrowUp from '../../static/sort-up.svg';

const Select = ({ brand, model, url }) => {
  const [isOpen, setIsOpne] = useState(false);
  // console.log(id)
  return(
    <div  className="select">
      <div onClick={() => setIsOpne(!isOpen)} className="select-title flex  justify-around items-center">
        <span className="select-title__text">
          {brand}
        </span>
        <img src={`${isOpen ? arrowUp : arrowDonw}`} alt="arrow"/>
      </div>
      {isOpen && (<div className="select-drop-down flex flex-column items-center">
        {model.map((item, index) => (
          <div key={index} className="select-drop-down-wrap">
            <a className="select-drop-down__item" href={`${url}`}>{item}</a>
          </div>
        ))}
      </div>)}
    </div>
  )
}

export default Select;