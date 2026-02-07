import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Server, Zap, Shield, CheckCircle2, Star } from "lucide-react";
import { Badge } from "@/react-app/components/ui/badge";
import AtomBackground from "@/react-app/components/AtomBackground";
import CountUp from "@/react-app/components/CountUp";
import TypingText from "@/react-app/components/TypingText";
import { Link } from "react-router";

export default function Home() {
  const highlights = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Enterprise-grade hardware and optimized infrastructure for blazing performance"
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced security measures to keep your services online and protected"
    },
    {
      icon: Server,
      title: "24/7 Support",
      description: "Expert support team available around the clock to assist you"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <AtomBackground />
      
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://019c3880-cfd6-79c1-b586-2814744a4cdb.mochausercontent.com/ChatGPT-Image-Jan-26-2026-06_38_30-PM.png" 
                alt="AstraCloud Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text bg-[length:200%_auto] animate-gradient">
                AstraCloud
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <Link 
                  to="/minecraft" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  Minecraft Hosting
                </Link>
                <Link 
                  to="/domain" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  Domain
                </Link>
              </nav>
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              >
                <a href="https://discord.gg/kYRy79HdtC" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30">
            <Star className="w-3 h-3 mr-1 fill-cyan-400" />
            Trusted by thousands of customers
          </Badge>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
            <TypingText 
              text="AstraCloud" 
              className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text"
            />
            <span className="block text-white text-4xl sm:text-5xl mt-4">
              Premium Cloud Hosting
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Experience enterprise-grade Minecraft, VPS, and Web hosting with unmatched reliability and 24/7 support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all"
            >
              <a href="https://discord.gg/kYRy79HdtC" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/minecraft">View Minecraft Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all">
              <CountUp 
                end={5} 
                suffix="+" 
                className="text-5xl font-bold mb-2 text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text"
              />
              <div className="text-sm font-medium text-slate-400 tracking-wider">
                GLOBAL LOCATIONS
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all">
              <CountUp 
                end={350} 
                suffix="+" 
                className="text-5xl font-bold mb-2 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
              />
              <div className="text-sm font-medium text-slate-400 tracking-wider">
                HAPPY CLIENTS
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all">
              <div className="text-5xl font-bold mb-2 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                99.9%
              </div>
              <div className="text-sm font-medium text-slate-400 tracking-wider">
                UPTIME
              </div>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all">
              <div className="text-5xl font-bold mb-2 text-transparent bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text">
                24/7
              </div>
              <div className="text-sm font-medium text-slate-400 tracking-wider">
                SUPPORT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information & Benefits Section */}
      <section className="py-20 border-y border-white/10 bg-slate-900/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AstraCloud Hosting?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Premium hosting infrastructure designed for performance, security, and reliability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{highlight.title}</h3>
                    <p className="text-slate-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600/10 to-cyan-700/10 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Server className="w-6 h-6 text-cyan-400" />
                  Enterprise Hardware
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">AMD EPYC processors for maximum performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">NVMe SSD storage for ultra-fast read/write speeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">DDR4 ECC RAM for stability and reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">High-bandwidth network connectivity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-700/10 to-blue-600/10 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  Security & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Advanced DDoS protection on all plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Automatic daily backups of your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">24/7 expert technical support via Discord</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">99.9% uptime guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Hosting Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the perfect hosting solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-600/10 to-cyan-700/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Minecraft Server Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  High-performance Minecraft servers with NVMe SSD storage, DDoS protection, and AMD EPYC processors. Plans starting from ₹120/month.
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  <Link to="/minecraft">View Minecraft Plans</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-700/10 to-blue-600/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all group">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Domain Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6">
                  Register your perfect domain name with competitive pricing, free WHOIS privacy, and DNS management. Domains starting from ₹96/year.
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  <Link to="/domain">View Domain Plans</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-700/20 rounded-3xl p-12 border border-cyan-500/30 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of satisfied customers and experience premium hosting today
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/50"
            >
              <a href="https://discord.gg/kYRy79HdtC" target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://019c3880-cfd6-79c1-b586-2814744a4cdb.mochausercontent.com/ChatGPT-Image-Jan-26-2026-06_38_30-PM.png" 
                  alt="AstraCloud Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text bg-[length:200%_auto] animate-gradient">
                  AstraCloud
                </span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Premium cloud hosting services for Minecraft servers, VPS, and web hosting with 24/7 support.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/minecraft" className="hover:text-white transition-colors">Minecraft Hosting</Link></li>
                <li><Link to="/domain" className="hover:text-white transition-colors">Domain</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Hosting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-slate-400">
            <p>© 2026 AstraCloud Hosting  |  Premium Hosting</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
