
import React, { useState, useMemo } from 'react';
import { Room } from './types';
import { POUSADA_CONFIG } from './constants';

interface Props {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ room, isOpen, onClose }) => {
  const [dates, setDates] = useState({ in: '', out: '' });
  const [guests, setGuests] = useState(1);

  const totals = useMemo(() => {
    if (!dates.in || !dates.out) return null;
    const start = new Date(dates.in);
    const end = new Date(dates.out);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (nights <= 0) return null;
    const subtotal = nights * room.pricePerNight;
    return { nights, subtotal, total: subtotal + room.cleaningFee };
  }, [dates, room]);

  const handleBooking = () => {
    if (!totals) return;
    const msg = `✨ RESERVA: ${room.name}\n📅 Check-in: ${dates.in}\n📅 Check-out: ${dates.out}\n👥 Hóspedes: ${guests}\n💰 Total: R$ ${totals.total.toFixed(2)}`;
    window.open(`https://wa.me/${POUSADA_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative animate-fade-in">
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-black">✕</button>
        <h2 className="text-2xl font-bold mb-6">{room.name}</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400">Entrada</label>
            <input type="date" className="w-full border p-3 rounded-xl" value={dates.in} onChange={e => setDates({...dates, in: e.target.value})} />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400">Saída</label>
            <input type="date" className="w-full border p-3 rounded-xl" value={dates.out} onChange={e => setDates({...dates, out: e.target.value})} />
          </div>
        </div>

        <div className="mb-8">
          <label className="text-[10px] font-bold uppercase text-gray-400">Hóspedes</label>
          <select className="w-full border p-3 rounded-xl" value={guests} onChange={e => setGuests(Number(e.target.value))}>
            {[...Array(room.maxGuests)].map((_, i) => <option key={i} value={i+1}>{i+1} hóspede(s)</option>)}
          </select>
        </div>

        {totals && (
          <div className="bg-gray-50 p-5 rounded-2xl mb-8 border border-gray-100">
            <div className="flex justify-between text-sm mb-2">
              <span>{totals.nights} noites</span>
              <span>R$ {totals.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm mb-4 border-b pb-2">
              <span>Limpeza</span>
              <span>R$ {room.cleaningFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>R$ {totals.total.toFixed(2)}</span>
            </div>
          </div>
        )}

        <button 
          disabled={!totals} 
          onClick={handleBooking}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold disabled:opacity-50 transition-all shadow-lg"
        >
          Confirmar no WhatsApp
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
