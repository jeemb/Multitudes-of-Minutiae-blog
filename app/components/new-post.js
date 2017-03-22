import Ember from 'ember';

export default Ember.Component.extend({
  // addNewPost is set to false (default), so that the form isn't initially showing.
  actions: {
    addNewPost: false,
    showAddPostForm() { //when called will set addNewPost to "true".
      this.set("addNewPost", true);
    },
    saveNewPost() { // collects new attributes to be sent up a level to route handler, which will use these values to save a new object to the database
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        image: this.get("image"),
        text: this.get("text"),
        topic: this.get("topic")
      };
      this.set("addNewPost",false); // hides to new post form
      this.sendAction("saveNewPost",params); //sends action with params argument up to route handler (index)
    }
  }
});
