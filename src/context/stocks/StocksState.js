import React, { useReducer, useEffect, useRef } from 'react';
import axios from 'axios';
import StocksContext from './stocksContext';
import StocksReducer from './stockReducer';
import {
  SET_LOADING,
  ADD_STOCK,
  CLEAR_RESULTS,
  EDIT_TOGGLE,
  DELETE_STOCK,
  CHANGE_TOGGLE,
  SHOW_HEADER,
  SET_TEXT,
  SEARCH_STOCKS,
  UPDATE_STOCKS,
} from '../types';

const StocksState = (props) => {
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
        timestamp: 1585321880,
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
        timestamp: 1585321880,
      },
    ],
    searchResults: null,
    editOpen: false,
    changeBool: false,
    showHeaderNavbar: true,
    stateText: '',
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(StocksReducer, initialState);

  const stateRef = useRef(state.stocks)
  stateRef.current = state.stocks;

  useEffect(() => {
    setInterval(() => {
      updateStocks(stateRef.current)
    }, 30000);
  }, []);

  // Search Stocks
  const searchStocks = async (sym) => {
    // await data from API
    const res = await axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=${sym}&exchange=NASDAQ`
    );

    const res2 = await axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=${sym}&exchange=NYSE`
    );

    // after data has returned in variables, then filter results
    const filteredResults = [...res.data, ...res2.data].filter((stock) =>
      stock.symbol.includes(sym.toUpperCase())
    );

    // dispatch to have filtered results added to state to show the user
    dispatch({
      type: SEARCH_STOCKS,
      payload: filteredResults,
    });
  };

  // Clear Results
  const clearResults = () => {
    dispatch({
      type: CLEAR_RESULTS,
    });
  };

  // Add Stock
  const addStock = async (sym) => {
    let inArray = false;
    // Searchs if Company is already in the stocks array
    state.stocks.forEach(stock => {
      if(stock.symbol === sym) {
        inArray = true;
      }
    })
    if(!inArray) {
      const res = await axios.get(
        `https://financialmodelingprep.com/api/v3/quote/${sym}`
      );
  
      dispatch({
        type: ADD_STOCK,
        payload: res.data[0],
      });
    }
    showHeader(true);
  };

  // Delete Stock
  const deleteStock = (sym) => {
    dispatch({
      type: DELETE_STOCK,
      payload: sym,
    });
  };

  // Update Stocks
  const updateStocks = async (stocks) => {

    const res = await stocks.map(async (stock) => {
      let response = await axios.get(
        `https://financialmodelingprep.com/api/v3/quote/${stock.symbol}`
      );
      // console.log(response.data[0]);
      return response;
    });

    Promise.all(res).then((response) => {
      const stockPayload = response.map((stock) => {
        return stock.data[0];
      });
      // console.log(stockPayload);
      dispatch({
        type: UPDATE_STOCKS,
        payload: stockPayload,
      });
    });
  };

  // Set Text
  const setStateText = (text) => {
    dispatch({
      type: SET_TEXT,
      payload: text,
    });
  };

  // Edit Toggle
  const editToggle = () => {
    dispatch({
      type: EDIT_TOGGLE,
    });
  };

  // Changes/ChangesPercentage Toggle Handler
  const changeBoolHandler = () => {
    dispatch({
      type: CHANGE_TOGGLE,
    });
  };

  // Toggle Focus
  const showHeader = (bool) => {
    if (bool) {
      clearResults();
    }
    dispatch({
      type: SHOW_HEADER,
      payload: bool,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <StocksContext.Provider
      value={{
        stocks: state.stocks,
        searchResults: state.searchResults,
        editOpen: state.editOpen,
        changeBool: state.changeBool,
        showHeaderNavbar: state.showHeaderNavbar,
        stateText: state.stateText,
        loading: state.loading,
        error: state.error,
        setLoading,
        addStock,
        clearResults,
        editToggle,
        deleteStock,
        changeBoolHandler,
        showHeader,
        setStateText,
        searchStocks,
        updateStocks,
      }}
    >
      {props.children}
    </StocksContext.Provider>
  );
};

export default StocksState;
