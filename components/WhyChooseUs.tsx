import { Scale, ShieldCheck, FileText } from 'lucide-react';

const reasons = [
  {
    title: "Auditoría Independiente",
    desc: "No somos una sucursal de los proveedores. Analizamos el mercado de forma imparcial para defender tus intereses.",
    icon: Scale,
  },
  {
    title: "Sin Costos Ocultos",
    desc: "Nuestra transparencia es absoluta. Conoces el precio final y las condiciones del contrato desde el primer día.",
    icon: ShieldCheck,
  },
  {
    title: "Gestión de Facturación",
    desc: "Monitoreamos tus facturas mes a mes para detectar subidas injustificadas y reclamar por ti automáticamente.",
    icon: FileText,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-4">
              <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center">
                <reason.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}