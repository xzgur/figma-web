import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function HubSpotForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-[#0A0A0A] p-8 rounded-xl text-center border border-white/10 h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-white mb-2">Message received</h3>
        <p className="text-slate-400 text-sm">We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] p-8 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle top light */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="mb-8">
        <h3 className="text-xl font-medium text-white mb-2">Contact Sales</h3>
        <p className="text-slate-400 text-sm">
          Discuss your needs with our team.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstname" className="text-slate-400 text-xs uppercase tracking-wider font-semibold">First Name</Label>
            <Input id="firstname" placeholder="Jane" className="bg-[#000000] border-white/10 text-white placeholder:text-slate-600 focus:border-white/20 focus:ring-0 rounded-lg h-10" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname" className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Last Name</Label>
            <Input id="lastname" placeholder="Doe" className="bg-[#000000] border-white/10 text-white placeholder:text-slate-600 focus:border-white/20 focus:ring-0 rounded-lg h-10" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Work Email</Label>
          <Input id="email" type="email" placeholder="jane@company.com" className="bg-[#000000] border-white/10 text-white placeholder:text-slate-600 focus:border-white/20 focus:ring-0 rounded-lg h-10" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Company</Label>
          <Input id="company" placeholder="Acme Inc." className="bg-[#000000] border-white/10 text-white placeholder:text-slate-600 focus:border-white/20 focus:ring-0 rounded-lg h-10" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Message</Label>
          <textarea 
            id="message" 
            rows={4} 
            className="flex w-full rounded-lg border border-white/10 bg-[#000000] px-3 py-2 text-sm text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-white/20 resize-none"
            placeholder="Tell us about your team..."
          />
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full bg-white text-black hover:bg-slate-200 font-medium h-10 text-sm rounded-lg transition-colors">
            Send Request
          </Button>
        </div>
      </form>
    </div>
  );
}