# project-nava

This is a small CRUD application built using the Ember.js framework. It loads a JSON file to a Mirage Database when you start the server. The user will see cards of all the dogs currently in the database along with all of their attributes. At the end of the list, there is a card that has input fields that will alow the user to create a new dog that will append to the end of the cards. The user also has the ability to search for a dog by its name. The search will bring you to the dogs specific profile.

Each card has a "view profile" button, and "edit" button, and a "delete" button. All CRUD operations save to the virtual store and the data will be reset once the page is refreshed. 

![screenshot](./public/images/ProjectNava.gif)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd project-nava`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`


### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [ember-cli-mirage](https://www.ember-cli-mirage.com/)
