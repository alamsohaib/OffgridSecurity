import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, Server } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              100% On-Premise • Your Data, Your Control
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Home Security{" "}
            <span className="text-gradient">Without Compromise</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Enterprise-grade security systems that run entirely on your premises. 
            No cloud dependencies, no subscription fees, complete privacy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking">Schedule Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#features">Explore Features</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Shield, label: "Military-Grade Encryption" },
              { icon: Server, label: "Local Processing" },
              { icon: Lock, label: "Zero Cloud Access" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-lg bg-secondary">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
