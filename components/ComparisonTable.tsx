import { Check, ArrowRight } from 'lucide-react';

const providers = [
  { name: 'Xfinity', price: '35.00', speed: '200 Mbps', featured: true },
  { name: 'AT&T Fiber', price: '55.00', speed: '1000 Mbps', featured: false },
  { name: 'Spectrum', price: '49.99', speed: '300 Mbps', featured: true },
  { name: 'Optimum', price: '65.00', speed: '500 Mbps', featured: false },
  { name: 'T-Mobile', price: '45.00', speed: '5G wireless', featured: true },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Compara Ofertas Locales</h2>
          <p className="text-slate-600">Precios referenciales basados en promedios del mercado actual.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Proveedor</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Precio Desde</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Velocidad Hasta</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {providers.map((item, idx) => (
                  <tr key={idx} className={`hover:bg-slate-50 transition-colors ${item.featured ? 'bg-violet-50/30' : ''}`}>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900 text-lg">{item.name}</span>
                        {item.featured && (
                          <span className="bg-violet-100 text-violet-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Mejor Valor</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-slate-900">${item.price}</span>
                        <span className="text-slate-400 text-xs font-medium">/mes</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-slate-600 font-medium">
                      {item.speed}
                    </td>
                    <td className="px-6 py-6 text-right">
                      <a href="#auditoria" className="inline-flex items-center gap-2 text-violet-600 font-bold hover:text-violet-700 transition-colors group">
                        Ver opciones <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 mt-4 text-center italic">
          *Savy Home Tech es una plataforma independiente. Los logotipos y nombres son propiedad de sus respectivos dueños.
        </p>
      </div>
    </section>
  );
}