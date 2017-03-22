import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewPost: false,
    showAddPostForm() {
      this.set("addNewPost", true);
    },
    saveNewPost() {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        image: this.get("image"),
        text: this.get("text"),
        topic: this.get("topic")
      };
      this.sendAction("saveNewPost",params);
    }
  }
});
