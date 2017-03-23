import Ember from 'ember';

export default Ember.Route.extend({ // queries the database for a record called "post" that has a matching id to URL route and is available in this route as "model".
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: { // access model with data passed up from components to delete record.
    destroyPost3(post) {
      var comment_deletions = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return post.destroyRecord();
      });
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
    saveComment(params, postPage) {
      var post;
      var parentComment;
      var pageId=postPage.id;
      var parent = params.parent;

      if (parent.get('constructor.modelName') === 'post') {
        post = parent;
        params.parentComment = null;
      } else if(parent.get('constructor.modelName') === 'comment' ){
        parentComment = parent;
        params.post = null;
      }
      var newComment = this.store.createRecord('comment', params);
      console.log(params.post);
      console.log(params.parentComment);

      if(parent.get('constructor.modelName') === 'post'){
        post.get('comments').addObject(newComment);
        newComment.save().then(function() {
          console.log("replying to a post");
          return post.save();
        });
      } else if(parent.get('constructor.modelName') === 'comment' ){
        parentComment.get("replies").addObject(newComment);
        newComment.save().then(function() {
          console.log("replying to a comment");
          return parentComment.save();
        });
      }
      this.transitionTo('post', pageId);
    },
    deleteComment(comment, post){
      // var post = JSON.parse(JSON.stringify(comment.post));
      comment.destroyRecord();
      this.transitionTo('post', post);
    },
    updateComment(comment, params, post){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo("post", post);
    }
  }
});
