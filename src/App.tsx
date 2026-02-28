import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuditFramework from './components/AuditFramework';
import LoopTemplates from './components/LoopTemplates';
import PerformanceMetrics from './components/PerformanceMetrics';
import CaseNotes from './components/CaseNotes';
import { motion, AnimatePresence } from 'motion/react';

import LoopDetail from './components/LoopDetail';
import FixerIdentity from './components/FixerIdentity';
import OfferSuite from './components/OfferSuite';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Footer = () => (
  <footer className="py-20 bg-brand-ink text-brand-bg">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <Link to="/" className="text-3xl font-serif mb-6 block hover:text-brand-accent transition-colors">AI Workflow Operator</Link>
          <p className="text-brand-bg/60 text-sm leading-relaxed mb-8">
            Mastering the rare skillset of AI Workflow Architecture. We identify fit, design agentic loops, and connect AI outputs to elite human execution.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-brand-bg/20 rounded-full hover:border-brand-accent transition-colors">
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-brand-bg/20 rounded-full hover:border-brand-accent transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:trufitholdings@gmail.com" className="p-2 border border-brand-bg/20 rounded-full hover:border-brand-accent transition-colors">
              <span className="sr-only">Email</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-6">System</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/audit" className="hover:text-brand-accent transition-colors">Audit Framework</Link></li>
              <li><Link to="/installs" className="hover:text-brand-accent transition-colors">Install Templates</Link></li>
              <li><Link to="/metrics" className="hover:text-brand-accent transition-colors">Performance Metrics</Link></li>
              <li><Link to="/proof" className="hover:text-brand-accent transition-colors">Case Notes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-6">Identity</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/fixer" className="hover:text-brand-accent transition-colors">The Fixer Identity</Link></li>
              <li><Link to="/offers" className="hover:text-brand-accent transition-colors">Offer Suite</Link></li>
              <li><Link to="/triage" className="hover:text-brand-accent transition-colors">72-Hour Triage</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono opacity-30 uppercase tracking-widest">
        <p>© 2026 AI Workflow Operator. All rights reserved.</p>
        <p>Built for agencies wired to margin.</p>
      </div>
    </div>
  </footer>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="pt-16 md:pt-20"
  >
    {children}
  </motion.div>
);

const Home = () => (
  <>
    <Hero />
    <AuditFramework />
    <LoopTemplates />
    <PerformanceMetrics />
    <CaseNotes />
  </>
);

const Triage = () => (
  <div className="container mx-auto px-6 py-12 md:py-20">
    <div className="max-w-4xl mx-auto mb-12 md:mb-20">
      <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-accent mb-4 text-center">The Solution</h2>
      <h1 className="text-5xl md:text-7xl font-serif mb-8 text-center">72-Hour Operations Triage</h1>
      <p className="text-xl text-brand-ink/60 text-center leading-relaxed">
        A fast, non-threatening entry point designed to bridge the "trust gap" by revealing operational "mess" and providing immediate visibility into revenue leaks.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-20">
      {[
        {
          day: 'Day 1',
          title: 'The Bottleneck Audit',
          focus: 'Discovery & Mapping',
          items: [
            'Map 1–2 Core Workflows',
            'Identify Handoff Friction',
            'Locate "Single Point of Failure"',
            'Stack Review (HubSpot, etc.)'
          ],
          goal: 'Map exactly where work gets stuck and identify the "owner-as-router" problem.'
        },
        {
          day: 'Day 2',
          title: 'Revenue Leak Detection',
          focus: 'Diagnostic & Measurement',
          items: [
            'Calculate the "Fixer Tax"',
            'Measure "Speed-to-Lead"',
            'Trace Execution Inconsistency',
            'Margin Erosion Audit'
          ],
          goal: 'Quantify the "survival pains" that are eating into the agency\'s margins.'
        },
        {
          day: 'Day 3',
          title: 'The "No-Regret" Demo',
          focus: 'Strategic Delivery',
          items: [
            'Demo 1–2 "No-Regret" Fixes',
            'Present "Survival Outcome" Report',
            'Anchor the 10-Day Install',
            'Define Success Metrics'
          ],
          goal: 'Validate the operational lift and establish the roadmap for a full-scale workflow installation.'
        }
      ].map((day, i) => (
        <div key={i} className="p-8 bg-white border border-brand-ink/10 rounded-3xl shadow-sm hover:border-brand-accent transition-colors">
          <div className="text-brand-accent font-mono text-xs mb-4">{day.day}</div>
          <h3 className="text-2xl font-serif mb-2">{day.title}</h3>
          <p className="text-sm font-mono uppercase opacity-50 mb-6">{day.focus}</p>
          <p className="text-sm font-bold mb-6">{day.goal}</p>
          <ul className="space-y-3">
            {day.items.map((item, j) => (
              <li key={j} className="flex items-center gap-3 text-xs text-brand-ink/70">
                <div className="w-1 h-1 rounded-full bg-brand-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="max-w-2xl mx-auto text-center p-12 bg-brand-ink text-brand-bg rounded-3xl">
      <h2 className="text-3xl font-serif mb-6">Ready for Triage?</h2>
      <p className="text-brand-bg/60 mb-8">
        By the end of these 72 hours, you'll see a clear path to protecting your client margins.
      </p>
      <a 
        href="https://calendar.app.google/Wwr86m3qtHAXwyes5" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full px-6 py-4 bg-brand-accent text-brand-bg rounded-full font-bold hover:bg-white hover:text-brand-ink transition-colors text-center"
      >
        Request Triage Access
      </a>
    </div>
  </div>
);

const Privacy = () => (
  <div className="container mx-auto px-6 py-40 max-w-2xl">
    <h1 className="text-4xl font-serif mb-8">Privacy Policy</h1>
    <p className="text-brand-ink/70 leading-relaxed mb-6">
      Your data is your margin. We treat it with the same respect we treat our own. 
      This policy outlines how we handle agency data during audits and installs.
    </p>
    <div className="space-y-8">
      <section>
        <h3 className="font-bold mb-2">Data Collection</h3>
        <p className="text-sm text-brand-ink/60">We only collect data necessary for identifying AI fit and measuring operational impact.</p>
      </section>
      <section>
        <h3 className="font-bold mb-2">Data Security</h3>
        <p className="text-sm text-brand-ink/60">All agency data is encrypted and stored in isolated environments. We never use your data to train public models.</p>
      </section>
    </div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      <AnimatePresence mode="wait">
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/audit" element={<PageWrapper><AuditFramework /></PageWrapper>} />
            <Route path="/installs" element={<PageWrapper><LoopTemplates /></PageWrapper>} />
            <Route path="/installs/:stepId" element={<PageWrapper><LoopDetail /></PageWrapper>} />
            <Route path="/metrics" element={<PageWrapper><PerformanceMetrics /></PageWrapper>} />
            <Route path="/proof" element={<PageWrapper><CaseNotes /></PageWrapper>} />
            <Route path="/fixer" element={<PageWrapper><FixerIdentity /></PageWrapper>} />
            <Route path="/offers" element={<PageWrapper><OfferSuite /></PageWrapper>} />
            <Route path="/triage" element={<PageWrapper><Triage /></PageWrapper>} />
            <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          </Routes>
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
