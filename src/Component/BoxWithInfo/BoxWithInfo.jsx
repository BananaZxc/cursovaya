import React from 'react';
import './box-info.css';

const BoxWithInfo = ({ children, title, className }) => {
  return (
    <div className={`box-with-info ${className}`}>
      <h2 className="box-with-info__title">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default BoxWithInfo;
