import Ember from 'ember';

export default Ember.Route.extend({ // queries the database for a record called "post" that has a matching id to URL route and is available in this route as "model".
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: { // access model with data passed up from components to delete record.
    destroyPost3(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    updatePost(post, params){ // overwrites object keys with non-undefined parameters taken from update form and saves to database.
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      console.log(post);
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    }
  }
});
