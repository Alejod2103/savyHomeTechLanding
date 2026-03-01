import { Users, Target, Shield } from 'lucide-react';

const values = [
  {
    title: "Enfoque en el Usuario",
    desc: "No representamos a las marcas, te representamos a ti ante ellas.",
    icon: Users
  },
  {
    title: "Precisión Total",
    desc: "Usamos datos en tiempo real para encontrar el centavo exacto de ahorro.",
    icon: Target
  },
  {
    title: "Protección Legal",
    desc: "Blindamos tus contratos contra letras pequeñas y cargos injustificados.",
    icon: Shield
  }
];

export default function AboutUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em] mb-4">Nuestra Misión</h2>
          <p className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
            Empoderamos a los hogares mediante <span className="font-bold">auditorías independientes</span>. Nuestra meta es eliminar la asimetría de información entre el consumidor y las grandes corporaciones de servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          {values.map((v, i) => (
            <div key={i} className="group">
              <div className="mb-6 inline-block p-3 bg-slate-50 rounded-2xl text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                <v.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}