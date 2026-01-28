import React from "react";
import { HubSpotForm } from "./HubSpotForm";
import { Check } from "lucide-react";

export function FormSection() {
  return (
    <section className="py-32 bg-[#13141b] relative overflow-hidden border-t border-[#2e313c]">
      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start justify-between">
          
          <div className="lg:w-1/2 pt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Get early access
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg font-medium">
               Join thousands of teams building better relationships with data. Get priority access to oNabu AI.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "AI-Powered Analysis",
                "Automated Enrichment",
                "Real-time Sync",
                "Custom Workflows",
                "API Access",
                "Priority Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-[#2e313c]">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10">
                    <Check className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="text-slate-300 text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[460px] w-full">
            <HubSpotForm />
          </div>

        </div>
      </div>
    </section>
  );
}
