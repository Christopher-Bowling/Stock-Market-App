import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StocksState from './context/stocks/StocksState';

ReactDOM.render(
  <StocksState>
    <App />
  </StocksState>,
  document.getElementById('root')
);
