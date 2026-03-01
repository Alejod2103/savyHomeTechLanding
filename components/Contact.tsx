import { MapPin, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Estamos aquí para ayudarte</h2>
            <p className="text-slate-500">¿Tienes dudas sobre tu auditoría? Nuestro equipo de expertos está disponible para atenderte personalmente.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-4">
                <MapPin size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Dirección</p>
              <p className="text-sm text-slate-600">13495 Bancroft Ave<br />San leandro, CA 94578</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-4">
                <Mail size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</p>
              <p className="text-sm text-slate-600 font-bold">support@savyhometech.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-violet-50 text-violet-600 rounded-full flex items-center justify-center mb-4">
                <Clock size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Horario</p>
              <p className="text-sm text-slate-600">Lunes a Viernes<br />9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}