import React from 'react';
import { 
  Search, 
  AlertCircle, 
  Zap, 
  BarChart3, 
  ClipboardCheck, 
  HelpCircle, 
  TrendingDown, 
  Target,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const AuditFramework = () => {
  const auditPhases = [
    {
      title: 'Phase 01: Tool Inventory & Cost Audit',
      description: 'Identifying the "AI Tax"—tools that are paid for but underutilized or failing to deliver.',
      icon: ClipboardCheck,
      questions: [
        'What is the total monthly spend on specialized AI tools (Jasper, Copy.ai, etc.)?',
        'Which tools have a seat utilization rate below 40%?',
        'Is the output of these tools requiring 80%+ manual rework by senior staff?'
      ],
      metrics: [
        { label: 'Seat Utilization', value: '< 40%', status: 'Critical' },
        { label: 'Rework Ratio', value: '> 80%', status: 'Critical' },
        { label: 'Monthly AI Spend', value: '$$$', status: 'Audit' }
      ]
    },
    {
      title: 'Phase 02: Workflow Friction Analysis',
      description: 'Locating the "Spaces Between People" where work gets stuck or duplicated.',
      icon: HelpCircle,
      questions: [
        'Where does the owner act as a "human router" for tasks?',
        'Which handoffs between departments take longer than 24 hours?',
        'Are team members manually copying data between AI tools and PM software?'
      ],
      metrics: [
        { label: 'Handoff Latency', value: '> 24h', status: 'Warning' },
        { label: 'Owner Routing Time', value: '4h/day', status: 'Critical' },
        { label: 'Manual Data Syncs', value: '10+/day', status: 'Warning' }
      ]
    },
    {
      title: 'Phase 03: ROI & Margin Evaluation',
      description: 'Quantifying the actual impact on agency profitability and delivery speed.',
      icon: BarChart3,
      questions: [
        'Has the cost-per-deliverable decreased since implementing AI?',
        'Is the agency able to handle 20% more volume with the same headcount?',
        'Are client revision rates increasing due to "AI slop"?'
      ],
      metrics: [
        { label: 'Margin Lift', value: 'Target 15%+', status: 'Goal' },
        { label: 'Revision Rate', value: '< 5%', status: 'Goal' },
        { label: 'Capacity Increase', value: '2x', status: 'Goal' }
      ]
    }
  ];

  const diagnosticPoints = [
    {
      id: 'copy',
      title: 'AI Copy Tools',
      symptom: 'Output requires 80%+ manual rewrite',
      fix: 'Context-anchored prompt loops',
      impact: 'High'
    },
    {
      id: 'crm',
      title: 'CRM Automation',
      symptom: 'Leads falling through gaps despite "auto-flow"',
      fix: 'AI-assisted lead triage & routing',
      impact: 'Critical'
    },
    {
      id: 'pm',
      title: 'Project Management',
      symptom: 'Owner still manually assigning every task',
      fix: 'AI-powered scope-to-assignment loop',
      impact: 'High'
    },
    {
      id: 'qa',
      title: 'Quality Assurance',
      symptom: 'Rework rates > 15%',
      fix: 'Automated AI QA checkpoints',
      impact: 'Medium'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-brand-ink/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-accent mb-4">The Methodology</h2>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">AI Workflow Audit Framework</h1>
            <p className="text-xl md:text-2xl text-brand-ink/60 leading-relaxed">
              A systematic guide to identifying underperforming AI tools and workflows that are eroding your agency's margins.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Phases */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {auditPhases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 bg-white border border-brand-ink/10 rounded-3xl shadow-sm"
              >
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-full bg-brand-ink text-brand-bg flex items-center justify-center mb-6">
                    <phase.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{phase.title}</h3>
                  <p className="text-brand-ink/60 text-sm leading-relaxed mb-8">{phase.description}</p>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-mono uppercase tracking-widest opacity-50">Evaluation Metrics</p>
                    <div className="grid grid-cols-1 gap-2">
                      {phase.metrics.map((metric, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-brand-bg rounded-xl border border-brand-ink/5">
                          <span className="text-xs font-bold">{metric.label}</span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            metric.status === 'Critical' ? 'text-red-500 border-red-500' : 
                            metric.status === 'Warning' ? 'text-brand-accent border-brand-accent' :
                            'text-green-600 border-green-600'
                          }`}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="bg-brand-bg/50 p-8 rounded-2xl border border-brand-ink/5 h-full">
                    <h4 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-8 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4" /> Key Audit Questions
                    </h4>
                    <div className="space-y-8">
                      {phase.questions.map((question, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <span className="text-2xl font-serif text-brand-accent opacity-30">0{i + 1}</span>
                          <p className="text-lg text-brand-ink/80 leading-snug">{question}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 p-6 bg-brand-ink text-brand-bg rounded-xl">
                      <p className="text-sm font-mono uppercase tracking-widest opacity-50 mb-2">Fixer Insight</p>
                      <p className="text-sm italic opacity-80">
                        "If you can't answer these questions with hard data, your AI implementation is a cost center, not a profit driver."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flag Scoring Section */}
      <section className="py-12 md:py-20 bg-brand-bg border-y border-brand-ink/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-accent mb-4">Self-Diagnostic</h2>
              <h3 className="text-4xl font-serif mb-6">The "Underperformance" Red Flags</h3>
              <p className="text-brand-ink/60">If you check more than 3 of these, your AI stack is actively leaking margin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "You pay for 5+ different AI subscriptions but use the same 2 prompts.",
                "Senior staff spends more time 'fixing' AI output than they did doing the work manually.",
                "The owner is still the primary 'router' for all client requests.",
                "Handoffs between sales and delivery require manual data re-entry.",
                "You have 'AI tools' that no one on the team has logged into in 30 days.",
                "Client revision rates have increased since you started using AI.",
                "Your team feels 'busier' but deliverable volume hasn't increased.",
                "You don't know the exact cost-per-deliverable for your core services."
              ].map((flag, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white border border-brand-ink/5 rounded-2xl shadow-sm hover:border-red-200 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-1">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-brand-ink/80 leading-relaxed">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculation Logic */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-accent mb-4">ROI Evaluation</h2>
                <h3 className="text-4xl font-serif mb-8">The Operator's ROI Formula</h3>
                <p className="text-brand-ink/60 mb-8 leading-relaxed">
                  We don't measure ROI in "coolness." we measure it in **Margin Lift**. Our audit evaluates your stack against this fundamental equation:
                </p>
                <div className="p-8 bg-brand-ink text-brand-bg rounded-3xl font-mono text-center mb-8">
                  <p className="text-sm opacity-50 mb-4 uppercase tracking-widest">The Margin Equation</p>
                  <p className="text-2xl md:text-3xl leading-tight">
                    (Output Volume × Price) - (Labor Cost + AI Tax) = <span className="text-brand-accent">Margin</span>
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Labor Cost: Total hours spent per deliverable (including rework).",
                    "AI Tax: Monthly subscription costs + training time.",
                    "Output Volume: Number of high-quality deliverables shipped per month."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-brand-ink/70">
                      <TrendingDown className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-bg p-8 rounded-3xl border border-brand-ink/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <h4 className="text-xl font-serif mb-6">Measurable Benchmarks</h4>
                <div className="space-y-6">
                  {[
                    { label: "Elite Performance", value: "80% Reduction in Rework", desc: "AI handles 90% of the structural work; humans handle 100% of the creative nuance." },
                    { label: "Healthy Margin", value: "25% Increase in Capacity", desc: "Same team size, 25% more client volume without burnout." },
                    { label: "Operational Speed", value: "< 15m Handoff Latency", desc: "Zero-touch routing between departments via agentic loops." }
                  ].map((bench, i) => (
                    <div key={i} className="p-4 bg-white rounded-xl border border-brand-ink/5">
                      <p className="text-sm font-mono uppercase text-brand-accent mb-1">{bench.label}</p>
                      <p className="text-lg font-bold mb-1">{bench.value}</p>
                      <p className="text-xs text-brand-ink/60 leading-relaxed">{bench.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Grid (Legacy/Quick View) */}
      <section className="py-12 md:py-20 bg-brand-ink text-brand-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Common AI Failure Points</h2>
            <p className="text-brand-bg/60 font-mono text-sm uppercase tracking-wider">
              Quick-scan diagnostic for immediate operational repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-bg/10 border border-brand-bg/10">
            {diagnosticPoints.map((point, index) => (
              <Link 
                key={point.id} 
                to="/triage"
                className="bg-brand-ink p-8 hover:bg-brand-bg hover:text-brand-ink transition-colors duration-300 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-mono opacity-50">0{index + 1}</span>
                  <Zap className="w-4 h-4 text-brand-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase opacity-50 mb-1">Symptom</p>
                    <p className="text-xs opacity-80">{point.symptom}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase opacity-50 mb-1">Repair</p>
                    <p className="text-xs font-bold text-brand-accent">{point.fix}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-white border border-brand-ink/10 rounded-3xl shadow-sm">
            <Target className="w-12 h-12 text-brand-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif mb-6">Ready for a Professional Audit?</h2>
            <p className="text-brand-ink/60 mb-8 leading-relaxed">
              Stop guessing where your margin is leaking. Our 72-hour triage applies this framework to your specific agency stack to reveal exactly where AI is failing you.
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://calendar.app.google/Wwr86m3qtHAXwyes5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-brand-ink text-brand-bg rounded-full font-bold items-center gap-2 mx-auto hover:bg-brand-accent transition-colors"
            >
              Request Triage Access <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditFramework;
