import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyPost1(post) {
      if (confirm('Are you super sure you want to remove negativity from the world?')) {
        this.sendAction("destroyPost2", post);
      }
    }
  }
});
