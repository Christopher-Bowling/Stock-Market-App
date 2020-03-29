import React, { useContext } from 'react';
import StockItem from './StockItem';
import StocksContext from '../../context/stocks/stocksContext';

const Stocks = () => {
    const stocksContext = useContext(StocksContext);

    const { stocks } = stocksContext;

    return (
        <div>
            {stocks.map(stock => (
                    <StockItem key={stock.symbol} stock={stock} />
            ))}
        </div>
    )
}

export default Stocks
