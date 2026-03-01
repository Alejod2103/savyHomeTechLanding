import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-slate-500 mb-12 italic">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-justify">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                El responsable de la recopilación, procesamiento y protección de
                sus datos personales es{" "}
                <strong>Henry Oswaldo Lopez Carcamo</strong>, operador de{" "}
                <strong>www.savyhome.tech</strong>. Nos comprometemos a
                garantizar que su privacidad esté protegida y que sus datos se
                utilicen exclusivamente para los fines de auditoría de servicios
                del hogar que usted solicita.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                2. Información que Recopilamos
              </h2>
              <p>
                Al completar nuestro formulario de auditoría, usted nos
                proporciona voluntariamente los siguientes datos:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Nombre completo.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Número de teléfono de contacto.</li>
                <li>
                  Código postal (necesario para verificar la cobertura técnica
                  de proveedores).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                3. Finalidad y Uso de los Datos
              </h2>
              <p>
                Sus datos son utilizados con el único fin de realizar una{" "}
                <strong>auditoría administrativa independiente</strong>. Esto
                incluye:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  Analizar sus facturas actuales para identificar oportunidades
                  de ahorro.
                </li>
                <li>
                  Comparar planes disponibles de proveedores de servicios en su
                  zona.
                </li>
                <li>
                  Contactarle (vía email, teléfono o SMS) para presentarle los
                  resultados de la auditoría y gestionar, si usted lo desea, el
                  cambio de servicio.
                </li>
              </ul>
              <p className="font-semibold text-slate-900 mt-4">
                IMPORTANTE: Savy Home Tech NO vende, alquila ni distribuye sus
                listas de contactos a terceras empresas con fines publicitarios
                ajenos a nuestro servicio de auditoría.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                4. Consentimiento para el Contacto
              </h2>
              <p>
                Al hacer clic en el botón de envío de nuestro formulario, usted
                otorga su consentimiento explícito para que{" "}
                <strong>Henry Oswaldo Lopez Carcamo</strong> o el equipo de{" "}
                <strong>Savy Home Tech</strong> se comuniquen con usted. Este
                contacto es necesario para cumplir con el servicio de gestión
                administrativa solicitado. Usted puede revocar este
                consentimiento en cualquier momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                5. Seguridad de la Información (Cifrado SSL)
              </h2>
              <p>
                Nos tomamos la seguridad muy en serio. Toda la información
                enviada a través de este sitio web está protegida mediante{" "}
                <strong>tecnología de cifrado SSL (Secure Socket Layer)</strong>{" "}
                de 256 bits, garantizando que sus datos viajen de forma segura
                desde su navegador hasta nuestros servidores protegidos en
                Vercel y Supabase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                6. Derechos del Usuario
              </h2>
              <p>
                Usted tiene derecho a acceder, rectificar o solicitar la
                eliminación de sus datos personales de nuestra base de datos en
                cualquier momento. Para ejercer estos derechos, puede enviar una
                solicitud formal al correo electrónico detallado a continuación.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-slate-200 bg-slate-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Canal de Contacto de Privacidad
              </h2>
              <p>Para asuntos relacionados con la protección de sus datos:</p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Delegado de Datos:</strong> Henry Oswaldo Lopez
                  Carcamo
                </li>
                <li>
                  <strong>Email:</strong> support@savyhome.tech | internetservices75@gmail.com
                </li>
                <li>
                  <strong>Ubicación:</strong> 87 Avenida Sur, San Salvador, El Salvador
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}