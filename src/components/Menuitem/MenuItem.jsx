import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, ingredients }) => (
  <div className="app__menu-item">
    <div className="app__menu-item_heading">
      <h4 className='app__menu-item_heading-title'>{title}</h4>
      <div className='app__menu-item_heading-line' />
      <h4 className='app__menu-item_heading-price'>{price}</h4>
    </div>
    <div className="app__menu-item_ingredients">
      <p className="p__opensans">{ingredients}</p>
    </div>
  </div>
);

export default MenuItem;
