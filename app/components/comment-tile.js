import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment, post){
      this.sendAction("deleteComment", comment, post);
    },
    saveComment(params, postPage) {
      this.sendAction("saveComment", params, postPage);
    }
  }
});
