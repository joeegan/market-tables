import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import { Market } from 'market-faker';
import css from './styles.css';

const data = [
   new Market('Wall Street', 16330.6),
   new Market('FTSE 100', 5893.6),
   new Market('Germany 30', 9525.1),
   new Market('EUR/USD', 11104.5),
   new Market('GBP/USD', 14597.0),
   new Market('US Light Crude', 3266.5),
   new Market('Rolls-Royce Holdings PLC', 513.0),
 ];

(function animloop() {
  requestAnimationFrame(animloop);
  ReactDOM.render(<Table data={data} />, document.getElementById('root'));
})();
