import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  //     @action
  //     toggleBody() {
  //     this.toggleProperty('isExpanded');
  //   }
//   @action
//   createNewDog() {
//     // get the input value from the .hbs template
//     let newBoardGame = this.get('newBoardGame');
//     // create a record in Ember Data (locally, would not survive page refresh)
//     let newRecord = this.store.createRecord('boardgame', {
//       title: newBoardGame,
//     });
//     // Save the record to the API endpoint specified in adapters/application.js
//     newRecord.save();
//   }
//   readBoardGame() {
//     // get the input value from the .hbs template
//     let id = this.get('boardGameId');
//     // find the record (cheating and using id 1 from my mocked server)
//     this.store.findRecord('boardgame', 1).then((game) => {
//       alert(game.get('title') + ' ' + game.get('id'));
//     });
//   }
//   @action
//   updateBoardGame() {
//     let updatedTitle = this.get('updatedTitle');
//     let game = this.get('model').findBy('id', '1');
//     game.set('title', updatedTitle); // locally update the title
//     game.save(); // save the title to API via PATCH
//   }
//   @action
//   destroyBoardGame() {
//     let destroyId = this.get('destroyId');
//     let game = this.get('model').findBy('id', destroyId);
//     game.destroyRecord(); // destroy deletes & saves in one step
//   }
}
