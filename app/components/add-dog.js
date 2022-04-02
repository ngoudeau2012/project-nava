import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { dogs } from '../Data/dogs-data';

export default class AddDogComponent extends Component {
    
    
    @tracked dogs;

  @action
  createDog(ojbect){
    const newDog = {
      name: 'Ava',
      breed: 'chichi',
      owner: 'Nick',
      size: 'SM',
      description: 'a good girl',
    };
    
    dogs.push(newDog);
    console.log(dogs)
    return dogs
  }
}
