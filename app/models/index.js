import Model, { attr } from '@ember-data/model';

export default class IndexModel extends Model {
  @attr('string') name;
  @attr('string') breed;
  @attr('string') owner;
  @attr('string') size;
  @attr('string') description;
}
