import React, { useState } from 'react';

const Search = () => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <nav
          style={{ marginBottom: '30px', borderRadius: '8px' }}
          className='grey darken-3'
        >
          <div className='nav-wrapper'>
            <i>
              <div className='input-field'>
                <input
                  id='search'
                  type='search'
                  name='text'
                  placeholder='Search'
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
  );
};

export default Search;
