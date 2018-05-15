import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default Route.extend({
  model(params) {
    var bands = this.modelFor('bands');

    return bands.findBy('slug', params.slug);
  },

  afterModel(band) {
    var description = band.get('description');

    if (isEmpty(description)) {
      this.transitionTo('bands.band.songs');
    } else {
      this.transitionTo('bands.band.details')
    }
  },
});
