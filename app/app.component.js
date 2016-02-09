import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/angular2';

(function (app) {
  app.AppComponent =
  Component({
    selector: 'data-table',
    templateUrl: '../data-table.html',
  })
  .Class({
    constructor: function () {
      this.cells = [
        new Market('Wall Street', 16330.6, 16334.4),
        new Market('FTSE 100', 5893.6, 5898.6),
        new Market('Germany 30', 9525.1, 9532.1),
        new Market('EUR/USD', 11104.5, 11106.0),
        new Market('GBP/USD', 14597.0, 14599.0),
        new Market('US Light Crude', 3266.5, 3270.5),
        new Market('Rolls-Royce Holdings PLC', 513.0, 513.4),
      ];
    },
  });
})(window.app || (window.app = {}));
