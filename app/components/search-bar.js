import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SearchBarComponent extends Component {
  @service store;
  @service router;

  @action
  searchDogs(e) {
    e.preventDefault();
    let dog = this.store.peekAll('dog');

    let searchTerm = this.name.charAt(0).toUpperCase() + this.name.slice(1);

    let filteredList = dog.filterBy('name', searchTerm);

    if(filteredList.length === 0){
      alert("Sorry, there were no dogs found.")
      return
    }else{
      let searchId = filteredList[0].id;

      console.log(filteredList[0].id);
      this.router.transitionTo('dog', searchId);
    }
  }
}
