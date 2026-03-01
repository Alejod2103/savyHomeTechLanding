import { ClipboardCheck, BarChart3, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: "Registro de Perfil",
    desc: "Ingresas tus datos básicos y el costo de tu factura actual para iniciar el análisis geolocalizado.",
    icon: ClipboardCheck,
  },
  {
    title: "Auditoría de Mercado",
    desc: "Nuestro sistema identifica discrepancias y mejores ofertas ocultas entre los proveedores de tu zona.",
    icon: BarChart3,
  },
  {
    title: "Optimización Activa",
    desc: "Gestionamos la transición o renegociación para asegurar que siempre pagues el mínimo garantizado.",
    icon: ShieldCheck,
  }
];

export default function AuditSteps() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestra Metodología de Auditoría</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Transparencia absoluta en cada paso para maximizar tu ahorro mensual.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-violet-600 shadow-sm mb-6 group-hover:border-violet-400 transition-colors">
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              {idx < 2 && (
                <div className="hidden md:block absolute top-8 left-[70%] w-full h-[1px] bg-slate-300 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}