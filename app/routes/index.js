import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  actions: {
    update(book, params) {

      book.save();
      this.transitionTo('index');
    },
    destroyBook(book) {
      book.destroyRecord();
      this.transitionTo('index');
    }
  }
});
