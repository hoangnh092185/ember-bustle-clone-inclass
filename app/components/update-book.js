import Ember from 'ember';

export default Ember.Component.extend({
  updateBookForm: false,
  actions: {
    updateBookForm() {
      this.set('updateBookForm', true);
    },
    update(book) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        genre: this.get('genre'),
        image: this.get('image'),
        detail: this.get('detail'),
      };
      this.set('updateBookForm', false);
      this.sendAction('update', book, params);
    }
  }
});
