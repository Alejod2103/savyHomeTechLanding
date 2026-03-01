import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Términos de Servicio</h1>
          <p className="text-slate-500 mb-12 italic">Última actualización: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Naturaleza del Servicio</h2>
              <p>Savy Home Tech opera exclusivamente como una plataforma de conserjería, auditoría y gestión administrativa independiente. No somos un proveedor de servicios de internet (ISP), televisión o telefonía. Nuestra función es facilitar la comparación y gestión de contratos entre el usuario y los proveedores finales.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Uso del Servicio</h2>
              <p>Al utilizar nuestro portal, usted autoriza a Savy Home Tech a realizar investigaciones de mercado y disponibilidad técnica en su área geográfica. Usted acepta proporcionar información veraz para que la auditoría de ahorro sea precisa.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Limitación de Responsabilidad</h2>
              <p>Savy Home Tech no se hace responsable de las fallas técnicas, interrupciones de servicio o cambios de precios impuestos unilateralmente por los proveedores elegidos (ISP). El contrato de servicio técnico final es estrictamente entre el usuario y el proveedor.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Política de Pagos y Auditoría</h2>
              <p>Cualquier cargo realizado por Savy Home Tech corresponde estrictamente a honorarios por gestión administrativa, monitoreo de tarifas y auditoría. Estos cargos son independientes de la factura mensual del proveedor de internet.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}