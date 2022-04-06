import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class EditDogComponent extends Component {
  @service router;

  @action
  editDog(dog, e) {
    e.preventDefault();
    const newDog = dog;
    dog.save().then(() => {
      this.router.transitionTo('dog', dog.id);
    });
  }
}
