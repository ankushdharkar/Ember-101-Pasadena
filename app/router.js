import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
    this.route('my-info');
  });


  this.route('stocks');


  this.route('stocks', { path: '/stocks/:stockName' });




});

export default Router;
