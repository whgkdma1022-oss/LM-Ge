import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClosedLoop from './components/ClosedLoop';
import Comparison from './components/Comparison';
import Innovation from './components/Innovation';
import Timeline from './components/Timeline';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <ClosedLoop />
      <Comparison />
      <Innovation />
      <Timeline />
      <Community />
      <Footer />
    </main>
  );
}

export default App;
