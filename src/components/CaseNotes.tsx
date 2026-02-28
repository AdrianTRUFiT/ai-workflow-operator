import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Quote } from 'lucide-react';

import { Link } from 'react-router-dom';

const CaseNotes = () => {
  const cases = [
    {
      agency: 'Creative Pulse',
      type: 'Design Agency',
      problem: 'Owner spent 4 hours/day triaging Slack & Email.',
      solution: 'AI Workflow Operator installed a Lead → Assist → Assignment loop.',
      result: 'Owner triage time reduced to 15 mins. Margin increased by 18%.'
    },
    {
      agency: 'ScaleOps',
      type: 'Performance Marketing',
      problem: 'AI copy tools produced "slop" that required 90% manual rework.',
      solution: 'Context-anchored prompt loops with automated QA checkpoints.',
      result: 'Rework rate dropped to 12%. Output volume tripled with same headcount.'
    },
    {
      agency: 'Nexus Dev',
      type: 'Software Studio',
      problem: 'Scope creep and missed handoffs in complex dev cycles.',
      solution: 'AI-powered PM loop that auto-updates documentation and alerts.',
      result: 'Project delivery speed increased by 25%. Zero missed handoffs in 90 days.'
    }
  ];

  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">AI Case Notes</h2>
          <p className="text-brand-ink/60 font-mono text-[10px] md:text-sm uppercase tracking-wider">
            Real-world proof of operational lift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-ink/10 border border-brand-ink/10">
          {cases.map((note, index) => (
            <motion.div 
              key={note.agency}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-bg p-6 md:p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg md:text-xl font-bold">{note.agency}</h3>
                  <p className="text-[10px] font-mono opacity-50 uppercase">{note.type}</p>
                </div>
                <Quote className="w-5 h-5 md:w-6 md:h-6 opacity-10" />
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] font-mono uppercase opacity-50 mb-1">The Problem</p>
                  <p className="text-sm">"{note.problem}"</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase opacity-50 mb-1">The Operator Solution</p>
                  <p className="text-sm">{note.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-ink/10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-accent uppercase">Result</span>
                  <span className="text-[10px] font-mono">{note.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/triage" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-ink text-brand-bg rounded-full font-bold overflow-hidden">
            <span className="relative z-10">Request Your 72-Hour Triage</span>
            <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseNotes;
