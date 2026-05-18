import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import Hero from '../sections/Hero';
import Why from '../sections/Why';
import Stats from '../sections/Stats';
import Services from '../sections/Services';
import Products from '../sections/Products';
import Sectors from '../sections/Sectors';
import Process from '../sections/Process';
import Partner from '../sections/Partner';
import Contact from '../sections/Contact';

export default function HomePage() {
  useReveal();
  return (
    <>
      <Hero />
      <Why />
      <Stats />
      <Services />
      <Products />
      <Sectors />
      <Process />
      <Partner />
      <Contact />
    </>
  );
}
