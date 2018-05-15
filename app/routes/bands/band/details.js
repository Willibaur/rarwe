import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition(transition) {
      var controller = this.get('controller');
      var leave;

      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");

        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    },
  }
});
