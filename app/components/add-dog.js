import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddDogComponent extends Component {
  @service store;

  @action
  createDog(e) {
    e.preventDefault();
    console.log(this);
    const newDog = {
      name: this.name,
      breed: this.breed,
      owner: this.owner,
      size: this.size,
      description: this.description,
    };
    return this.store.createRecord('dog', newDog).save();
  }
}
