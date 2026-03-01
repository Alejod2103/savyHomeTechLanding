"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    currentProvider: "",
    currentBill: "",
    termsAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("leads") // Asegúrate de que tu tabla en Supabase se llame 'leads'
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            zip_code: formData.zipCode,
            provider: formData.currentProvider,
            bill_amount: formData.currentBill,
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
    } catch (error) {
      console.error("Error al guardar en Supabase:", error);
      alert("Hubo un problema. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="auditoria" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-white">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">
                  Inicia tu Auditoría de Ahorro Gratis
                </h2>
                <p className="text-slate-400">
                  Analizamos tu zona para encontrar la mejor tarifa disponible.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  required
                  placeholder="Nombre Completo"
                  className="bg-slate-800 border-slate-700 w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-violet-500"
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="bg-slate-800 border-slate-700 w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-violet-500"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  required
                  type="tel"
                  placeholder="Teléfono"
                  className="bg-slate-800 border-slate-700 w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-violet-500"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <input
                  required
                  placeholder="Código Postal"
                  className="bg-slate-800 border-slate-700 w-full p-4 rounded-xl outline-none focus:ring-2 focus:ring-violet-500"
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                />
                <select
                  className="bg-slate-800 border-slate-700 w-full p-4 rounded-xl outline-none text-slate-400"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentProvider: e.target.value,
                    })
                  }
                >
                  <option value="">Proveedor Actual</option>
                  <option value="xfinity">Xfinity</option>
                  <option value="spectrum">Spectrum</option>
                  <option value="att">AT&T</option>
                </select>
                <select
                  className="bg-slate-800 border-slate-700 w-full p-4 rounded-xl outline-none text-slate-400"
                  onChange={(e) =>
                    setFormData({ ...formData, currentBill: e.target.value })
                  }
                >
                  <option value="">¿Cuánto pagas hoy?</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-150">$100 - $150</option>
                  <option value="150+">$150+</option>
                </select>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 rounded border-slate-700 text-violet-600"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        termsAccepted: e.target.checked,
                      })
                    }
                  />
                  <span className="text-xs text-slate-300 leading-tight italic">
                    Entiendo que Savy Home Tech actúa como un agente
                    independiente. Solicito una auditoría de mis servicios para
                    identificar opciones de ahorro.
                  </span>
                </label>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? "Procesando..." : "Iniciar Mi Auditoría Gratis"}
                {!isSubmitting && <ShieldCheck size={20} />}
              </button>
            </form>
          ) : (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-2">¡Solicitud Enviada!</h2>
              <p className="text-slate-400">
                Un experto se pondrá en contacto contigo en breve.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}