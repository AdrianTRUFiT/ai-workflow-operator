import React from 'react';
import { ArrowRight, UserCheck, Bot, ClipboardList, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const LoopTemplates = () => {
  const steps = [
    { icon: UserCheck, label: 'Lead', sub: 'Inbound Signal', id: 'lead' },
    { icon: Bot, label: 'AI Assist', sub: 'Triage & Context', id: 'ai-assist' },
    { icon: ClipboardList, label: 'Assignment', sub: 'Auto-Routing', id: 'assignment' },
    { icon: Send, label: 'Delivery', sub: 'AI-Augmented', id: 'delivery' },
    { icon: ShieldCheck, label: 'QA', sub: 'Loop Closure', id: 'qa' },
  ];

  return (
    <section id="templates" className="py-12 md:py-20 border-b border-brand-ink/20 bg-brand-ink text-brand-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">02. Multi-Step Agentic Loops</h2>
          <p className="text-brand-bg/60 font-mono text-sm uppercase tracking-wider">
            Orchestrating AI outputs into elite human execution.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-brand-bg/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <Link to={`/installs/${step.id}`} className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-brand-bg/20 bg-brand-ink flex items-center justify-center mb-4 md:mb-6 group-hover:border-brand-accent transition-colors duration-500 relative">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-bg group-hover:text-brand-accent transition-colors duration-500" />
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 lg:hidden">
                      <ArrowRight className="w-4 h-4 opacity-20" />
                    </div>
                  )}
                </Link>
                <h3 className="text-base md:text-lg font-bold mb-1">{step.label}</h3>
                <p className="text-xs font-mono opacity-50 uppercase tracking-tighter">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 p-6 md:p-8 border border-brand-bg/10 rounded-lg bg-brand-bg/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-accent">#</span> The Orchestration Layer
              </h4>
              <p className="text-brand-bg/70 text-sm leading-relaxed">
                Most companies know how to prompt. Elite operators know how to orchestrate. We build agentic loops where AI handles the cognitive heavy lifting, then hands off a refined asset to your human team for final execution.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-brand-bg/10 pb-2">
                <span className="text-xs font-mono opacity-50">PHASE 1</span>
                <span className="text-sm">72-Hour Triage</span>
              </div>
              <div className="flex justify-between items-center border-b border-brand-bg/10 pb-2">
                <span className="text-xs font-mono opacity-50">PHASE 2</span>
                <span className="text-sm">Workflow Wiring</span>
              </div>
              <div className="flex justify-between items-center border-b border-brand-bg/10 pb-2">
                <span className="text-xs font-mono opacity-50">PHASE 3</span>
                <span className="text-sm">Margin Stress Test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoopTemplates;
