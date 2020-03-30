import React, { useContext } from 'react';
import { getDate } from './getDate';
import StocksContext from '../../context/stocks/stocksContext';

const Header = () => {
  const stocksContext = useContext(StocksContext);
  const { editOpen, editToggle } = stocksContext;

  const date = getDate();

  let toggleBtn;
  if (editOpen === false) {
    toggleBtn = 'Edit';
  } else {
    toggleBtn = 'Done';
  }


  return (
    <div className='row'>
      <div className='col s6'>
        <h3 className='white-text' style={styles.margin0}>
          Stock Tracker
        </h3>
        <h4 className='grey-text' style={styles.margin0}>
          {date}
        </h4>
      </div>
      <div className='col s6 right-align'>
        <a href="!#" className='blue-text pointer' onClick={editToggle}>
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
