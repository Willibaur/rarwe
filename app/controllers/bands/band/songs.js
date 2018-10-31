import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import Controller from '@ember/controller';

export default Controller.extend({
  songCreationStarted: false,

  canCreateSong: computed('songCreationStarted', 'model.songs.[]', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),

  title: '',

  isAddButtonDisabled: computed('title', function() {
    return isEmpty(this.get('title'));
  }),

  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },

    updateRating: function(params) {
      var song = params.item;
      var rating = params.rating;

      if (song.get('rating') === rating) {
        rating = 0
      }

      song.set('rating', rating);

      return song.save();
    },
  }
});
