import { ShieldCheck, Info } from "lucide-react";

export default function DataTransparency() {
  return (
    <section className="bg-slate-100 border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-violet-600 flex-shrink-0" size={24} />
          <p className="text-xs text-slate-600 leading-tight">
            <span className="font-bold block text-slate-900 uppercase">Tus datos están protegidos</span>
            Procesamos tu información bajo cifrado SSL de 256 bits exclusivamente para fines de auditoría.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Info className="text-slate-400 flex-shrink-0" size={24} />
          <p className="text-[10px] text-slate-500 italic max-w-sm leading-tight">
            Savy Home Tech es una agencia independiente. El uso de logos de terceros es solo referencial e informativo.
          </p>
        </div>
      </div>
    </section>
  );
}