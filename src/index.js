import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Market from 'market-faker';
require('es6-promise').polyfill();
import css from './styles.css';

window.data = [
   new Market('Wall Street', 16330.6, 16334.4),
   new Market('FTSE 100', 5893.6, 5898.6),
   new Market('Germany 30', 9525.1, 9532.1),
   new Market('EUR/USD', 11104.5, 11106.0),
   new Market('GBP/USD', 14597.0, 14599.0),
   new Market('US Light Crude', 3266.5, 3270.5),
   new Market('Rolls-Royce Holdings PLC', 513.0, 513.4),
 ];

(function animloop(){
  requestAnimationFrame(animloop);
  ReactDOM.render(<App data={data} />, document.getElementById('root'));
})();
