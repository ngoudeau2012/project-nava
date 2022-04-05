import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexRoute extends Route {
  @service store;

  model() {
    console.log('test');
    const dogList = this.store.findAll('dog');
    return dogList;
  }
}
