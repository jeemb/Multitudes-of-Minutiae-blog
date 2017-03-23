import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewComment: false,
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment(postPage) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        parent: this.get('parent')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params, postPage);
    }
  }
});
