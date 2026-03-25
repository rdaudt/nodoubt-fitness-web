/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Bolt, 
  CheckCircle2, 
  Globe, 
  Dumbbell, 
  ArrowUpRight, 
  BarChart3, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin,
  ChevronDown,
  Link as LinkIcon,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
    <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-black tracking-tighter text-white uppercase font-headline">
        NODOUBT FITNESS
      </div>
      <div className="hidden md:flex items-center gap-x-8">
        <a className="text-white font-bold border-b-2 border-primary-orange pb-1" href="#about">About</a>
        <a className="text-zinc-400 font-medium hover:text-white transition-colors" href="#services">Services</a>
        <a className="text-zinc-400 font-medium hover:text-white transition-colors" href="#nutrition">Nutrition</a>
        <a className="text-zinc-400 font-medium hover:text-white transition-colors" href="#contact">Contact</a>
      </div>
      <button className="bg-primary-orange text-white px-6 py-2 font-black text-sm tracking-widest rounded-sm hover:scale-95 active:scale-90 transition-transform uppercase font-headline">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#131313]">
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover opacity-40 grayscale" 
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
        alt="Trainer lifting weights"
        referrerPolicy="no-referrer"
        onLoad={(e) => (e.currentTarget.style.opacity = '0.4')}
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <motion.div 
        initial={{ opacity: 0.01, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <span className="inline-block bg-secondary-lime text-black font-black text-xs tracking-[0.2em] px-3 py-1 mb-6 rounded-sm uppercase font-headline">
          Gabriel Daudt Performance
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] italic font-headline uppercase">
          Eliminate the doubt.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange-light to-primary-orange">Build the power.</span>
        </h1>
        <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mb-12 font-medium">
          Stop guessing. Start executing. Elite-level science-based coaching for those who demand more from themselves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary-orange text-white px-10 py-5 font-black text-lg tracking-widest rounded-sm flex items-center justify-center gap-2 group transition-all font-headline uppercase">
            Start Your Evolution
            <Bolt className="w-6 h-6 group-hover:translate-x-1 transition-transform fill-current" />
          </button>
          <button className="bg-transparent border border-white/20 text-white px-10 py-5 font-black text-lg tracking-widest rounded-sm hover:bg-white/5 transition-all font-headline uppercase">
            View Services
          </button>
        </div>
      </motion.div>
    </div>
  </header>
);

const About = () => (
  <section className="py-24 bg-surface-low" id="about">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <div className="md:col-span-5 relative">
        <div className="aspect-[3/4] bg-surface-medium overflow-hidden rounded-sm">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
            alt="Gabriel Daudt Portrait"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-secondary-lime p-8 rounded-sm hidden lg:block shadow-2xl">
          <p className="text-black font-black text-4xl font-headline">10+</p>
          <p className="text-black/70 font-bold text-xs tracking-tighter uppercase font-headline">Years of Grit</p>
        </div>
      </div>
      <div className="md:col-span-7">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8 uppercase italic font-headline">
          Meet Gabriel Daudt
        </h2>
        <div className="space-y-6 text-on-surface-variant text-lg">
          <p>
            I don't believe in "quick fixes." I believe in the relentless pursuit of peak performance. As a <span className="text-white font-bold">Certified Personal Trainer</span> and Performance Specialist, my mission is to bridge the gap between where you are and your absolute genetic potential.
          </p>
          <p>
            Every program I design is built on a foundation of bio-mechanics, progressive overload, and psychological fortitude. We don't just train bodies; we rebuild mindsets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-surface-medium rounded-sm border-l-4 border-primary-orange">
              <TrendingUp className="text-primary-orange mb-3 w-8 h-8" />
              <p className="text-white font-bold text-sm leading-relaxed">
                I believe in the relentless pursuit of peak performance. My mission is to bridge the gap between where you are and your absolute genetic potential.
              </p>
              <p className="text-xs mt-3 opacity-50 font-bold uppercase tracking-widest">CPT / PES / CES</p>
            </div>
            <div className="p-6 bg-surface-medium rounded-sm border-l-4 border-secondary-lime">
              <Zap className="text-secondary-lime mb-3 w-8 h-8" />
              <p className="text-white font-bold text-sm leading-relaxed">
                Every program I design is built on a foundation of bio-mechanics, progressive overload, and psychological fortitude.
              </p>
              <p className="text-xs mt-3 opacity-50 font-bold uppercase tracking-widest">Science-Based Methods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-background" id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase italic leading-none font-headline">The Protocols</h2>
          <p className="text-on-surface-variant mt-4 max-w-xl">Precision-engineered coaching streams designed for maximum efficiency and aesthetic mastery.</p>
        </div>
        <div className="hidden md:block h-[2px] flex-grow bg-white/10 mx-12"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service 1 */}
        <div className="group relative bg-surface-high p-8 rounded-sm hover:bg-surface-highest transition-all duration-300 border border-white/5">
          <div className="flex justify-between items-start mb-12">
            <Globe className="w-12 h-12 text-primary-orange" />
            <span className="text-xs font-black tracking-widest text-on-surface-variant uppercase font-headline">01 / Global</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-4 uppercase font-headline">Online Coaching</h3>
          <p className="text-on-surface-variant mb-8">Full custom nutrition and training programming accessible anywhere in the world via my private training app. Weekly check-ins and form correction included.</p>
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="text-secondary-lime w-5 h-5" /> Bespoke Hypertrophy Plans
            </li>
            <li className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="text-secondary-lime w-5 h-5" /> Macro-Targeting Strategy
            </li>
            <li className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="text-secondary-lime w-5 h-5" /> 24/7 Message Support
            </li>
          </ul>
          <button className="w-full py-4 border border-white/20 font-black tracking-widest hover:bg-primary-orange hover:text-white hover:border-primary-orange transition-all uppercase font-headline">
            Secure Your Spot
          </button>
        </div>
        {/* Service 2 */}
        <div className="group relative bg-surface-high p-8 rounded-sm hover:bg-surface-highest transition-all duration-300 border border-white/5">
          <div className="flex justify-between items-start mb-12">
            <Dumbbell className="w-12 h-12 text-secondary-lime" />
            <span className="text-xs font-black tracking-widest text-on-surface-variant uppercase font-headline">02 / Local</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-4 uppercase font-headline">Personal Training</h3>
          <p className="text-on-surface-variant mb-8">High-intensity, 1-on-1 sessions at my private facility. Focused on advanced technique, physiological feedback, and immediate intensity manipulation.</p>
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="text-primary-orange w-5 h-5" /> Real-time Biofeedback
            </li>
            <li className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="text-primary-orange w-5 h-5" /> Advanced Strength Cycles
            </li>
            <li className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="text-primary-orange w-5 h-5" /> Guaranteed Performance Jumps
            </li>
          </ul>
          <button className="w-full py-4 border border-white/20 font-black tracking-widest hover:bg-secondary-lime hover:text-black hover:border-secondary-lime transition-all uppercase font-headline">
            Apply for 1-on-1
          </button>
        </div>
      </div>
    </div>
  </section>
);

const KnowledgeBase = () => (
  <section className="py-24 bg-surface-low" id="nutrition">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-16 uppercase italic font-headline">Knowledge Base</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Large Card */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-medium overflow-hidden rounded-sm flex flex-col group border border-white/5">
          <div className="h-64 overflow-hidden">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop" 
              alt="Healthy Meal Prep"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8">
            <span className="text-primary-orange font-black text-xs tracking-widest uppercase font-headline">Nutrition Mastery</span>
            <h3 className="text-2xl font-black text-white mt-2 mb-4 uppercase font-headline">The Anabolic Kitchen: Macro Frameworks</h3>
            <p className="text-on-surface-variant mb-6">Learn how to calculate your baseline and adjust for hypertrophy without the fluff of traditional dieting.</p>
            <a className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all" href="#">
              READ ARTICLE <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </div>
        {/* Small Card 1 */}
        <div className="md:col-span-2 bg-surface-medium p-8 rounded-sm flex flex-col justify-between group border border-white/5">
          <div>
            <span className="text-secondary-lime font-black text-xs tracking-widest uppercase font-headline">Performance</span>
            <h3 className="text-xl font-black text-white mt-2 mb-4 uppercase font-headline">Recovery: The Silent Growth Engine</h3>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-on-surface-variant text-sm max-w-[200px]">How sleep and active recovery dictate your weekly progression.</p>
            <button className="p-3 bg-surface-high rounded-full group-hover:bg-primary-orange group-hover:text-white transition-colors">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Small Card 2 */}
        <div className="md:col-span-1 bg-surface-high p-6 rounded-sm group hover:border-l-4 border-primary-orange transition-all border border-white/5">
          <BarChart3 className="text-primary-orange mb-4 w-6 h-6" />
          <h3 className="text-lg font-black text-white uppercase leading-tight font-headline">Supplement Logic</h3>
          <p className="text-xs text-on-surface-variant mt-2">What actually works vs. what is marketing noise.</p>
        </div>
        {/* Small Card 3 */}
        <div className="md:col-span-1 bg-surface-high p-6 rounded-sm group hover:border-l-4 border-secondary-lime transition-all border border-white/5">
          <Zap className="text-secondary-lime mb-4 w-6 h-6" />
          <h3 className="text-lg font-black text-white uppercase leading-tight font-headline">HIIT Overload</h3>
          <p className="text-xs text-on-surface-variant mt-2">Maximum fat oxidation in minimum window of time.</p>
        </div>
      </div>
    </div>
  </section>
);

const Social = () => (
  <section className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-2xl font-black tracking-[0.3em] text-on-surface-variant mb-12 uppercase font-headline">Join the Movement</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
        {[
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop"
        ].map((src, i) => (
          <div key={i} className="aspect-square bg-zinc-900 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all cursor-pointer">
            <img className="w-full h-full object-cover" src={src} alt={`Gym shot ${i+1}`} referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
      <a className="inline-flex items-center gap-4 text-3xl md:text-5xl font-black text-white hover:text-primary-orange transition-colors uppercase italic tracking-tighter font-headline" href="#">
        @nodoubt.fitness
        <LinkIcon className="w-8 h-8 md:w-12 md:h-12" />
      </a>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24 bg-surface-low" id="contact">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8 uppercase italic font-headline leading-tight">
          Ready to<br/>Dominate?
        </h2>
        <p className="text-on-surface-variant text-xl mb-12">
          Fill out the form below to start your application. I only take on 5 new clients per month to ensure elite service quality.
        </p>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-surface-medium rounded-sm flex items-center justify-center shrink-0">
              <Mail className="text-primary-orange w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-on-surface-variant tracking-widest uppercase mb-1 font-headline">Email Me</p>
              <p className="text-white font-bold">gabedaudt@live.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-surface-medium rounded-sm flex items-center justify-center shrink-0">
              <Phone className="text-primary-orange w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-on-surface-variant tracking-widest uppercase mb-1 font-headline">Call Me</p>
              <p className="text-white font-bold">236 865-7795</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-surface-medium rounded-sm flex items-center justify-center shrink-0">
              <MapPin className="text-secondary-lime w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-on-surface-variant tracking-widest uppercase mb-1 font-headline">Base of Operations</p>
              <p className="text-white font-bold">Lower Mainland</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-medium p-8 rounded-sm border border-white/5">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black tracking-widest text-on-surface-variant uppercase mb-2 font-headline">Full Name</label>
              <input 
                className="w-full bg-surface-low border-none focus:ring-2 focus:ring-primary-orange text-white p-4 rounded-sm transition-all" 
                placeholder="John Doe" 
                type="text"
              />
            </div>
            <div>
              <label className="block text-xs font-black tracking-widest text-on-surface-variant uppercase mb-2 font-headline">Email Address</label>
              <input 
                className="w-full bg-surface-low border-none focus:ring-2 focus:ring-primary-orange text-white p-4 rounded-sm transition-all" 
                placeholder="john@example.com" 
                type="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black tracking-widest text-on-surface-variant uppercase mb-2 font-headline">Coaching Interest</label>
            <div className="relative">
              <select className="w-full bg-surface-low border-none focus:ring-2 focus:ring-primary-orange text-white p-4 rounded-sm transition-all appearance-none">
                <option>Online Performance Coaching</option>
                <option>In-Person Personal Training</option>
                <option>Nutrition Only Protocol</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black tracking-widest text-on-surface-variant uppercase mb-2 font-headline">Your Current Goal</label>
            <textarea 
              className="w-full bg-surface-low border-none focus:ring-2 focus:ring-primary-orange text-white p-4 rounded-sm transition-all" 
              placeholder="Briefly describe your current fitness level and what you want to achieve..." 
              rows={4}
            ></textarea>
          </div>
          <button className="w-full bg-primary-orange text-white font-black py-5 tracking-[0.2em] rounded-sm hover:opacity-90 active:scale-[0.98] transition-all uppercase font-headline">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-white/5 py-12 px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
      <div className="text-xl font-black text-white font-headline">NODOUBT FITNESS</div>
      <div className="flex flex-wrap justify-center gap-8">
        <a className="text-zinc-500 hover:text-white transition-colors text-sm font-medium" href="#">Privacy Policy</a>
        <a className="text-zinc-500 hover:text-white transition-colors text-sm font-medium" href="#">Terms of Service</a>
        <a className="text-zinc-500 hover:text-white transition-colors text-sm font-medium" href="#">Instagram</a>
        <a className="text-zinc-500 hover:text-white transition-colors text-sm font-medium" href="#">LinkedIn</a>
      </div>
      <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-right">
        © 2024 NODOUBT FITNESS BY GABRIEL DAUDT. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary-orange selection:text-white">
      {/* Debug indicator */}
      <div className="fixed top-0 left-0 w-1 h-1 bg-primary-orange z-[100] opacity-10 pointer-events-none"></div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <KnowledgeBase />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}
