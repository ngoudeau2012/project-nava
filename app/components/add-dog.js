import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddDogComponent extends Component {
  @service store;

  @action
  createDog(e) {
    e.preventDefault();
    const newDog = {
      name: this.name,
      breed: this.breed,
      owner: this.owner,
      size: this.size,
      description: this.description,
    };

    if(!newDog.name){
      alert("Please add a name for the dog before hitting save");
      return
    }
    return this.store.createRecord('dog', newDog).save().then(()=>{
      alert("Nice! You've got a new friend :)")
    });
  }
}
