import Route from '@ember/routing/route';
import { dogs } from '../Data/dogs-data';

export default class DogRoute extends Route {
  model(params) {
    const { dog_id } = params;
    console.log(dogs);
    const dog = dogs[dog_id];
    console.log(dog);
    return dog;
  }
}
