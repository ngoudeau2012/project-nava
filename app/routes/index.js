import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/dogs.json');
    const { data } = await response.json();
    console.log(data);
    return data;
  }
}
