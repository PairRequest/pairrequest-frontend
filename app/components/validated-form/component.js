import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  noErrors: computed.empty('errors')
});
