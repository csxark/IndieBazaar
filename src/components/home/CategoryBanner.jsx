import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function CategoryBanner() {
  const categories = [
    {
      id: 1,
      name: 'Artisan Sarees',
      description: 'Handwoven masterpieces from India\'s finest weavers',
      image: 'https://images.pexels.com/photos/12453302/pexels-photo-12453302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'artisan-sarees',
    },
    {
      id: 2,
      name: 'Block-Printed Apparel',
      description: 'Traditional prints using natural dyes',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'block-printed-apparel',
    },
    {
      id: 3,
      name: 'Khadi Wear',
      description: 'Handspun, handwoven sustainable fashion',
      image: 'https://images.pexels.com/photos/5865223/pexels-photo-5865223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      slug: 'khadi-wear',
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our curated collection of traditional Indian craftsmanship across different categories.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Link to={`/products?category=${category.slug}`}>
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-serif text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                      <span className="inline-block text-white text-sm font-medium border-b border-white">
                        Shop Collection
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBanner