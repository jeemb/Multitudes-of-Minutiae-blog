import Ember from 'ember';

export default Ember.Component.extend({ // see new-post for similar comments
  actions: {
    editingPost:false,
    showUpdatePostForm(){
      this.set("editingPost",true);
    },
    updatePost(post){
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        image: this.get("image"),
        text: this.get("text"),
        topic: this.get("topic")
      };
      this.set("editingPost",false);
      this.sendAction('updatePost', post, params);

    }
  }
});
