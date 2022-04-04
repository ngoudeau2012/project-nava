import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { dogs } from '../Data/dogs-data';
import { service } from '@ember/service';

export default class AddDogComponent extends Component {
  // @tracked dogs;
  @service store;

  @action
  createDog(ojbect) {
    const newDog = {
      name: 'Ava',
      breed: 'chichi',
      owner: 'Nick',
      size: 'SM',
      description: 'a good girl',
    };

    return this.store.createRecord('dog', newDog).save();
    // return this.store.createRecord('dog', newDog).save().then((res) => {
    //     console.log(res);
    //   });

    // dogs.push(newDog);
    // console.log(dogs);
    // return dogs;
  }
}
