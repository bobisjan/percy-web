import Ember from 'ember';

export default Ember.Component.extend({
  classes: null,

  session: Ember.inject.service(),
  classNames: ['SyncReposSection'],
  classNameBindings: ['classes'],
});
