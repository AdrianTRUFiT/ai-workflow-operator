import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { TrendingUp, Clock, RefreshCcw, Zap } from 'lucide-react';

const data = [
  { name: 'Lead Triage', before: 45, after: 5, unit: 'min' },
  { name: 'Task Routing', before: 120, after: 2, unit: 'min' },
  { name: 'Initial Draft', before: 180, after: 15, unit: 'min' },
  { name: 'QA Review', before: 60, after: 10, unit: 'min' },
];

const PerformanceMetrics = () => {
  return (
    <section id="metrics" className="py-20 border-b border-brand-ink/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">03. Measuring Operational Impact</h2>
            <p className="text-brand-ink/60 font-mono text-sm uppercase tracking-wider">
              The final pillar: Quantifying the lift of AI Workflow Architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-white p-4 border border-brand-ink/10 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-brand-accent mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase">Margin Lift</span>
              </div>
              <div className="text-xl md:text-2xl font-bold">+22%</div>
            </div>
            <div className="bg-white p-4 border border-brand-ink/10 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-green-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase">Time Saved</span>
              </div>
              <div className="text-xl md:text-2xl font-bold">84%</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-8 border border-brand-ink/10 rounded-xl shadow-sm h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E4E3E0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontFamily: 'JetBrains Mono', fill: '#141414' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontFamily: 'JetBrains Mono', fill: '#141414' }}
              />
              <Tooltip 
                cursor={{ fill: '#F5F5F5' }}
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: '1px solid #141414',
                  fontFamily: 'JetBrains Mono',
                  fontSize: '10px'
                }}
              />
              <Bar dataKey="before" name="Pre-Operator" fill="#141414" radius={[4, 4, 0, 0]} />
              <Bar dataKey="after" name="Post-Operator" fill="#F27D26" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-ink/5 flex items-center justify-center shrink-0">
              <RefreshCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">Revision Reduction</h4>
              <p className="text-xs text-brand-ink/60">AI-anchored QA loops catch errors before they reach the client, reducing rework by 40%.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-ink/5 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">Routing Automation</h4>
              <p className="text-xs text-brand-ink/60">Zero-touch assignment based on project scope analysis, saving owners 10+ hours weekly.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-ink/5 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">Measurable ROI</h4>
              <p className="text-xs text-brand-ink/60">Every install is tracked against margin. If it doesn't move the needle, we remove it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
