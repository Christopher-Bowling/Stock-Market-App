import React, { useContext } from 'react';
import StockItem from './StockItem';
import StocksContext from '../../context/stocks/stocksContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../../App.css';

const Stocks = () => {
  const stocksContext = useContext(StocksContext);

  const { stocks, showHeaderNavbar } = stocksContext;

  let styles = showHeaderNavbar ? {} : { opacity: '.35' };

  return (
    <div style={styles}>
      <TransitionGroup>
        {stocks.map(stock => (
          <CSSTransition key={stock.symbol} timeout={5000} classNames="item">
            <StockItem stock={stock} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Stocks;
