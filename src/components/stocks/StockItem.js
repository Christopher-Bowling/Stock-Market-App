import React, { Fragment, useContext, useEffect } from 'react';
import StockModal from './StockModal';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import StocksContext from '../../context/stocks/stocksContext';

const StockItem = ({ stock }) => {
  const { symbol, name, price, change, changesPercentage } = stock;

  const stocksContext = useContext(StocksContext);

  const {
    editOpen,
    deleteStock,
    changeBool,
    changeBoolHandler
  } = stocksContext;

  useEffect(() => {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);
  }, []);

  let changesBoxColor;
  // Dynamically change color
  if (changesPercentage > 0) {
    changesBoxColor = 'green';
  } else if (changesPercentage < 0) {
    changesBoxColor = 'red';
  } else {
    changesBoxColor = 'grey';
  }

  const changeToggle = () => {
    changeBoolHandler();
  };

  return (
    <Fragment>
      <li className='row'>
        <a href={`#${symbol}`} className='modal-trigger pointer'>
          {editOpen === true ? (
            <div className='col s1'>
              <button
                className='btn-floating red'
                onClick={() => deleteStock(symbol)}
                style={{ marginTop: '35px' }}
              >
                <i className='material-icons'>remove</i>
              </button>
            </div>
          ) : null}

          <div className='col s7'>
            <h4 className='white-text'>{symbol}</h4>
            <h5 className='grey-text'>{name}</h5>
          </div>
        </a>
        <div className='secondary-content' style={{ marginRight: '20px' }}>
          <h5 className='white-text center-align'>{price}</h5>
          <h5
            onClick={changeToggle}
            className={`percentStyles right-align ${changesBoxColor}`}
          >
            {changeBool ? (
              <Fragment>{changesPercentage}%</Fragment>
            ) : (
              <Fragment>{change}</Fragment>
            )}
          </h5>
        </div>
        <StockModal stock={stock} changesBoxColor={changesBoxColor} />
      </li>
      <hr size='1' className='grey darken-1' />
    </Fragment>
  );
};

StockItem.propTypes = {
  stock: PropTypes.object.isRequired
};

export default StockItem;
