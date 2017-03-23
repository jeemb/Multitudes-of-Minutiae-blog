import DS from 'ember-data';
import Copyable from "ember-cli-copyable";

export default DS.Model.extend(Copyable, {//sets attribues for ember "post" object
  author: DS.attr(),
  image: DS.attr(),
  text: DS.attr(),
  title: DS.attr(),
  topic: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
