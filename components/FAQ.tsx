"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "¿Cómo funciona el servicio?",
    a: "Analizamos tu factura actual y comparamos con la base de datos de proveedores locales. Si encontramos un ahorro, gestionamos la transición o renegociamos tu tarifa actual por ti."
  },
  {
    q: "¿Tiene algún costo para mí?",
    a: "La auditoría inicial es gratuita. Solo cobramos una tarifa de gestión administrativa una vez que el ahorro ha sido confirmado y aplicado exitosamente en tu factura."
  },
  {
    q: "¿Cambia mi número de cuenta o servicio?",
    a: "No necesariamente. En muchos casos logramos reducir la tarifa con tu mismo proveedor. Si cambiamos de proveedor, nosotros nos encargamos de que la transición sea sin interrupciones."
  },
  {
    q: "¿Cómo recibo mis ahorros?",
    a: "El ahorro se refleja directamente en tu factura mensual del proveedor de servicios. Savy Home Tech monitorea que el descuento se mantenga activo mes a mes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-violet-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}