import React from 'react';
import { connect } from 'react-redux';

import Select from '../Select/Select.jsx';
import './header.css';

const mapStateToProps = (state) => ({
  showMachineBrand: state.showMachineBrand,
});

const Header = ({ showMachineBrand }) => {
  return (
    <header className="header flex justify-around items-center">
      {showMachineBrand.map(elem => (
        <Select key={elem.id} brand={elem.brand} model={elem.model} url={elem.url}/>
      ))}
    </header>
  )
};

export default connect(mapStateToProps, null)(Header);
