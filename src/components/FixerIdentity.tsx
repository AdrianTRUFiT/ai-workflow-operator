import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Zap, Users, Briefcase, TrendingUp, Cpu, Layers } from 'lucide-react';

const FixerIdentity = () => {
  const coreFunctions = [
    {
      title: 'Diagnosing Breakdown',
      desc: 'Identifying where organizational workflows fail despite the presence of AI tools.',
      icon: Target
    },
    {
      title: 'Identifying Friction',
      desc: 'Pinpointing operational friction in the "spaces between people" — handoffs, queues, and bottlenecks.',
      icon: Users
    },
    {
      title: 'Installing Loops',
      desc: 'Deploying multi-step, agentic workflow loops that integrate AI into human execution.',
      icon: Zap
    },
    {
      title: 'Converting Automation',
      desc: 'Turning fragmented automation into cohesive operational systems that deliver results.',
      icon: Layers
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-brand-accent mb-4">Identity Definition</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Adrian TRUFiT McKenzie</h1>
          <p className="text-xl md:text-2xl font-mono uppercase tracking-widest opacity-60">Primary Role: AI Operational Fixer</p>
        </div>

        <section className="mb-12 md:mb-20 p-8 md:p-12 bg-white border border-brand-ink/10 rounded-3xl shadow-sm">
          <h3 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-8 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Formal Definition
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed text-brand-ink/80">
            An AI Operational Fixer is a practitioner who installs, repairs, and optimizes AI-powered workflow systems to ensure they produce measurable operational outcomes rather than isolated automation outputs.
          </p>
          <p className="mt-6 text-brand-ink/60 leading-relaxed">
            This role operates at the application and workflow layer of artificial intelligence, focusing on execution continuity, margin protection, and human-AI coordination within real business environments.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-20">
          {coreFunctions.map((func, i) => (
            <div key={i} className="p-8 border border-brand-ink/10 rounded-2xl hover:border-brand-accent transition-colors group">
              <func.icon className="w-8 h-8 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold mb-3">{func.title}</h4>
              <p className="text-sm text-brand-ink/60 leading-relaxed">{func.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 md:mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-6">Problem Domain</h3>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif">AI Adoption Without Operational Impact</h4>
                <p className="text-brand-ink/70">Persistent rework, inconsistent execution, delayed handoffs, and owner dependency as decision routers.</p>
              </div>
            </section>
            <section>
              <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-6">Value Delivered</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Protection of client margins',
                  'Reduction of rework',
                  'Increased decision flow speed',
                  'Removal of owner bottlenecks',
                  'Workflow efficiency lift'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="space-y-8">
            <div className="p-6 bg-brand-ink text-brand-bg rounded-2xl">
              <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-4">Our Delivery Model</h3>
              <p className="text-lg font-bold mb-2">AI Virtual Agency</p>
              <p className="text-xs opacity-70 leading-relaxed">The operational unit responsible for workflow implementation, white-label partnerships, and scalable service delivery.</p>
            </div>
            <div className="p-6 border border-brand-ink/10 rounded-2xl">
              <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-4">Our Expertise</h3>
              <p className="text-xs leading-relaxed">Operating at the intersection of AI workflow orchestration, operational systems design, and applied agentic automation.</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-ink/10 text-center">
          <p className="text-sm font-mono uppercase tracking-widest opacity-40">Category Classification</p>
          <p className="text-sm font-bold mt-2">Agentic Workflow Systems — AI Application Layer</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FixerIdentity;
