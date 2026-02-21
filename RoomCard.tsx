
import React, { useState } from 'react';
import { Room } from './types';
import { POUSADA_CONFIG } from './constants';
import ImageWithFallback from "./components/ImageWithFallback";

interface Props {
  room: Room;
  onBookingClick: () => void;
}

const RoomCard: React.FC<Props> = ({ room, onBookingClick }) => {
  const [idx, setIdx] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((idx + 1) % room.images.length);
  };

  return (
    <div className="group cursor-pointer" onClick={onBookingClick}>
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-shadow">
        <ImageWithFallback
          src={room.images[idx]}
          fallbackSrc="/fallback.jpg"
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "none", opacity: 1 }}
        />
        <button 
          onClick={handleNext} 
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800">{room.name}</h3>
        <span className="flex items-center text-sm font-medium">★ 5.0</span>
      </div>
      <p className="text-gray-500 text-sm line-clamp-1">{room.description}</p>
      <p className="mt-2 text-gray-900">
        <span className="font-bold">{POUSADA_CONFIG.currency} {room.pricePerNight}</span>
        <span className="text-gray-500 font-normal"> noite</span>
      </p>
    </div>
  );
};

export default RoomCard;
