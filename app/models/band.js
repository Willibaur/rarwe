import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  name: '',

  slug: computed('name', function() {
    return this.get('name').dasherize();
  })
});
