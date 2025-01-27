import tentsData from '../json/tents.json';

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.data = this.loadData(category);
  }

  loadData(category) {
    switch (category) {
      case 'tents':
        return tentsData;
      default:
        return [];
    }
  }

  async getData() {
    return this.data;
  }

  async findProductById(id) {
    return this.data.find(product => product.Id === id);
  }
}
