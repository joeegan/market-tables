import 'zone.js';
import 'reflect-metadata';
import bootstrap from 'angular2/bootstrap';

(function (app) {
  document.addEventListener('DOMContentLoaded', function () {
    bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
