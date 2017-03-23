import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showUpdateForm: false,
    showUpdateCommentForm(){
      this.set("showUpdateForm",true);
    },
    updateComment(comment){
      var params = {
        author: this.get("author"),
        content: this.get("content")
      };
      this.sendAction("updateComment", comment, params);
    }
  }
});
