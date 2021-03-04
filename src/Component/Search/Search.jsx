import React, { useState } from 'react';
import { connect } from 'react-redux';

import { 
  searchTextAction,
  resetState,
} from '../../action.js';
import './search.css';

const mapDispatchToProps = { 
  searchTextAction,
  resetState,
};

const Search = ({ searchTextAction, resetState }) => {
  const [searchText, setSearchText] = useState('');

  return(
    <div className="search flex justify-between">
      <input 
        className="search__input"
        placeholder="Поиск по сайту"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button
        className="search__btn"
        onClick={() => {resetState(); setSearchText("");}}
      >
        Сбросить
      </button>
      <button
        className="search__btn"
        onClick={() => {  resetState(); searchTextAction(searchText); }}
      >
        Найти
      </button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Search);