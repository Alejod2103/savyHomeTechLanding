import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos R.", location: "Miami, FL", text: "Lograron bajar mi factura de Xfinity de $120 a $75 mensuales manteniendo la misma velocidad. Increíble servicio.", stars: 5 },
  { name: "Marta S.", location: "Houston, TX", text: "Me ahorraron horas de espera al teléfono con soporte técnico. Ellos gestionaron todo mi cambio a fibra óptica.", stars: 5 },
  { name: "David L.", location: "Phoenix, AZ", text: "Transparencia total. Me explicaron cargos que yo ni sabía que me estaban cobrando. 100% recomendados.", stars: 5 }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16 uppercase tracking-tight">Lo que dicen nuestros usuarios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <Star key={s} size={16} className="fill-violet-600 text-violet-600" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}