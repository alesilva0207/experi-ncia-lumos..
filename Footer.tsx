
import React from 'react';
import { POUSADA_CONFIG } from './constants';
import { Home } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-50 border-t border-gray-100 py-16 mt-auto">
    <div className="container mx-auto px-6 text-center">
      <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Home className="w-8 h-8 text-purple-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{POUSADA_CONFIG.name}</h3>
      <p className="text-purple-600 text-sm italic mb-6">"{POUSADA_CONFIG.slogan}"</p>
      
      <div className="flex justify-center space-x-6 mb-8">
        <a href={POUSADA_CONFIG.instagramUrl} target="_blank" className="text-gray-400 hover:text-purple-600">
          <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
        </a>
        <a href={`https://wa.me/${POUSADA_CONFIG.whatsappNumber}`} target="_blank" className="text-gray-400 hover:text-green-600">
          <span className="text-sm font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
      </div>
      
      <p className="text-gray-400 text-[11px] font-medium tracking-wide">
        &copy; {new Date().getFullYear()} {POUSADA_CONFIG.name.toUpperCase()}. TODOS OS DIREITOS RESERVADOS.
      </p>
    </div>
  </footer>
);

export default Footer;
