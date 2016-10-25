import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
     this.set('isImageShowing', false);
   },
   update(book, params) {
     this.sendAction('update', book, params);
   },
   delete(book) {
      if (confirm('Are you sure you want to delete this book?')) {
        this.sendAction('destroyBook', book);
      }
    }
  }
});
