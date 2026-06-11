import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { updatePageMeta } from '../utils/seo';
import Hero from '../sections/Hero';
import Why from '../sections/Why';
import Stats from '../sections/Stats';
import Services from '../sections/Services';
import Products from '../sections/Products';
import InteractiveMatrix from '../sections/InteractiveMatrix';
import Solutions from '../sections/Solutions';
import Sectors from '../sections/Sectors';
import Process from '../sections/Process';
import Partner from '../sections/Partner';
import Contact from '../sections/Contact';

export default function HomePage() {
  useEffect(() => {
    updatePageMeta(
      'BODEX Bulgaria – Инжекционни системи за бетон | ARCAN',
      'Официален партньор ARCAN. Укрепване на фундаменти, ремонт на пукнатини. Полимерни смоли и инжекционни материали за B2B продажби.',
      'https://bodexbulgaria.com/og-image.jpg',
      'https://bodexbulgaria.com'
    );
  }, []);
  
  useReveal();
  return (
    <>
      <Hero />
      <Why />
      <Stats />
      <Services />
      <Products />
      <InteractiveMatrix />
      <Solutions />
      <Sectors />
      <Process />
      <Partner />
      <Contact />
    </>
  );
}
