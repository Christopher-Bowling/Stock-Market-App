import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import StocksContext from '../../context/stocks/stocksContext';

const StockItem = ({ stock: { symbol, name, price, changesPercentage } }) => {
  const stocksContext = useContext(StocksContext);

  const { editOpen, deleteStock } = stocksContext;

  let changesBoxColor;
  // Dynamically change color
  if (changesPercentage > 0) {
    changesBoxColor = 'green';
  } else if (changesPercentage < 0) {
    changesBoxColor = 'red';
  } else {
    changesBoxColor = 'grey';
  }

  return (
    <Fragment>
      <li className='row'>
        {editOpen === true ? (
          <div className='col s1'>
            <a className='btn-floating red' onClick={() => deleteStock(symbol)} style={{ marginTop: '35px' }}>
              <i class='material-icons'>remove</i>
            </a>
          </div>
        ) : null}
        <div className='col s7'>
          <h4 className='white-text'>{symbol}</h4>
          <h5 className='grey-text'>{name}</h5>
        </div>

        <div className='secondary-content' style={{ marginRight: '20px' }}>
          <h5 className='white-text center-align'>{price}</h5>
          <h5 className={`percentStyles right-align ${changesBoxColor}`}>
            {changesPercentage}
          </h5>
        </div>
      </li>
      <hr size='1' className='grey darken-1' />
    </Fragment>
  );
};

StockItem.propTypes = {
  stock: PropTypes.object.isRequired
};

export default StockItem;
