import React from 'react';
import './HeroSection.css'; // əlavə stil üçün ayrıca CSS faylı yarat

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="overlay text-center text-white">
        <h1 className="display-4">Wolt ilə Ləzzətli Yeməklər</h1>
        <p className="lead">Business lunch və gündəlik menyular bir kliklə qapınızda!</p>
        <a target='_blank' href="https://wolt.com/az/aze/baku/restaurant/doshab-catering" className="btn btn-primary btn-lg me-2">Wolt ile Sifariş Et</a>
      </div>
    </section>
  );
}
