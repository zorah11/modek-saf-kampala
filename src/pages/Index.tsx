import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { BenefitCard } from "@/components/BenefitCard";
import { StatCard } from "@/components/StatCard";
import { 
  Droplet, 
  Calendar, 
  Wallet, 
  TrendingUp, 
  Smartphone, 
  ArrowRight,
  Leaf,
  Plane
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-eco">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-eco bg-clip-text text-transparent">
              MODEK
            </span>
          </div>
          <Button variant="hero" size="lg" className="gap-2">
            Download App
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Earn Cash, Save the Planet</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Turn Your Used Cooking Oil Into{" "}
                <span className="bg-gradient-eco bg-clip-text text-transparent">
                  Clean Aviation Fuel
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join Kampala's eco-revolution! MODEK helps households, restaurants, and hotels 
                transform waste oil into Sustainable Aviation Fuel while earning money.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="gap-2">
                  <Smartphone className="w-5 h-5" />
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">85% Less CO₂</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">UGX 1,000/L</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-eco rounded-3xl blur-3xl opacity-20" />
              <img 
                src={heroImage} 
                alt="MODEK sustainable aviation fuel concept"
                className="relative rounded-3xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">How MODEK Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to turn your waste into wealth and help the planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Droplet}
              title="List Your Oil"
              description="Quickly add the amount of used cooking oil you have for pickup."
              detail="Monitor your oil contributions in a simple dashboard."
            />
            <FeatureCard
              icon={Calendar}
              title="Easy Pickup Scheduling"
              description="Arrange monthly pickups for households or weekly/bi-weekly for businesses."
              detail="Get instant pickup confirmations."
            />
            <FeatureCard
              icon={Wallet}
              title="Get Paid"
              description="Earn UGX 1,000 per liter (households) or UGX 900 per liter (restaurants/hotels)."
              detail="Track all your earnings and payments in one place."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Track Your Impact"
              description="See how your oil helps produce SAF and cuts CO₂ emissions."
              detail="View your total liters collected and environmental stats."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Your Impact Matters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the difference you're making in real-time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard value="85" label="Less CO₂ Emissions" unit="%" />
            <StatCard value="1,000" label="Per Liter (Households)" unit="UGX" />
            <StatCard value="100" label="Sustainable & Convenient" unit="%" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">Why Choose MODEK?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just an app—it's a movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BenefitCard
              title="Simple"
              description="User-friendly app with a clean, intuitive design that makes recycling effortless."
            />
            <BenefitCard
              title="Profitable"
              description="Turn waste into cash with competitive rates that reward your contribution."
            />
            <BenefitCard
              title="Sustainable"
              description="Support cleaner aviation and a healthier planet with every liter collected."
            />
            <BenefitCard
              title="Convenient"
              description="Schedule pickups that fit your life—monthly for homes, weekly for businesses."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-scale-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Join the Movement
            </h2>
            <p className="text-xl text-muted-foreground">
              Be part of Kampala's eco-revolution! Download MODEK and start earning 
              from your used cooking oil while helping the planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="gap-2">
                <Smartphone className="w-5 h-5" />
                Download for iOS
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="gold" size="lg" className="gap-2">
                <Smartphone className="w-5 h-5" />
                Download for Android
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Learn more at{" "}
              <a href="https://www.modekapp.com" className="text-primary hover:underline font-medium">
                www.modekapp.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-eco">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent">
                MODEK
              </span>
            </div>
            
            <p className="text-muted-foreground text-center">
              Where waste meets wings! ✈️
            </p>

            <p className="text-sm text-muted-foreground">
              © 2025 MODEK. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
