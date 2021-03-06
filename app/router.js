import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('articles', { path: '/' }, function() {});
  this.resource('articles', function() {
    this.resource('article', { path: ':article_id' }, function() {
      this.resource('tweets');
    });
  });
});
