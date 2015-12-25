import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('signup');
  this.route('profile', function() {
    this.route('edit');
  });
});

export default Router;
