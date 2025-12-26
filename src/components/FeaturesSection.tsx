import { Camera, Fingerprint, Bell, Wifi, HardDrive, Eye } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Smart Surveillance",
    description: "AI-powered cameras with local processing. Face recognition and motion detection without cloud uploads.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    description: "Fingerprint, facial recognition, and keypad entry systems stored securely on-site.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Real-time notifications via your local network or secure VPN connection.",
  },
  {
    icon: Wifi,
    title: "Mesh Network",
    description: "Self-healing sensor networks that work even when internet is down.",
  },
  {
    icon: HardDrive,
    title: "Local Storage",
    description: "All recordings stored on your premises with encrypted drives and automated backups.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Professional monitoring through secure, encrypted channels without data exposure.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Complete Security <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every component designed for privacy-first, on-premise deployment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
