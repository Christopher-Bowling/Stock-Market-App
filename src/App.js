import React, {Fragment, useContext} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/layout/Search';
import Stocks from './components/stocks/Stocks';
import { Route, BrowserRouter } from 'react-router-dom';
import StocksContext from './context/stocks/stocksContext';

const App = () => {
  const stocksContext = useContext(StocksContext);

  const { showHeaderNavbar, stateText } = stocksContext;

  const header = () => {
    return <Fragment>
      {showHeaderNavbar ? <Header /> : null}
    </Fragment>
  };
  const stocks = () => {
    return <Fragment>
      {!stateText ? <Stocks /> : null}
    </Fragment>
  }
    


  return (
    <div>
        <BrowserRouter>
          <Route path='/' component={header} />
          <Search />
          <Route path='/' component={stocks} />
        </BrowserRouter>
    </div>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stocks: [],
//       isLoaded: false
//     };
//   }

//   componentDidMount() {
//     fetch(
//       'https://financialmodelingprep.com/api/v3/quote/AAPL',
//       {
//         method: 'GET'
//       }
//     )
//       .then(res => res.json())
//       .then(json => {
//         console.log(json);
//         this.setState({
//           isLoaded: true,
//           stocks: json
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     var { isLoaded, stocks } = this.state;

//     console.log(this.stocks)

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className='App'>
//           <ul>
//             <li>{this.state.stocks[0].symbol}</li>
//             <li>{this.state.stocks[0].name}</li>
//             <li>{this.state.stocks[0].price}</li>
//             <li>{this.state.stocks[0].marketCap}</li>
//             <li>{this.state.stocks[0].changesPercentage}</li>
//             {console.log(this.state.stocks)}
//           </ul>
//         </div>
//       );
//     }
//   }
// }

export default App;
