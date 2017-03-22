import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    destroyPost3(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
