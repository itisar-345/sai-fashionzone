import React from 'react';
import Hero from '../../components/home/Hero';
import Categories from '../../components/home/Categories';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import About from '../../components/home/About';
import Newsletter from '../../components/home/Newsletter';

export function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <Newsletter />
    </div>
  );
}