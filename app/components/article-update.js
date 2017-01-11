import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        copy: this.get('copy'),
        image: this.get('image')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this listing?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
