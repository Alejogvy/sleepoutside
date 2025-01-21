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
    this.url = `/src/json/${category}.json`;
  }

  async getData() {
    try {
      console.log("Loading data from:", this.url);
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error("Error loading data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error in getData:", error);
      return [];
    }
  }

  async findProductById(productId) {
    const products = await this.getData();
    console.log("Products loaded:", products);
    const product = products.find((p) => p.Id === productId);
    console.log("Product found:", product);
    return product;
  }
}
