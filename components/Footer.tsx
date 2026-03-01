export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">Aviso Legal Importante</span>
          <p className="text-[10px] md:text-xs text-slate-400 text-justify leading-relaxed font-medium">
            SAVY HOME TECH ES UNA PLATAFORMA INDEPENDIENTE DE CONSERJERÍA Y GESTIÓN ADMINISTRATIVA PARA EL HOGAR. NO ESTAMOS AFILIADOS, RESPALDADOS NI PATROCINADOS POR XFINITY, SPECTRUM, AT&T O NINGÚN OTRO PROVEEDOR DE TELECOMUNICACIONES AQUÍ MENCIONADO. EL PAGO REALIZADO POR EL USUARIO CORRESPONDE AL SERVICIO DE GESTIÓN Y MONITOREO PROFESIONAL. EL SERVICIO DE CONECTIVIDAD FINAL ES PROVISTO DIRECTAMENTE POR EL PROVEEDOR ELEGIDO BAJO SUS PROPIOS TÉRMINOS Y CONDICIONES. TARIFAS REFERENCIALES SUJETAS A CAMBIOS SEGÚN POLÍTICAS DEL PROVEEDOR.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
          <span className="text-sm text-slate-500 font-bold">© {new Date().getFullYear()} SAVY HOME TECH</span>

        <div className="flex gap-6 text-sm text-slate-400 font-medium">
        <a href="/terminos" className="hover:text-violet-600 transition-colors">Términos de Servicio</a>
        <a href="/privacidad" className="hover:text-violet-600 transition-colors">Política de Privacidad</a>
        </div>
        </div>
      </div>
    </footer>
  );
}