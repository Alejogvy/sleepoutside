function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    console.error(`Error fetching data: ${res.statusText}`);
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    // Absolute Path (development only)
    this.path = window.location.hostname === 'localhost' 
      ? `/json/${this.category}.json` 
      : `json/${this.category}.json`;
    this.cachedData = null;
  }

  async getData() {
    
    if (this.cachedData) {
      return this.cachedData;
    }

    try {
      
      const response = await fetch(this.path);
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      this.cachedData = await response.json();
      return this.cachedData;
    } catch (error) {
      console.error('Error en getData:', error);
      return [];
    }
  }  

  async findProductById(id) {
    const products = await this.getData();
    console.log("Productos cargados:", products);
    const product = products.find((item) => item.Id === id);
    console.log("Producto encontrado:", product);
    return product;
  }
  
}
