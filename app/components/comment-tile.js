import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment, post){
      this.sendAction("deleteComment", comment, post);
    },
    updateComment(comment, post){
      this.sendAction("updateComment",comment, post);
    }
  }
});
