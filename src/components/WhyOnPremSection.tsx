import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Data Privacy", onPrem: true, cloud: false },
  { feature: "No Monthly Fees", onPrem: true, cloud: false },
  { feature: "Works Offline", onPrem: true, cloud: false },
  { feature: "Full Data Ownership", onPrem: true, cloud: false },
  { feature: "No Vendor Lock-in", onPrem: true, cloud: false },
  { feature: "Custom Integrations", onPrem: true, cloud: false },
];

const WhyOnPremSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Why On-Premise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
              Your Home,{" "}
              <span className="text-gradient">Your Rules</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Cloud-based security systems store your private footage on remote servers, 
              creating privacy risks and ongoing costs. Our on-premise solutions keep 
              everything under your roof and your control.
            </p>
            
            <div className="space-y-4">
              {[
                "No subscription fees—pay once, own forever",
                "Military-grade encryption on local hardware",
                "Zero external access to your security footage",
                "Full customization to match your needs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/20 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Comparison Table */}
          <div className="rounded-xl bg-card border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-secondary/50 p-4 text-sm font-semibold">
              <div>Feature</div>
              <div className="text-center text-primary">On-Premise</div>
              <div className="text-center text-muted-foreground">Cloud-Based</div>
            </div>
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-4 border-t border-border items-center"
              >
                <div className="text-sm">{row.feature}</div>
                <div className="flex justify-center">
                  <div className="p-1 rounded-full bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="p-1 rounded-full bg-destructive/20">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOnPremSection;
