import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserCheck, Bot, ClipboardList, Send, ShieldCheck, ArrowLeft, CheckCircle2, Zap, Target } from 'lucide-react';
import { motion } from 'motion/react';

const loopData = {
  lead: {
    title: 'Inbound Signal Architecture',
    icon: UserCheck,
    description: 'The first step in any elite workflow is capturing the inbound signal with absolute precision. We don\'t just "get a lead"; we architect a data-rich entry point.',
    features: [
      'Automated data enrichment from 15+ sources',
      'Intent-based scoring using custom LLM logic',
      'Zero-latency response triggers',
      'Context-aware lead qualification'
    ],
    benefits: [
      'Eliminate manual data entry for sales teams',
      'Increase lead-to-meeting conversion by 30%+',
      'Identify high-value targets before the competition',
      'Standardize inbound context for the entire agency'
    ]
  },
  'ai-assist': {
    title: 'AI Triage & Context Layer',
    icon: Bot,
    description: 'This is where the cognitive heavy lifting begins. Our AI agents analyze the inbound signal to build a comprehensive context package for your team.',
    features: [
      'Multi-agent document analysis',
      'Automated brief generation',
      'Historical data cross-referencing',
      'Sentiment and urgency detection'
    ],
    benefits: [
      'Reduce prep time for humans by 80%',
      'Ensure 100% consistency in project briefs',
      'Surface hidden risks before work starts',
      'Scale cognitive capacity without headcount'
    ]
  },
  assignment: {
    title: 'Auto-Routing & Resource Allocation',
    icon: ClipboardList,
    description: 'Stop playing project manager. Our loops analyze the scope and automatically route tasks to the best-fit human executor based on skill and capacity.',
    features: [
      'Skill-matching algorithms',
      'Real-time capacity monitoring',
      'Automated task creation in PM tools',
      'Priority-based routing logic'
    ],
    benefits: [
      'Save owners 10+ hours weekly on task delegation',
      'Eliminate bottlenecks in project assignment',
      'Optimize team utilization for maximum margin',
      'Reduce human error in task handoffs'
    ]
  },
  delivery: {
    title: 'AI-Augmented Delivery',
    icon: Send,
    description: 'Humans do the creative work; AI does the structural work. We wire AI into the delivery phase to augment human output and speed up the final mile.',
    features: [
      'AI-powered draft generation',
      'Automated asset formatting',
      'Context-aware content suggestions',
      'Real-time research assistance'
    ],
    benefits: [
      'Triple output volume with the same team size',
      'Reduce time-to-delivery by 40%+',
      'Maintain elite quality at scale',
      'Free up humans for high-level strategy'
    ]
  },
  qa: {
    title: 'Automated Loop Closure (QA)',
    icon: ShieldCheck,
    description: 'The final checkpoint. AI agents perform a rigorous QA check against the original brief to ensure zero rework and 100% client satisfaction.',
    features: [
      'Automated brief-to-output verification',
      'Technical specification checking',
      'Brand voice consistency audit',
      'Automated feedback loops'
    ],
    benefits: [
      'Reduce rework rates to < 5%',
      'Eliminate the "QA bottleneck"',
      'Protect agency reputation with every delivery',
      'Close the loop on operational margin'
    ]
  }
};

const LoopDetail = () => {
  const { stepId } = useParams<{ stepId: string }>();
  const data = loopData[stepId as keyof typeof loopData];

  if (!data) {
    return (
      <div className="container mx-auto px-6 py-40 text-center">
        <h1 className="text-4xl font-serif mb-8">Loop Step Not Found</h1>
        <Link to="/installs" className="text-brand-accent hover:underline">Return to Installs</Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="container mx-auto px-6 py-20">
      <Link to="/installs" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back to Installs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-20 h-20 rounded-full bg-brand-ink text-brand-bg flex items-center justify-center mb-8">
            <Icon className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">{data.title}</h1>
          <p className="text-xl text-brand-ink/70 leading-relaxed mb-12">
            {data.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white border border-brand-ink/10 rounded-xl">
              <Zap className="w-5 h-5 text-brand-accent" />
              <span className="font-bold">Elite Orchestration Layer</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-brand-ink/10 rounded-xl">
              <Target className="w-5 h-5 text-brand-accent" />
              <span className="font-bold">Wired to Agency Margin</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-6">Key Features</h3>
            <div className="grid grid-cols-1 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-brand-ink/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-brand-ink text-brand-bg rounded-2xl"
          >
            <h3 className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-6">Operational Benefits</h3>
            <div className="grid grid-cols-1 gap-4">
              {data.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2" />
                  <span className="text-brand-bg/80">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoopDetail;
