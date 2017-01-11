import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    saveArticle1() {
      var params = {
        title: this.get('title') ? this.get('title') : '',
        author: this.get('author') ? this.get('author') : '',
        copy: this.get('copy') ? this.get('copy') : '',
        image: this.get('image') ? this.get('image') : '',
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});
