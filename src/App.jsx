
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
        
        {/* Navbar */}
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-xl font-black tracking-wider text-blue-600">REACT + Tailwind</a> 
      
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-blue-600 transition">React</a>
              <a href="#" className="hover:text-blue-600 transition">Tailwind</a>
              <a href="#" className="hover:text-blue-600 transition">Vite</a>
            </div>
            
           
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
