import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex min-h-screen bg-background text-gray-200 selection:bg-primary/30">
      <Sidebar />
      <main className="flex-1 w-full md:ml-[80px] lg:ml-[280px] px-6 sm:px-12 md:px-24 transition-all duration-300">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
