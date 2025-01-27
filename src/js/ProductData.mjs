// Importa los datos directamente desde los archivos JSON
import tentsData from '../json/tents.json';  // Asegúrate de que la ruta es correcta

export default class ProductData {
  constructor(category) {
    this.category = category;
    // Establece los datos de acuerdo con la categoría
    this.data = this.loadData(category);
  }

  // Método para cargar los datos dependiendo de la categoría
  loadData(category) {
    switch (category) {
      case 'tents':
        return tentsData;
      // Puedes agregar más casos aquí para otras categorías (como backpacks, sleeping-bags, etc.)
      default:
        return [];
    }
  }

  // Método que devuelve los datos (ya no se usa fetch)
  async getData() {
    return this.data;
  }

  // Método para encontrar un producto por su ID
  async findProductById(id) {
    return this.data.find(product => product.Id === id);
  }
}
