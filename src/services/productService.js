const PRODUCTS = [
  {
    id: 1,
    name: "weaver’s tale Women’s handwoven Banarasi silk saree with blouse piece (orange)",
    price: 15800,
    originalPrice: 18000,
    description: "Elegant handwoven Banarasi silk saree featuring intricate zari work and traditional craftsmanship from Varanasi.",
    brand: "Weaver's Tale",
    image: "https://weaverstory.com/cdn/shop/products/SRN12360-1.jpg?v=1723764970",
    images: [
      "https://5.imimg.com/data5/OV/HC/MY-32121134/hand-woven-tanchoi-banarasi-silk-saree-1000x1000.jpg",
      "https://5.imimg.com/data5/OV/HC/MY-32121134/hand-woven-tanchoi-banarasi-silk-saree-1000x1000.jpg"
    ],
    tags: ["handcrafted", "sustainable", "artisan-sarees"],
    category: "artisan-sarees",
    inStock: true
  },
  {
    id: 2,
    name: "Cotton Khaadi Embroidery Straight Kurta Set with Pants & Khadi Silk Dupatta (3-Piece) by H4U",
    price: 3200,
    description: "Authentic handspun khadi cotton kurta set paired with a khadi silk dupatta, showcasing the spirit of sustainable Indian fashion.",
    brand: "H4U",
    image: "https://c.media-amazon.com/images/I/51WhH31j6BL.jpg",
    images: [
      "https://c.media-amazon.com/images/I/51WhH31j6BL.jpg",
      "https://c.media-amazon.com/images/I/51WhH31j6BL.jpg"
    ],
    tags: ["handcrafted", "khadi-wear", "sustainable"],
    category: "khadi-wear",
    inStock: true
  },
  {
    id: 3,
    name: "Bagru Jaipuri Hand Block Print Cotton Dress (Yellow)",
    price: 2800,
    originalPrice: 3200,
    description: "Vibrant yellow hand block-printed cotton dress using traditional Bagru techniques and natural dyes from Rajasthan.",
    brand: "Bagru Artisans",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/6/320821174/AQ/WC/IP/126497530/product-jpeg-1000x1000.jpg",
    images: [
      "https://5.imimg.com/data5/ANDROID/Default/2023/6/320821460/QU/UT/KR/126497530/product-jpeg-1000x1000.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2023/6/320821461/ZA/YY/GX/126497530/product-jpeg-1000x1000.jpg"
    ],
    tags: ["block-printed", "sustainable", "natural-dye"],
    category: "block-printed-apparel",
    inStock: true
  },
  {
    id: 4,
    name: "Inkriti Kala Cotton Sunshine Handwoven T-Shirt (100% organic handloom)",
    price: 2200,
    description: "Breathable handwoven organic cotton t-shirt made from Kala cotton, perfect for conscious fashion lovers.",
    brand: "Inkriti",
    image: "https://ciceroni.in/cdn/shop/files/kala-cotton-bw-checks-everywhere-shirtinkritimen-shirtsciceroni-905238.jpg?crop=region&crop_height=2037&crop_left=0&crop_top=5&crop_width=1365&v=1734605824&width=1365",
    images: [
      "https://ciceroni.in/cdn/shop/files/kala-cotton-bw-checks-everywhere-shirtinkritimen-shirtsciceroni-905238.jpg?crop=region&crop_height=2037&crop_left=0&crop_top=5&crop_width=1365&v=1734605824&width=1365",
      "https://ciceroni.in/cdn/shop/files/kala-cotton-bw-checks-everywhere-shirtinkritimen-shirtsciceroni-905238.jpg?crop=region&crop_height=2037&crop_left=0&crop_top=5&crop_width=1365&v=1734605824&width=1365"
    ],
    tags: ["organic-cotton", "handloom", "sustainable"],
    category: "organic-cotton-clothing",
    inStock: true
  },
  {
    id: 5,
    name: "Ada Hand Embroidered Lucknowi Chikankari Kota Cotton Kurta with Trouser Kurta Set for Women",
    price: 4500,
    originalPrice: 5000,
    description: "Delicate hand-embroidered chikankari kurta set made with fine Kota cotton, crafted by Ada artisans from Lucknow.",
    brand: "Ada",
    image: "https://c.media-amazon.com/images/I/61j1BoXBI+L.jpg",
    images: [
      "https://c.media-amazon.com/images/I/61j1BoXBI+L.jpg",
      "https://c.media-amazon.com/images/I/61j1BoXBI+L.jpg"
    ],
    tags: ["embroidered", "handcrafted", "best-seller"],
    category: "embroidered-ethnicwear",
    inStock: true
  },
  {
    id: 6,
    name: "AKSHADEEP Bandhani and Patola Print Dupatta – Traditional Art Silk Dupattas for Women",
    price: 2800,
    description: "Vibrant bandhani and patola print dupatta crafted with traditional tie-dye methods on rich art silk fabric.",
    brand: "Akshadeep",
    image: "https://m.media-amazon.com/images/I/81qPhmP7HhL._AC_UY350_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81qPhmP7HhL._AC_UY350_.jpg",
      "https://m.media-amazon.com/images/I/81qPhmP7HhL._AC_UY350_.jpg"
    ],
    tags: ["bandhani", "handcrafted", "best-seller"],
    category: "ajrakh-bandhani",
    inStock: true
  },
  {
    id: 7,
    name: "SilkyKraftz Pure Wool Fancy Multi-Color Hand Knit Shawl for Girls and Women",
    price: 4200,
    originalPrice: 4800,
    description: "Beautifully hand-knitted pure wool shawl featuring colorful traditional Kullu patterns, perfect for winter.",
    brand: "SilkyKraftz",
    image: "https://images-eu.ssl-images-amazon.com/images/I/71aNtNlJebL._AC_SR462,693_.jpg",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/I/71aNtNlJebL._AC_SR462,693_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/I/71aNtNlJebL._AC_SR462,693_.jpg"
    ],
    tags: ["handmade-woolen", "sustainable", "new"],
    category: "handmade-woolen-wear",
    inStock: true
  },
  {
    id: 8,
    name: "Ananda House of Natural Dyes Handmade Indigo Shibori Dress",
    price: 3600,
    description: "Handcrafted cotton dress dyed with natural indigo using ancient Shibori dyeing techniques.",
    brand: "Ananda House of Natural Dyes",
    image: "https://m.media-amazon.com/images/I/61pVYZivJLL._QL85_AC_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61pVYZivJLL._QL85_AC_.jpg",
      "https://m.media-amazon.com/images/I/61pVYZivJLL._QL85_AC_.jpg"
    ],
    tags: ["natural-dye", "sustainable", "new"],
    category: "natural-dye-apparel",
    inStock: true
  },
  {
    id: 9,
    name: "Women’s Chanderi Silk Embroidered Kurta with Pant & Organza Dupatta Set",
    price: 6500,
    originalPrice: 7200,
    description: "Luxurious Chanderi silk kurta set embroidered with traditional motifs, paired with a light organza dupatta.",
    brand: "Chanderi Traditions",
    image: "https://www.jaipurkurti.com/cdn/shop/files/6_8d71306f-1ec6-4272-adf9-12e3bd451218.jpg?v=1736609809",
    images: [
      "https://www.jaipurkurti.com/cdn/shop/files/6_8d71306f-1ec6-4272-adf9-12e3bd451218.jpg?v=1736609809",
      "https://www.jaipurkurti.com/cdn/shop/files/6_8d71306f-1ec6-4272-adf9-12e3bd451218.jpg?v=1736609809"
    ],
    tags: ["handloom", "sustainable", "best-seller"],
    category: "handloom-clothing",
    inStock: true
  }
];


// Categories configuration
export const CATEGORIES = [
  { id: 'artisan-sarees', name: 'Artisan Sarees' },
  { id: 'khadi-wear', name: 'Khadi Wear' },
  { id: 'block-printed-apparel', name: 'Block-Printed Apparel' },
  // { id: 'organic-cotton-clothing', name: 'Organic Cotton Clothing' },
  // { id: 'upcycled-fashion', name: 'Upcycled Fashion' },
  { id: 'embroidered-ethnicwear', name: 'Embroidered Ethnicwear' },
  { id: 'ajrakh-bandhani', name: 'Ajrakh & Bandhani' },
  { id: 'handmade-woolen-wear', name: 'Handmade Woolen Wear' },
  // { id: 'natural-dye-apparel', name: 'Natural Dye Apparel' },
  { id: 'handloom-clothing', name: 'Handloom Clothing' }
];


// Simulate API calls with delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all products with optional filtering
export const fetchProducts = async (filters = {}) => {
  await delay(800); // Simulate network delay
  
  let filteredProducts = [...PRODUCTS];
  
  // Apply filters
  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchLower) || 
      p.description.toLowerCase().includes(searchLower) ||
      p.brand.toLowerCase().includes(searchLower)
    );
  }
  
  if (filters.tags && filters.tags.length) {
    filteredProducts = filteredProducts.filter(p => 
      filters.tags.some(tag => p.tags.includes(tag))
    );
  }
  
  if (filters.minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice);
  }
  
  // Sort products
  if (filters.sort) {
    switch(filters.sort) {
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Instead of filtering, prioritize products with the 'new' tag
        filteredProducts.sort((a, b) => {
          const aIsNew = a.tags.includes('new');
          const bIsNew = b.tags.includes('new');
          return bIsNew - aIsNew; // This sorts new items first
        });
        break;
      case 'best-seller':
        // Instead of filtering, prioritize products with the 'best-seller' tag
        filteredProducts.sort((a, b) => {
          const aIsBestSeller = a.tags.includes('best-seller');
          const bIsBestSeller = b.tags.includes('best-seller');
          return bIsBestSeller - aIsBestSeller; // This sorts best-sellers first
        });
        break;
      default:
        break;
    }
  }
  
  return filteredProducts;
}

// Get a single product by ID
export const fetchProductById = async (productId) => {
  await delay(500); // Simulate network delay
  
  const id = parseInt(productId, 10);
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
}

// Get featured products
export const fetchFeaturedProducts = async () => {
  await delay(800); // Simulate network delay
  
  // Return a mix of best-sellers and new arrivals
  const featuredProducts = PRODUCTS.filter(p => 
    p.tags.includes('best-seller') || p.tags.includes('new')
  ).slice(0, 4);
  
  return featuredProducts;
}