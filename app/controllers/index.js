import Controller from '@ember/controller';
import { action } from '@ember/object';

// export default Controller.extend({
//     actions:{
//         deleteDog(){

//         }
//     }
// });
export default class IndexController extends Controller {
  @action
  deleteDog(dog) {
    console.log('test');
  }

  @action
  handleClick(value) {
    console.log(value); // 123
  }
}
