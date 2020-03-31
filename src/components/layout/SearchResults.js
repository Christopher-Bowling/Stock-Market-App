import React, { useContext, Fragment } from 'react';
import StocksContext from '../../context/stocks/stocksContext';
import SearchResultItem from './SearchResultItem';

const SearchResults = () => {
  const stocksContext = useContext(StocksContext);

  const { searchResults } = stocksContext;

  let searchResultsList;
  if (searchResults) {
    searchResultsList = searchResults.map(stock => (
      <SearchResultItem key={stock.symbol} stock={stock} />
    ));
  }

  return (
    <Fragment>
      <h2 className='white-text' style={{marginLeft: '15px'}}>Symbols</h2>
      <hr size='1' className='grey darken-1' />
      <div style={{marginLeft: '20px'}}>
        <div className='collection' style={styles}>
          {searchResultsList}
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  border: 'none'
};

export default SearchResults;
