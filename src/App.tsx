import { motion } from "motion/react";
import { 
  Menu, 
  ArrowUpRight, 
  MoveRight, 
  Minus,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-outline-variant/10">
    <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-xl italic text-primary tracking-tight">THE SILENT AUTHORITY</div>
      <div className="hidden md:flex items-center space-x-12">
        <a className="font-headline tracking-wide text-lg text-primary border-b border-primary/30 pb-1" href="#">Home</a>
        <a className="font-headline tracking-wide text-lg text-on-surface-variant hover:text-on-surface transition-colors" href="#">Trades</a>
        <a className="font-headline tracking-wide text-lg text-on-surface-variant hover:text-on-surface transition-colors" href="#">Philosophy</a>
        <a className="font-headline tracking-wide text-lg text-on-surface-variant hover:text-on-surface transition-colors" href="#">Contact</a>
      </div>
      <button className="md:hidden text-primary">
        <Menu size={24} strokeWidth={1.5} />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        alt="Dramatic mountain peaks" 
        className="w-full h-full object-cover grayscale opacity-40 scale-105" 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto w-full">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-sans text-sm uppercase tracking-[0.3em] text-secondary mb-6"
      >
        Established MMXIV
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-headline text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-8"
      >
        THE SILENT <br/> AUTHORITY
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-headline text-xl md:text-2xl text-on-surface-variant max-w-xl italic leading-relaxed"
      >
        "Wealth is the ability to fully experience life. We navigate the markets not with noise, but with the quiet precision of calculated intent."
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12"
      >
        <button className="px-10 py-4 bg-surface-container-high text-primary font-sans text-sm uppercase tracking-widest hover:bg-surface-bright transition-all duration-300 rounded-none">
          View Portfolio
        </button>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-32 px-6 md:px-12 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 items-baseline mb-20">
        <h2 className="font-headline text-4xl md:text-5xl flex-shrink-0 mr-24">Performance <br/>Intelligence</h2>
        <p className="font-sans text-on-surface-variant max-w-md text-sm leading-loose">
          Objective data is the only anchor in a sea of volatility. We track metrics that define edge, not just outcome.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/15">
        <div className="pt-12 pb-20 md:pr-12 border-b md:border-b-0 md:border-r border-outline-variant/15">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-8">Win Rate</span>
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-7xl font-light tracking-tighter text-primary">68.4</span>
            <span className="font-sans text-2xl text-primary/60">%</span>
          </div>
          <p className="mt-6 font-sans text-xs text-on-surface-variant/60 leading-relaxed">Consistently maintained over 1,200 execution cycles across diverse asset classes.</p>
        </div>
        <div className="pt-12 pb-20 md:px-12 border-b md:border-b-0 md:border-r border-outline-variant/15">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-8">Profit Factor</span>
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-7xl font-light tracking-tighter text-secondary">2.41</span>
          </div>
          <p className="mt-6 font-sans text-xs text-on-surface-variant/60 leading-relaxed">A testament to the strict risk-to-reward architecture embedded in every entry.</p>
        </div>
        <div className="pt-12 pb-20 md:pl-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-8">Total Return</span>
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-7xl font-light tracking-tighter text-on-surface">+142</span>
            <span className="font-sans text-2xl text-on-surface/60">%</span>
          </div>
          <p className="mt-6 font-sans text-xs text-on-surface-variant/60 leading-relaxed">Cumulative growth since inception, adjusted for maximum drawdown volatility.</p>
        </div>
      </div>
    </div>
  </section>
);

const RecentExecutions = () => (
  <section className="py-32 px-6 md:px-12 bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl mb-4 italic">Recent Executions</h2>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">The anatomy of the last three sessions</p>
        </div>
        <a className="hidden md:block font-sans text-xs uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:text-secondary transition-colors" href="#">Explorer Archive</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 group relative bg-surface-container overflow-hidden">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              alt="Financial chart" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1611974717484-7da00ff12500?auto=format&fit=crop&q=80&w=1200"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary mb-2 block">Long Position</span>
              <h3 className="font-headline text-3xl text-on-surface">ES_F Futures (MAR 24)</h3>
            </div>
            <div className="text-right">
              <span className="font-sans text-xl text-primary font-light">+4.2R</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 block">Snapshot</span>
            <h3 className="font-headline text-2xl text-on-surface mb-6">Curated Momentum: <br/>USD/JPY</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-loose">
              High-timeframe exhaustion played into a structural shift. Captured the initial impulse before the expansion.
            </p>
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-outline-variant/10">
            <span className="font-sans text-xs tabular-nums text-on-surface-variant">24.05.2024</span>
            <ArrowUpRight className="text-primary" size={20} strokeWidth={1.5} />
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container p-8 flex flex-col justify-between border-t border-primary/10">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4 block">Hedge</span>
            <h3 className="font-headline text-2xl text-on-surface mb-6">XAU/USD Gold <br/>Strategic Cover</h3>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-sans text-xs text-on-surface-variant">Closed: Breakeven</span>
            <Minus className="text-on-surface-variant" size={20} strokeWidth={1.5} />
          </div>
        </div>
        <div className="md:col-span-8 bg-surface-container-low p-8 flex items-center justify-between group cursor-pointer hover:bg-surface-bright transition-colors duration-500">
          <div className="flex items-center gap-12">
            <span className="font-sans text-4xl text-outline-variant font-light group-hover:text-primary transition-colors">04</span>
            <div>
              <h3 className="font-headline text-2xl text-on-surface">Equity Dispersion Strategy</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-2">Complex portfolio hedge during high-CPI volatility window.</p>
            </div>
          </div>
          <MoveRight className="text-on-surface-variant group-hover:translate-x-2 transition-transform" size={32} strokeWidth={1} />
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="py-32 bg-surface-container-lowest overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/10 z-0"></div>
        <img 
          alt="Minimalist office" 
          className="relative z-10 w-full aspect-[4/5] object-cover grayscale" 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h2 className="font-headline text-5xl md:text-7xl mb-12 leading-tight">Philosophy <br/>over <br/><span className="italic text-primary">Prediction.</span></h2>
        <div className="space-y-8">
          <div className="group">
            <h4 className="font-headline text-xl text-secondary mb-2 tracking-wide">The Law of Silence</h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">The more you speak about a trade, the more you attach your ego to its outcome. We operate in the shadows of the tape.</p>
          </div>
          <div className="group">
            <h4 className="font-headline text-xl text-secondary mb-2 tracking-wide">Asymmetric Risk</h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">We do not bet on being right. We bet on the mathematical certainty that when we are wrong, it costs us nothing, and when we are right, it pays for a lifetime.</p>
          </div>
          <div className="group">
            <h4 className="font-headline text-xl text-secondary mb-2 tracking-wide">Emotional Equilibrium</h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">The charts are a mirror. If you see chaos, the chaos is within you. We seek the stillness required to see the order.</p>
          </div>
        </div>
        <div className="mt-16">
          <a className="inline-flex items-center gap-4 group" href="#">
            <span className="font-sans text-xs uppercase tracking-[0.3em] group-hover:text-primary transition-colors">Read the Manifesto</span>
            <div className="w-12 h-[1px] bg-outline-variant group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-20 px-6 md:px-12 border-t border-outline-variant/15 bg-background">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end w-full">
      <div className="w-full md:w-auto mb-12 md:mb-0">
        <div className="font-headline text-2xl text-primary mb-4">THE SILENT AUTHORITY</div>
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant opacity-80">
          © 2024 THE SILENT AUTHORITY. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end w-full md:w-auto">
        <div className="flex gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Twitter size={18} strokeWidth={1.5} /></a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Linkedin size={18} strokeWidth={1.5} /></a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Mail size={18} strokeWidth={1.5} /></a>
        </div>
        <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40">
          DISCRETE EXECUTION SINCE 2014
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <RecentExecutions />
      <Philosophy />
      <Footer />
    </div>
  );
}
