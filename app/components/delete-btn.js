import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DeleteBtnComponent extends Component {
    @action 
    deleteDog(dog){
        console.log(dog)
        dog.destroyRecord();
    }
}
