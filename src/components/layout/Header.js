import React, { useContext } from 'react';
import { getDate } from './getDate';
import StocksContext from '../../context/stocks/stocksContext';

const Header = () => {
  const stocksContext = useContext(StocksContext);
  const { editOpen, editToggle, updateStocks } = stocksContext;

  const date = getDate();

  let toggleBtn;
  if (editOpen === false) {
    toggleBtn = 'Edit';
  } else {
    toggleBtn = 'Done';
  }

  const updateHandler = () => {
    updateStocks();
  }


  return (
    <div className='row'>
      <div className='col s8'>
        <h3 className='white-text' style={styles.margin0} onClick={updateHandler}>
          Stock Tracker
        </h3>
        <h4 className='grey-text' style={styles.margin0}>
          {date}
        </h4>
      </div>
      <div className='col s4'>
        <a href="!#" className='blue-text pointer' onClick={editToggle} style={{display: 'block', width: '50px', marginLeft: 'auto'}}>
          <h5>{toggleBtn}</h5>
        </a>
      </div>
    </div>
  );
};

const styles = {
  margin0: {
    margin: 0
  }
};

export default Header;
