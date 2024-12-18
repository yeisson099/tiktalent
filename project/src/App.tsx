import React, { useEffect, useRef } from 'react';
import Logo from './components/Logo';
import ParticleBackground from './components/ParticleBackground';
import RegistrationForm from './components/RegistrationForm/index';

function App() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const opacity = Math.max(0, 1 - scrolled / 400); // Reduced from 500 to 400 for faster fade
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      parallaxRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A1A] text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80)',
            filter: 'brightness(0.3)'
          }}
        />
        <div ref={parallaxRef} className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Marketing Conference 2024
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            25-27 NOVIEMBRE 2024 | NEW YORK
          </p>
          <p className="text-2xl md:text-3xl font-light text-purple-400 animate-pulse">
            Transformando el marketing digital
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8">
            Acerca del evento
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            TikTalent Marketing Conference es una reunión extraordinaria de los profesionales más innovadores y visionarios del marketing digital. Este evento sirve como plataforma donde mentes brillantes de todo el mundo se reúnen para intercambiar ideas, insights y soluciones para los desafíos más apremiantes del marketing actual.
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section ref={formRef} className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            No te pierdas esta experiencia única
          </h2>
          <RegistrationForm onShowForm={scrollToForm} />
        </div>
      </section>
    </div>
  );
}

export default App;