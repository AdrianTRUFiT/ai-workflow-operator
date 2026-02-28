import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-start overflow-hidden border-b border-brand-ink/20 pt-32 md:pt-48">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 text-center lg:text-left">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.1] lg:leading-[0.9] mb-8"
            >
              Mastering AI <br />
              <span className="text-brand-accent">Workflow Architecture.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-brand-ink/70 max-w-2xl leading-relaxed mb-12 mx-auto lg:mx-0"
            >
              Anyone can prompt. We orchestrate. We identify AI fit, design multi-step agentic loops, and connect AI outputs to elite human execution.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center lg:justify-start"
            >
              <Link to="/triage" className="px-8 py-4 bg-brand-ink text-brand-bg rounded-full font-bold hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
                Start 72-Hour Triage
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-4 text-xs font-mono opacity-50">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  No Fluff
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Outcome Driven
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block w-80 shrink-0"
          >
            <div className="p-6 border border-brand-ink/10 rounded-2xl bg-white shadow-2xl rotate-3">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono opacity-50">OPERATOR_LOG_v1.0</span>
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-brand-ink/5 rounded" />
                <div className="h-2 w-3/4 bg-brand-ink/5 rounded" />
                <div className="h-2 w-1/2 bg-brand-accent/20 rounded" />
                <div className="pt-4 border-t border-brand-ink/10">
                  <p className="text-[10px] font-mono mb-2">CURRENT_WEDGE:</p>
                  <p className="text-xs font-bold leading-tight uppercase">
                    "Margin is the outcome. AI is the lever."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
