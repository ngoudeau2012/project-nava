import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  // async model() {
  //   const response = await fetch('/api/dogs.json');
  //   const { data } = await response.json();
  //   console.log(data + 'test');
  //   return data;
  // }
  // @service store;

  // model() {
  //   this.store.findAll('dog').then(function (dog) {
  //     console.log(dog);
  //     return dog;
  //   });
  // }

  @service store;

  model() {
    console.log('running findALL');
    return this.store.findAll('dog');
  }
}
