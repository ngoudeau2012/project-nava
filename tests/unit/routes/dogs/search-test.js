import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dogs/search', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dogs/search');
    assert.ok(route);
  });
});
