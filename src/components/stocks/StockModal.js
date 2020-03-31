import React from 'react';

const StockModal = ({ stock, changesBoxColor }) => {
  const {
    symbol,
    name,
    price,
    changesPercentage,
    dayLow,
    dayHigh,
    yearHigh,
    yearLow,
    marketCap,
    exhange,
    open,
    eps,
    pe
  } = stock;

  const tItemName = 'grey-text col s6';
  const tItemValue = 'white-text col s6';

  return (
    <div
      id={`${symbol}`}
      className='modal grey darken-4'
      style={styles.modalStyles}
    >
      <div className='modal-content'>
        <div className='row' style={{ marginBottom: '0px', display: 'flex', justifyContent: 'space-between' }}>
          <div className="col s11" style={{display: 'flex'}}>
            <div className='white-text center-align' style={{marginRight: '20px'}}>
                <h3>{symbol}</h3>
              </div>
              <div className='grey-text center-align'>
                <h5 style={styles.marginTopAuto}>{name}</h5>
              </div>
          </div>
          <div className="col s1">
            <a
              href='!#'
              className='modal-action modal-close waves-effect right grey-text'
            >
              <i className='material-icons'>close</i>
            </a>
          </div>
      
        </div>
        <div className='row' style={{ margin: '0px' }}>
          <h5 className='col white-text'>{price}</h5>
          <div className='col s3 grey-text'>
            <h5 className={`${changesBoxColor}-text`}>{changesPercentage}%</h5>
          </div>
        </div>
        <hr size='1' className='grey darken-1' />
        <table className='responsive-table'>
          <tbody>
            <tr>
              <td className='tableBox'>
                <h6 className={tItemName}>Open</h6>
                <h6 className={tItemValue}>{open}</h6>
              </td>
              <td className='tableBox'>
                <h6 className={tItemName}>High</h6>
                <h6 className={tItemValue}>{dayHigh}</h6>
              </td>
              <td className='tableBox'>
                <h6 className={tItemName}>Low</h6>
                <h6 className={tItemValue}>{dayLow}</h6>
              </td>
            </tr>
            <tr>
              <td className='tableBox'>
                <h6 className={tItemName}>EPS</h6>
                <h6 className={tItemValue}>{eps}</h6>
              </td>
              <td className='tableBox'>
                <h6 className={tItemName}>P/E</h6>
                <h6 className={tItemValue}>{pe}</h6>
              </td>
              <td className='tableBox'>
                <h6 className={tItemName}>Mkt Cap</h6>
                <h6 className={tItemValue}>{marketCap}</h6>
              </td>
            </tr>
            <tr>
              <td className='tableBox'>
                <h6 className={tItemName}>52W H</h6>
                <h6 className={tItemValue}>{yearHigh}</h6>
              </td>
              <td className='tableBox'>
                <h6 className={tItemName}>52W L</h6>
                <h6 className={tItemValue}>{yearLow}</h6>
              </td>
              <td className='tableBox'>
                <h6 className={tItemName}>Exchange</h6>
                <h6 className={tItemValue}>{exhange}</h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  modalStyles: {
    width: '100%',
    height: '100%'
  },
  marginTopAuto: {
    marginTop: '15px',
    marginLeft: '0px'
  }
};

export default StockModal;
