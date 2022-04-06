import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class DeleteBtnComponent extends Component {
  @service router;

  @action
  deleteDog(dog) {
    dog.destroyRecord();
    if(this.router.currentRoute.name !== 'index'){
      this.router.transitionTo('index');
    }
  }
}
