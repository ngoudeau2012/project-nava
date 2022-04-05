import { discoverEmberDataModels } from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // Shorthand cheatsheet:

  // this.post('/dogs');
  // this.get('/dogs/:id');
  // this.put('/dogs/:id'); // or this.patch
  // this.del('/dogs/:id');

  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes() {
      this.resource('dog');
      this.get('/dogs');
      this.get('/dogs/:id');
      this.post('/dogs/:id');
      this.del('/dogs/:id');
    },
  };
  return createServer(finalConfig);
}
