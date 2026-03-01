import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Política de Privacidad</h1>
          <p className="text-slate-500 mb-12 italic">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Recolección de Datos</h2>
              <p>Recopilamos información personal (nombre, email, teléfono, código postal) únicamente con el fin de realizar la auditoría de servicios solicitada. Estos datos son esenciales para determinar qué proveedores operan en su ubicación exacta.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso de la Información</h2>
              <p>Sus datos no serán vendidos a terceros con fines publicitarios ajenos a la gestión de sus servicios del hogar. Al enviar el formulario, usted otorga consentimiento explícito para ser contactado por nuestros asesores vía telefónica, email o SMS para fines relacionados con su auditoría.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Protección de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración. Sus datos son procesados bajo estándares de cifrado SSL.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}