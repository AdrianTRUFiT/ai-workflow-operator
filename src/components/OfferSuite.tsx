import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Zap, Clock, TrendingUp, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferSuite = () => {
  const offers = [
    {
      title: '72-Hour Operations Triage',
      goal: 'A rapid diagnostic to identify revenue leaks and map operational bottlenecks.',
      scope: 'Audit 1–2 specific workflows, map where work gets stuck, and demo 1–2 "no-regret" repairs inside your existing stack (HubSpot, HighLevel, etc.).',
      price: '$500–$1,500',
      timeline: '3 Days',
      icon: Clock,
      link: '/triage'
    },
    {
      title: '10-Day Workflow Install',
      goal: 'Deployment of a production-ready operational loop that provides immediate relief.',
      scope: 'Build, test, and train your team on a tightly scoped loop (e.g., automated lead-to-quote or intake-to-assignment).',
      price: '$2,000–$5,000 base + performance bonus',
      timeline: '10 Days post-triage',
      icon: Zap,
      link: '/installs'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-accent mb-4">Engagement Models</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Operational Repair & Scale</h1>
          <p className="text-xl md:text-2xl text-brand-ink/60 max-w-3xl mx-auto leading-relaxed">
            Protecting agency margins and accelerating delivery through elite AI workflow orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 md:mb-20">
          <section className="p-10 bg-white border border-brand-ink/10 rounded-3xl shadow-sm">
            <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-8 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Value Proposition
            </h3>
            <h4 className="text-2xl font-serif mb-6">The Operational Fixer</h4>
            <p className="text-brand-ink/70 leading-relaxed mb-8">
              We solve the "spaces between people"—the handoffs, queues, and approvals where revenue leaks and execution slows down.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                <div>
                  <p className="font-bold text-sm mb-1 uppercase tracking-wider">Our Focus</p>
                  <p className="text-sm text-brand-ink/60">Survival Outcomes: We prioritize margin protection, reduced rework, and owner de-loading.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                <div>
                  <p className="font-bold text-sm mb-1 uppercase tracking-wider">The Challenge We Solve</p>
                  <p className="text-sm text-brand-ink/60">Eliminating sloppy handoffs and inconsistent execution that erodes agency profitability.</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 p-6 bg-brand-bg rounded-xl border border-brand-ink/5">
              <p className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">The Promise</p>
              <p className="text-lg font-serif leading-tight">
                "Ship faster and protect your margins. We install white-label AI operations that allow your team to execute at elite levels without constant oversight."
              </p>
            </div>
          </section>

          <section className="p-10 bg-brand-ink text-brand-bg rounded-3xl shadow-2xl flex flex-col">
            <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-8 flex items-center gap-2">
              <Target className="w-4 h-4" /> Partnership Model
            </h3>
            <h4 className="text-2xl font-serif mb-6">White-Label Orchestration</h4>
            <p className="text-brand-bg/70 leading-relaxed mb-8 flex-grow">
              Scale your agency's capabilities without increasing headcount. We provide the technical orchestration layer that allows your team to focus on high-level strategy while we handle the operational repair.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-brand-accent shrink-0" />
                <div>
                  <p className="font-bold text-sm mb-1 uppercase tracking-wider">The Advantage</p>
                  <p className="text-sm text-brand-bg/60">We act as your behind-the-scenes orchestration partner, installing AI-driven loops that allow your agency to deliver faster and more profitably.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-20">
          {offers.map((offer, i) => (
            <div key={i} className="p-10 border border-brand-ink/10 rounded-3xl bg-white hover:border-brand-accent transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full bg-brand-ink text-brand-bg flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                  <offer.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono uppercase tracking-widest opacity-50 mb-1">Timeline</p>
                  <p className="text-sm font-bold">{offer.timeline}</p>
                </div>
              </div>
              <h4 className="text-2xl font-serif mb-4">{offer.title}</h4>
              <p className="text-sm text-brand-ink/80 font-bold mb-4">{offer.goal}</p>
              <p className="text-sm text-brand-ink/60 leading-relaxed mb-8">{offer.scope}</p>
              <div className="flex justify-between items-center pt-8 border-t border-brand-ink/10">
                <div className="flex items-center gap-2 text-brand-accent">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-lg font-bold">{offer.price}</span>
                </div>
                <Link to={offer.link} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-brand-accent transition-colors">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-8">Our Implementation Framework</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { step: '01', title: 'Identify One Wedge Problem', desc: 'We focus on rework, handoffs, or the "owner-as-router" bottleneck to provide immediate relief.' },
                  { step: '02', title: 'Rapid Deployment', desc: 'Transition from diagnostic insights directly into production-ready workflow installs.' },
                  { step: '03', title: 'Focused Impact', desc: 'We specialize in agency workflows, ensuring deep expertise in your specific operational challenges.' },
                  { step: '04', title: 'Measurable Proof', desc: 'Every engagement concludes with a performance report documenting the exact operational lift achieved.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl font-serif text-brand-accent opacity-30">{item.step}</span>
                    <div>
                      <h5 className="font-bold text-sm mb-2">{item.title}</h5>
                      <p className="text-sm text-brand-ink/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="p-8 bg-brand-bg rounded-2xl border border-brand-ink/5">
            <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-6">Operational Philosophy</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold uppercase mb-2">Outcome-Based Pricing</p>
                <p className="text-sm text-brand-ink/60 leading-relaxed">We align our incentives with your profitability. Our "base + bonus" model ensures we only win when you save time and protect margin.</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase mb-2">The "Demand Engine" Vision</p>
                <p className="text-sm text-brand-ink/60 leading-relaxed">We build systems that not only repair current leaks but create the operational capacity for your next stage of growth.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferSuite;
