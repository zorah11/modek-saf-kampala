import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, TrendingUp, Calendar, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pb-20 px-4 space-y-6 max-w-md mx-auto animate-fade-in">
      {/* Quick Stats */}
      <Card className="p-6 bg-gradient-eco text-primary-foreground shadow-elevated border-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="space-y-4 relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-90 font-medium">Total Earnings</p>
              <h2 className="text-5xl font-bold mt-2">45,000</h2>
              <p className="text-sm opacity-90 mt-1">UGX</p>
            </div>
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Droplet className="w-7 h-7" />
            </div>
          </div>
          <div className="flex gap-6 text-sm pt-2">
            <div>
              <p className="opacity-90 mb-1">Liters Collected</p>
              <p className="font-bold text-2xl">45L</p>
            </div>
            <div className="border-l border-white/30 pl-6">
              <p className="opacity-90 mb-1">CO₂ Saved</p>
              <p className="font-bold text-2xl">38kg</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Add Oil Button */}
      <Button className="w-full h-16 text-lg gap-2 shadow-soft hover:shadow-elevated transition-all hover:scale-[1.02]" size="lg">
        <Plus className="w-6 h-6" />
        Add Used Oil
      </Button>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/pickups" className="group">
          <Card className="p-5 hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] border-border/50">
            <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-base">Schedule Pickup</h3>
            <p className="text-xs text-muted-foreground mt-2">Next: Nov 15</p>
          </Card>
        </Link>
        <Link to="/earnings" className="group">
          <Card className="p-5 hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] border-border/50">
            <div className="p-3 rounded-2xl bg-secondary/10 w-fit mb-3 group-hover:bg-secondary/20 transition-colors">
              <TrendingUp className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-semibold text-base">View Earnings</h3>
            <p className="text-xs text-muted-foreground mt-2">UGX 45,000</p>
          </Card>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Recent Activity</h3>
          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <Card className="p-4 hover:shadow-soft transition-all border-border/50">
          <div className="flex justify-between items-start gap-3">
            <div className="flex gap-3 flex-1">
              <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                <Droplet className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold">Oil Collected</h4>
                <p className="text-sm text-muted-foreground">15 liters picked up</p>
                <p className="text-xs text-muted-foreground mt-1.5">Nov 1, 2025</p>
              </div>
            </div>
            <p className="font-bold text-primary text-base shrink-0">+15,000</p>
          </div>
        </Card>

        <Card className="p-4 hover:shadow-soft transition-all border-border/50">
          <div className="flex justify-between items-start gap-3">
            <div className="flex gap-3 flex-1">
              <div className="p-2.5 rounded-xl bg-secondary/10 shrink-0">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold">Pickup Scheduled</h4>
                <p className="text-sm text-muted-foreground">Monthly pickup set</p>
                <p className="text-xs text-muted-foreground mt-1.5">Nov 15, 2025</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Impact Badge */}
      <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 shadow-soft">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-accent/20">
            <TrendingUp className="w-7 h-7 text-accent" />
          </div>
          <div>
            <h4 className="font-bold text-base">Eco Warrior 🌱</h4>
            <p className="text-sm text-muted-foreground mt-1">
              You've saved 38kg of CO₂ emissions!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
