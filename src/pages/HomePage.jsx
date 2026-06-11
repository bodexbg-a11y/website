import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { updatePageMeta } from '../utils/seo';
import Hero from '../sections/Hero';
import Why from '../sections/Why';
import Services from '../sections/Services';
import Products from '../sections/Products';
import Solutions from '../sections/Solutions';
import Sectors from '../sections/Sectors';
import Process from '../sections/Process';
import Partner from '../sections/Partner';
import Contact from '../sections/Contact';

export default function HomePage() {
  useEffect(() => {
    updatePageMeta(
      'BODEX Bulgaria – Инжекционни системи за бетон | ARCAN',
      'Официален партньор ARCAN. Укрепване на фундаменти, ремонт на пукнатини. B2B продажби на едро.',
      'https://bodexbulgaria.com/og-image.jpg',
      'https://bodexbulgaria.com'
    );
  }, []);
  
  useReveal();
  return (
    <>
      <Hero />
      <Why />
      <Services />
      <Products />
      <Solutions />
      <Sectors />
      <Process />
      <Partner />
      <Contact />
    </>
  );
}
