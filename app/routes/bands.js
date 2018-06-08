import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.store.findAll('band');
  },

  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    },

    createBand() {
      var route = this;
      var controller = this.get('controller');
      var band = this.store.createRecord('band', controller.getProperties('name'));

      band.save().then(function() {
        controller.set('name', '');
        route.transitionTo('bands.band.songs', band);
      });
    }
  },
});
