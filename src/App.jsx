import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-background text-gray-200' : 'bg-background text-gray-800'} selection:bg-primary/30`}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 w-full px-6 sm:px-12 md:px-24 transition-all duration-300">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="w-full py-6 px-6 sm:px-12 md:px-24 border-t border-white/5 mt-12">
        <p className="text-center text-xs text-muted/50 font-mono tracking-widest">
          Copyright &copy; 2026 Mahin Ahmad. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
