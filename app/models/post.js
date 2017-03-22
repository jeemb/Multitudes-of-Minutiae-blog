import DS from 'ember-data';

export default DS.Model.extend({//sets attribues for ember "post" object
  author: DS.attr(),
  image: DS.attr(),
  text: DS.attr(),
  title: DS.attr(),
  topic: DS.attr()
});
