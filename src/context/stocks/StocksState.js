import React, { useReducer } from 'react';
import StocksContext from './stocksContext';
import StocksReducer from './stocksContext';
import { SET_LOADING } from '../types';

const StocksState = props => {
  const initialState = {
    stocks: [
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 250.6,
        changesPercentage: -3.03,
        change: -7.84,
        dayLow: 248.38,
        dayHigh: 252.92,
        yearHigh: 327.85,
        yearLow: 170.27,
        marketCap: 1096495267840.0,
        priceAvg50: 285.20316,
        priceAvg200: 269.55984,
        volume: 14938045,
        avgVolume: 48614051,
        exhange: 'NASDAQ',
        open: 252.75,
        previousClose: 258.44,
        eps: 12.595,
        pe: 19.896784,
        earningsAnnouncement: '2020-01-28T21:30:00.000+0000',
        sharesOutstanding: 4375479808,
        timestamp: 1585321880
      },
      {
        symbol: 'FB',
        name: 'Facebook, Inc.',
        price: 156.32,
        changesPercentage: -4.3,
        change: -7.02,
        dayLow: 154.75,
        dayHigh: 158.56,
        yearHigh: 224.2,
        yearLow: 137.1,
        marketCap: 445582344192.0,
        priceAvg50: 185.01086,
        priceAvg200: 194.33086,
        volume: 9153038,
        avgVolume: 20533059,
        exhange: 'NASDAQ',
        open: 158.2,
        previousClose: 163.34,
        eps: 6.43,
        pe: 24.311045,
        earningsAnnouncement: '2020-01-29T21:05:04.000+0000',
        sharesOutstanding: 2405750016,
        timestamp: 1585321880
      }
    ],
    loading: false
  };

  const [state, dispatch] = useReducer(StocksReducer, initialState);

  // Search Stocks

  // Add Stock

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return <StocksContext.Provider value={{
      stocks: state.stocks,
      loading: state.loading,
      setLoading
  }}>{props.children}</StocksContext.Provider>;
};

export default StocksState;
