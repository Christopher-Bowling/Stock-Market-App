import React from 'react';
import PropTypes from 'prop-types';

const StockItem = ({ stock: { symbol, name, price, changesPercentage } }) => {
  return (
      <>
    <li class='row'>
      <div className='col s7'>
        <h4 className='white-text'>{symbol}</h4>
        <h5 className='grey-text'>{name}</h5>
      </div>

      <div className='secondary-content'>
        <h5>{price}</h5>
        <h5 className="percentStyles">{changesPercentage}</h5>
      </div>
    </li>
    <hr size="1" className="grey darken-1"/>
    </>
  );
};

StockItem.propTypes = {
  stock: PropTypes.object.isRequired
};

export default StockItem;
