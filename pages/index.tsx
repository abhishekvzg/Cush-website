import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';

const PRODUCTS = [
  { 
    id: 1, 
    name: 'Product 1', 
    description: 'Description goes here',
    price: 999,
    image: '/images/products/product-1.jpg'
  },
  { 
    id: 2, 
    name: 'Product 2', 
    description: 'Description goes here',
    price: 999,
    image: '/images/products/product-2.jpg'
  },
  { 
    id: 3, 
    name: 'Product 3', 
    description: 'Description goes here',
    price: 999,
    image: '/images/products/product-3.jpg'
  },
  { 
    id: 4, 
    name: 'Product 4', 
    description: 'Description goes here',
    price: 999,
    image: '/images/products/product-4.jpg'
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cush - Your Journey to Perfect Sleep</title>
        <meta name="description" content="Shop at Cush for premium sleep products. Experience the perfect blend of comfort and innovation. Rest easy, dream big." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Featured Products */}
          <section className="py-16 bg-[#E8E6FF]">
            <div className="container px-4">
              <h2 className="text-2xl font-bold mb-8 text-black">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#F5F4FF] animate-pulse" />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2 group-hover:text-[#6B63FF] transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-black">₹{product.price}</span>
                        <button className="px-4 py-2 bg-[#CCFF00] text-black font-medium text-sm rounded hover:bg-[#B8E600] transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home; 