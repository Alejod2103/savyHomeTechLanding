import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Términos de Servicio
          </h1>
          <p className="text-slate-500 mb-12 italic">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-justify">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                1. Información Legal e Identificación
              </h2>
              <p>
                El presente sitio web <strong>www.savyhome.tech</strong> es
                operado por <strong>Henry Oswaldo Lopez Carcamo</strong> (en
                adelante, "El Operador"). Savy Home Tech es una marca comercial
                utilizada para la prestación de servicios de consultoría y
                auditoría administrativa independiente. Al acceder a este sitio,
                usted acepta quedar vinculado por estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                2. Declaración de Independencia (No Afiliación)
              </h2>
              <p className="bg-slate-50 p-4 border-l-4 border-slate-900 font-medium">
                <strong>AVISO IMPORTANTE:</strong> Savy Home Tech NO es un
                proveedor de servicios de internet (ISP), televisión por cable o
                telefonía. No somos agentes oficiales, socios comerciales ni
                estamos afiliados de ninguna manera con marcas como Xfinity,
                Spectrum, AT&T, Cox, u otros proveedores mencionados. Nuestra
                labor es estrictamente de{" "}
                <strong>auditoría externa y conserjería administrativa</strong>{" "}
                para ayudar al usuario a optimizar sus contratos vigentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                3. Naturaleza de la Auditoría
              </h2>
              <p>
                El usuario entiende que los ahorros proyectados son estimaciones
                basadas en el análisis de mercado actual y la disponibilidad
                técnica en su zona geográfica. El Operador no garantiza
                resultados específicos, ya que las tarifas finales son
                determinadas exclusivamente por los proveedores de servicios
                (ISP).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                4. Veracidad de la Información y Privacidad
              </h2>
              <p>
                Para realizar una auditoría precisa, el usuario se compromete a
                proporcionar información veraz.
                <strong>Henry Oswaldo Lopez Carcamo</strong> se compromete a no
                vender, ceder ni utilizar su información personal con fines
                distintos a la gestión de su solicitud de ahorro, cumpliendo con
                los estándares de protección de datos vigentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                5. Limitación de Responsabilidad
              </h2>
              <p>
                El Operador no se hace responsable por interrupciones de
                servicio técnico, cambios unilaterales en los contratos por
                parte de los proveedores finales o fallas en la infraestructura
                de telecomunicaciones. Cualquier reclamación técnica debe
                dirigirse al proveedor del servicio contratado.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Contacto Legal
              </h2>
              <p>
                Para cualquier aclaración sobre estos términos, puede contactar
                directamente al responsable:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <strong>Responsable:</strong> Henry Oswaldo Lopez Carcamo
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