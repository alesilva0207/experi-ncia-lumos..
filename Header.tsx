
import React from 'react';
import { POUSADA_CONFIG } from './constants';
import { Home } from 'lucide-react';

interface Props {
  title: string;
  onReserveClick: () => void;
}

const Header: React.FC<Props> = ({ title, onReserveClick }) => (
  <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div 
        className="flex items-center space-x-3 cursor-pointer" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <div className="bg-purple-100 p-2 rounded-xl">
          <Home className="w-6 h-6 text-purple-700" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg text-gray-900 leading-tight">{title}</span>
          <span className="text-[10px] text-purple-600 font-bold uppercase tracking-widest">Guaratuba</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <a 
          href={POUSADA_CONFIG.instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-500 hover:text-purple-600 transition hidden sm:block"
        >
          Instagram
        </a>
        <button 
          onClick={onReserveClick} 
          className="bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-800 transition-all shadow-md active:scale-95"
        >
          Reservar
        </button>
      </div>
    </div>
  </header>
);

export default Header;
