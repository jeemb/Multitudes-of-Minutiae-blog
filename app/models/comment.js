import DS from 'ember-data';
import Copyable from "ember-cli-copyable";


export default DS.Model.extend(Copyable, {
  author: DS.attr(),
  content: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  parentComment: DS.belongsTo('comment', { async: true, inverse: "replies" }),
  replies: DS.hasMany('comment', { async: true, inverse: "parentComment" })
});
