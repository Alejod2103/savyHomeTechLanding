import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
          Portal de Auditoría Independiente
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Ahorra en tu conexión a <span className="text-violet-600">Internet</span> y Servicios del Hogar
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
          No busques más. Nosotros comparamos, gestionamos y monitoreamos tu tarifa para que siempre pagues lo mínimo.
        </p>
        <a href="#auditoria" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 shadow-lg shadow-violet-200 transition-all transform hover:-translate-y-1">
          Iniciar Auditoría de Ahorro Gratis <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}