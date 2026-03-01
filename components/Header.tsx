import { Phone, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-violet-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-800 uppercase">
            Savy Home Tech
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="tel:8001234567" className="hidden sm:flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full font-bold transition-all shadow-sm">
            <Phone size={18} />
            (815) 384-9947
          </a>
        </div>
      </div>
    </header>
  );
}