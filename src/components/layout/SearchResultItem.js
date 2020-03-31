import React, { useContext } from 'react';
import StocksContext from '../../context/stocks/stocksContext';

const SearchResultItem = ({ stock }) => {
  const { name, symbol, exchangeShortName } = stock;

  const stocksContext = useContext(StocksContext);
  const { addStock, setStateText } = stocksContext;

  const addStockHandler = () => {
    addStock(symbol);
    setStateText('');
  };

  return (
    <a
      href='#!'
      onClick={addStockHandler}
      className='collection-item black pointer'
      style={styles.collectionItem}
    >
      <h5 className='white-text'>
        {symbol}
        <span className='grey-text'> {exchangeShortName}</span>
      </h5>

      <h6 className='grey-text'>{name}</h6>
    </a>
  );
};

const styles = {
  collectionItem: {
    borderLeft: 'none'
  }
};

export default SearchResultItem;
