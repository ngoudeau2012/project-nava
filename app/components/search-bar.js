import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SearchBarComponent extends Component {
  @service store;

  // let post = store.peekRecord('dog', id)

  // @action
  // return this.store.deleteRecord('dog', newDog).save();
}
