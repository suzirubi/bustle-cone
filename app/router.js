import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('article', {path: '/article/:article_id'});
  this.route('administration');
  this.route('administration-article', {path: '/administration-article/:article_id'});
});

export default Router;
