import React, { useContext, Fragment } from 'react';
import SearchResults from './SearchResults';
import StocksContext from '../../context/stocks/stocksContext';

const Search = () => {
  const stocksContext = useContext(StocksContext);

  const { showHeader, stateText, setStateText, searchStocks, showHeaderNavbar } = stocksContext;

  // const [text, setText] = useState('');

  const onChange = e => {
    setStateText(e.target.value);
    // setText(e.target.value);
    searchStocks(e.target.value);
  };

  // const onAdd = () => {
  //   if (stateText === '') {
  //     alert('Please enter something');
  //   } else {
  //     stocksContext.addStock(stateText.toUpperCase());
  //     setStateText('');
  //   }
  // };

  const onFocusHandler = () => {
    showHeader(false);
  };

  const onBlurHandler = () => {
    if(!stateText) {
      showHeader(true);
      setStateText('');
    }
  };

  const closeHandler = () => {
    setStateText('');
    showHeader(true);
  }

  //Dynamically Change Input Close Color
  const close = !showHeaderNavbar ? {color: 'rgb(255,255,255,1)'} : {color: 'transparent'};

  return (
    <Fragment>
      <div>
        <div className='col s12'>
          <nav
            style={{
              marginBottom: '0px',
              paddingBottom: '0px',
              borderRadius: '8px'
            }}
            className='grey darken-3'
          >
            <div className='nav-wrapper'>
              <i>
                <div className='input-field'>
                  <input
                    id='search'
                    type='search'
                    name='text'
                    placeholder='Type Stock Symbol to Add'
                    value={stateText}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onChange={onChange}
                    style={{backgroundColor: '#424242', color: 'white'}}
                    required
                  />
                  <label className='label-icon' htmlFor='search'>
                    <i className='material-icons white-text'>search</i>
                  </label>
                  <i className='material-icons' style={close} onClick={closeHandler}>close</i>
                </div>
              </i>
            </div>
          </nav>
        </div>
      </div>
      { stateText ?(
        <SearchResults />
      ) : null }  
      {/* <div className='row'>
        <div>
          <button
            className='blue darken-4 btn-large relative'
            onClick={onAdd}
            style={styles.btnStyles}
          >
            Add Stock
          </button>
        </div>
      </div> */}
    </Fragment>
  );
};

// const styles = {
//   btnStyles: {
//     marginRight: '15px',
//     marginTop: '0px',
//     marginBottom: '0px',
//     borderRadius: '5px',
//     width: '100%'
//   }
// };

export default Search;
