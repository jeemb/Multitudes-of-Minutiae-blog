import Ember from 'ember';

export default Ember.Route.extend({ //query database for all "post" objects & returns them as a variable called "model" on this route.
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll("post"),
      comments: this.store.findAll("comment")
    });
  },
  actions: { // action to create a new post ember object and save to database. Params have been sent up from lower-level component (new-post).
    saveNewPost(params) {
      var newPost = this.store.createRecord("post", params);
      newPost.save();
      this.transitionTo("index");
    },
  }
});
