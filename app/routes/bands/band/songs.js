import Route from '@ember/routing/route';
import Song from '../../../models/song'

export default Route.extend({
  resetController(controller) {
    controller.set('songCreationStarted', false);
  },

  actions: {
    createSong: function () {
      var controller = this.get('controller');
      var band = this.modelFor('bands.band');
      var title = controller.get('title');
      var song = Song.create({ title: title, band: band });

      band.get('songs').pushObject(song);
      this.get('controller').set('title', '');
    },
  },
});
