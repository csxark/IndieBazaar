const PRODUCTS = [
  {
    id: 1,
    name: "Handwoven Banarasi Silk Saree",
    price: 15800,
    originalPrice: 18000,
    description: "Exquisite handwoven Banarasi silk saree featuring intricate zari work and traditional motifs. Created by master weavers in Varanasi.",
    brand: "Varanasi Heritage",
    image: "https://images.pexels.com/photos/12453302/pexels-photo-12453302.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/12453302/pexels-photo-12453302.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/12453306/pexels-photo-12453306.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["handcrafted", "sustainable", "artisan-sarees"],
    category: "artisan-sarees",
    inStock: true
  },
  {
    id: 2,
    name: "Khadi Cotton Kurta Set",
    price: 3200,
    description: "Handspun and handwoven khadi cotton kurta set. Represents the essence of sustainable Indian fashion.",
    brand: "Khadi Gram",
    image: "https://images.pexels.com/photos/5865223/pexels-photo-5865223.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/5865223/pexels-photo-5865223.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5865236/pexels-photo-5865236.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["handcrafted", "khadi-wear", "sustainable"],
    category: "khadi-wear",
    inStock: true
  },
  {
    id: 3,
    name: "Bagru Block Print Cotton Dress",
    price: 2800,
    originalPrice: 3200,
    description: "Hand block-printed cotton dress featuring traditional Bagru prints from Rajasthan. Made with natural dyes.",
    brand: "Bagru Artisans",
    image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["block-printed", "sustainable", "natural-dye"],
    category: "block-printed-apparel",
    inStock: true
  },
  {
    id: 4,
    name: "Organic Cotton Handloom Shirt",
    price: 2200,
    description: "Handwoven organic cotton shirt made with sustainably grown cotton from Gujarat.",
    brand: "Organic Handloom",
    image: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["organic-cotton", "handloom", "sustainable"],
    category: "organic-cotton-clothing",
    inStock: true
  },
  {
    id: 5,
    name: "Upcycled Denim Jacket",
    price: 3800,
    description: "Unique denim jacket created from upcycled materials, featuring traditional embroidery.",
    brand: "Reimagine Fashion",
    image: "https://images.pexels.com/photos/7679633/pexels-photo-7679633.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679633/pexels-photo-7679633.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679634/pexels-photo-7679634.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["upcycled", "sustainable", "new"],
    category: "upcycled-fashion",
    inStock: true
  },
  {
    id: 6,
    name: "Lucknowi Chikankari Kurta",
    price: 4500,
    originalPrice: 5000,
    description: "Delicate hand-embroidered chikankari kurta from Lucknow's master artisans.",
    brand: "Lucknow Heritage",
    image: "https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679686/pexels-photo-7679686.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["embroidered", "handcrafted"],
    category: "embroidered-ethnicwear",
    inStock: true
  },
  {
    id: 7,
    name: "Bandhani Silk Dupatta",
    price: 2800,
    description: "Traditional Bandhani tie-dye silk dupatta from Gujarat's expert artisans.",
    brand: "Kutch Bandhani",
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679741/pexels-photo-7679741.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["bandhani", "handcrafted"],
    category: "ajrakh-bandhani",
    inStock: true
  },
  {
    id: 8,
    name: "Handknit Kullu Shawl",
    price: 4200,
    originalPrice: 4800,
    description: "Warm handknitted wool shawl with traditional Kullu patterns from Himachal Pradesh.",
    brand: "Himalayan Handknits",
    image: "https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679751/pexels-photo-7679751.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["handmade-woolen", "sustainable"],
    category: "handmade-woolen-wear",
    inStock: true
  },
  {
    id: 9,
    name: "Natural Indigo Dyed Dress",
    price: 3600,
    description: "Cotton dress dyed with natural indigo using traditional dyeing techniques.",
    brand: "Natural Dye Studio",
    image: "https://images.pexels.com/photos/7679760/pexels-photo-7679760.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679760/pexels-photo-7679760.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679761/pexels-photo-7679761.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["natural-dye", "sustainable", "new"],
    category: "natural-dye-apparel",
    inStock: true
  },
  {
    id: 10,
    name: "Chanderi Silk Kurta Set",
    price: 6500,
    originalPrice: 7200,
    description: "Elegant Chanderi silk kurta set with traditional motifs, handwoven in Madhya Pradesh.",
    brand: "Chanderi Traditions",
    image: "https://images.pexels.com/photos/7679770/pexels-photo-7679770.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/7679770/pexels-photo-7679770.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7679771/pexels-photo-7679771.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    tags: ["handloom", "sustainable"],
    category: "handloom-clothing",
    inStock: true
  }
];

// Categories configuration
export const CATEGORIES = [
  { id: 'handloom-clothing', name: 'Handloom Clothing' },
  { id: 'khadi-wear', name: 'Khadi Wear' },
  { id: 'block-printed-apparel', name: 'Block-Printed Apparel' },
  { id: 'organic-cotton-clothing', name: 'Organic Cotton Clothing' },
  { id: 'upcycled-fashion', name: 'Upcycled Fashion' },
  { id: 'embroidered-ethnicwear', name: 'Embroidered Ethnicwear' },
  { id: 'ajrakh-bandhani', name: 'Ajrakh & Bandhani' },
  { id: 'artisan-sarees', name: 'Artisan Sarees' },
  { id: 'handmade-woolen-wear', name: 'Handmade Woolen Wear' },
  { id: 'natural-dye-apparel', name: 'Natural Dye Apparel' }
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
        filteredProducts = filteredProducts.filter(p => p.tags.includes('new'));
        break;
      case 'best-seller':
        filteredProducts = filteredProducts.filter(p => p.tags.includes('best-seller'));
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