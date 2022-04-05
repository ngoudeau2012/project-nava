import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class EditRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('dog', params.id);
  }
}
