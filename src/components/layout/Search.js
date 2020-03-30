import React, { useState, useContext, Fragment } from 'react';
import StocksContext from '../../context/stocks/stocksContext';

const Search = () => {
  const stocksContext = useContext(StocksContext);

  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onAdd = () => {
    if (text === '') {
      alert('Please enter something');
    } else {
      stocksContext.addStock(text.toUpperCase());
      setText('');
    }
  };

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
                    value={text}
                    onChange={onChange}
                    required
                  />
                  <label className='label-icon' htmlFor='search'>
                    <i className='material-icons'>search</i>
                  </label>
                  <i className='material-icons'>close</i>
                </div>
              </i>
            </div>
          </nav>
        </div>
      </div>
      <div className='row'>
        <div>
          <button
            className='blue darken-4 btn-large'
            onClick={onAdd}
            style={styles.btnStyles}
          >
            Add Stock
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  btnStyles: {
    marginRight: '15px',
    marginTop: '0px',
    marginBottom: '0px',
    borderRadius: '5px',
    width: '100%'
  }
};

export default Search;
