import React, { useState, useEffect, useRef } from 'react';
import { Mic, Zap, Globe, Shield, Users, PlayCircle, ChevronRight, Sparkles, Radio, Volume2 } from 'lucide-react';

const AIDubbingStudio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('.section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const features = [
    { icon: <Mic className="w-8 h-8" />, title: "AI Voice Cloning", desc: "Perfect voice replication with emotional intelligence" },
    { icon: <Globe className="w-8 h-8" />, title: "100+ Languages", desc: "Break language barriers with natural-sounding dubbing" },
    { icon: <Zap className="w-8 h-8" />, title: "Real-Time Processing", desc: "Lightning-fast dubbing with zero quality loss" },
    { icon: <Shield className="w-8 h-8" />, title: "Secure & Private", desc: "Enterprise-grade security for your audio content" },
    { icon: <Volume2 className="w-8 h-8" />, title: "Studio Quality", desc: "Professional-grade audio output every time" },
    { icon: <Radio className="w-8 h-8" />, title: "Tone Adaptation", desc: "Preserve emotion and context across languages" }
  ];

  const steps = [
    { num: "01", title: "Upload Audio", desc: "Drop your audio or video file into our platform" },
    { num: "02", title: "Select Voice", desc: "Choose from our AI voice library or clone your own" },
    { num: "03", title: "AI Processing", desc: "Our neural networks work their magic in seconds" },
    { num: "04", title: "Download", desc: "Get studio-quality dubbed content instantly" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen font-sans overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Glassmorphic Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md opacity-50"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Dubbing Studio
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-slate-700 font-medium">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="section relative min-h-screen flex items-center pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-blue-700 font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Powered by Advanced AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Transform Voice
              </span>
              <br />
              <span className="text-slate-800">Into Any Language</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Experience the future of content localization with AI-powered voice dubbing that preserves emotion, tone, and authenticity across 100+ languages.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                Request a Demo
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Visual - AI Microphone Animation */}
          <div className="relative animate-fade-in">
            <div className="relative w-full aspect-square">
              {/* Animated AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central AI Core */}
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <Mic className="w-20 h-20 text-blue-600 animate-pulse" />
                  </div>
                </div>

                {/* Orbital Sound Waves */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border-4 border-blue-300 rounded-full animate-ping opacity-20"
                    style={{
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                ))}

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-float shadow-lg"
                    style={{
                      top: `${Math.sin(i * Math.PI / 4) * 45 + 50}%`,
                      left: `${Math.cos(i * Math.PI / 4) * 45 + 50}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${3 + i * 0.3}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Four simple steps to transform your content into any language with AI precision
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section py-24 px-6 bg-gradient-to-br from-white/50 to-blue-50/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge AI technology meets intuitive design for seamless voice dubbing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/50">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="section py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join thousands of creators and businesses transforming their content globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Industry-Leading Accuracy", desc: "Our AI models are trained on millions of voice samples for unmatched precision and natural sound quality." },
              { title: "Lightning-Fast Processing", desc: "Get your dubbed content in minutes, not days. Our infrastructure scales to handle projects of any size." },
              { title: "Cost-Effective Solution", desc: "Save up to 90% compared to traditional dubbing studios while maintaining professional quality." },
              { title: "24/7 Support", desc: "Our expert team is always here to help you succeed with personalized assistance and technical guidance." }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 text-lg relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Demo / Contact */}
      <section className="section py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-blue-100 mb-12 animate-fade-in-up">
            Request a personalized demo and see how AI Dubbing Studio can revolutionize your workflow
          </p>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-white focus:outline-none text-slate-800 placeholder-slate-400 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-white focus:outline-none text-slate-800 placeholder-slate-400 transition-all"
              />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-white focus:outline-none text-slate-800 placeholder-slate-400 mb-6 transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project..."
              rows="4"
              className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-transparent focus:border-white focus:outline-none text-slate-800 placeholder-slate-400 mb-6 transition-all resize-none"
            ></textarea>
            <button 
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Request Demo Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">AI Dubbing Studio</span>
          </div>
          <p className="text-slate-400 mb-6">
            Transforming voices, connecting cultures, empowering creators worldwide.
          </p>
          <div className="text-slate-500 text-sm">
            © 2024 AI Dubbing Studio. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AIDubbingStudio;