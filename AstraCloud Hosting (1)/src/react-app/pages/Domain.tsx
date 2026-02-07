import { useState, useEffect } from "react";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Globe, CheckCircle2 } from "lucide-react";
import AtomBackground from "@/react-app/components/AtomBackground";
import { Link } from "react-router";

interface Plan {
  id: number;
  name: string;
  price_inr: number;
  cpu: string;
  ram: string;
  storage: string;
  location: string;
  is_popular: number;
  gradient: string;
  category_id: number;
}

export default function Domain() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => {
        setPlans(data.filter((plan: Plan) => plan.category_id === 4));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-cyan-950 relative">
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
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text bg-[length:200%_auto] animate-gradient">
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
                  className="text-purple-400 font-medium"
                >
                  Domain
                </Link>
              </nav>
              <Button 
                asChild
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              >
                <a href="https://discord.gg/kYRy79HdtC" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Domain Plans */}
      <section className="py-20 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Globe className="w-3 h-3 mr-1" />
              Domain Registration
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Domain Plans
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Register your perfect domain name with competitive yearly pricing
            </p>
          </div>

          {loading ? (
            <div className="text-center text-slate-400">Loading plans...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className="bg-slate-900/50 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all hover:shadow-2xl"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-slate-300">
                      Premium domain extension
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">₹{plan.price_inr}</span>
                      <span className="text-slate-400">/year</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">Free WHOIS Privacy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">DNS Management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">Easy Domain Transfer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">24/7 Support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild
                      className="w-full bg-white/10 hover:bg-white/20 text-white"
                    >
                      <a href="https://discord.gg/kYRy79HdtC" target="_blank" rel="noopener noreferrer">
                        Register Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
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
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text bg-[length:200%_auto] animate-gradient">
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
