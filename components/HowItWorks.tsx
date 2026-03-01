import { Search, MousePointerClick, Zap } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Compara",
    desc: "Analizamos todos los proveedores disponibles en tu código postal exacto.",
    icon: Search,
  },
  {
    id: "02",
    title: "Selecciona",
    desc: "Eliges la opción que mejor se adapta a tu presupuesto y necesidades de velocidad.",
    icon: MousePointerClick,
  },
  {
    id: "03",
    title: "Gestionamos",
    desc: "Nos encargamos de la burocracia y el monitoreo para asegurar tu ahorro continuo.",
    icon: Zap,
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">¿Cómo funciona Savy?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tres pasos simples para optimizar los gastos de tu hogar sin mover un dedo.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Línea conectora (Solo Desktop) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-[2px] bg-slate-100 -z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-violet-600 mb-6 shadow-sm group-hover:border-violet-300 transition-colors duration-300">
                <step.icon size={32} />
              </div>
              <span className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-2">Paso {step.id}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}