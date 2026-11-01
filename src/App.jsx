
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
            
            <div className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl shadow-md shadow-blue-200 transition">
                Sing In
              </button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-600 focus:outline-none text-2xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 flex flex-col font-medium text-slate-600 shadow-inner">
              <a href="#" className="hover:text-blue-600">React</a>
              <a href="#" className="hover:text-blue-600">Tailwind</a>
              <a href="#" className="hover:text-blue-600">Vite</a>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-medium">View Demo</button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <header className="max-w-6xl mx-auto px-6 py-20 text-center md:py-32 flex flex-col items-center">
          <span className="bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            React + Tailwind CSS
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 mt-6 tracking-tight leading-tight max-w-3xl">
           "Component-Driven Web Design Made  <span className="text-blue-600">Fast & Easy"</span>
          </h1>
          

          </div>
        </section>

      </div>
    </>
  );
}

export default App;
