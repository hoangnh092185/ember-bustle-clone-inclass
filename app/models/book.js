import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  genre: DS.attr(),
  image: DS.attr(),
  detail: DS.attr()
});
