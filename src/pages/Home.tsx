import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, TrendingUp, Calendar, ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pb-20 px-4 space-y-6 max-w-md mx-auto">
      {/* Quick Stats */}
      <Card className="p-6 bg-gradient-eco text-primary-foreground">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-90">Total Earnings</p>
              <h2 className="text-4xl font-bold mt-1">UGX 45,000</h2>
            </div>
            <div className="p-3 bg-white/20 rounded-full">
              <Droplet className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-4 text-sm">
            <div>
              <p className="opacity-90">Liters Collected</p>
              <p className="font-semibold text-lg">45L</p>
            </div>
            <div className="border-l border-white/30 pl-4">
              <p className="opacity-90">CO₂ Saved</p>
              <p className="font-semibold text-lg">38kg</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Add Oil Button */}
      <Button className="w-full h-14 text-lg gap-2" size="lg">
        <Plus className="w-6 h-6" />
        Add Used Oil
      </Button>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link to="/pickups">
          <Card className="p-4 hover:shadow-soft transition-shadow">
            <Calendar className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold">Schedule Pickup</h3>
            <p className="text-xs text-muted-foreground mt-1">Next: Nov 15</p>
          </Card>
        </Link>
        <Link to="/earnings">
          <Card className="p-4 hover:shadow-soft transition-shadow">
            <TrendingUp className="w-8 h-8 text-secondary mb-2" />
            <h3 className="font-semibold">View Earnings</h3>
            <p className="text-xs text-muted-foreground mt-1">UGX 45,000</p>
          </Card>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Recent Activity</h3>
          <Button variant="ghost" size="sm" className="gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <Card className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Droplet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Oil Collected</h4>
                <p className="text-sm text-muted-foreground">15 liters picked up</p>
                <p className="text-xs text-muted-foreground mt-1">Nov 1, 2025</p>
              </div>
            </div>
            <p className="font-semibold text-primary">+15,000 UGX</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-medium">Pickup Scheduled</h4>
                <p className="text-sm text-muted-foreground">Monthly pickup set</p>
                <p className="text-xs text-muted-foreground mt-1">Nov 15, 2025</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Impact Badge */}
      <Card className="p-6 bg-accent/5 border-accent/20">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-accent/20">
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold">Eco Warrior 🌱</h4>
            <p className="text-sm text-muted-foreground">
              You've saved 38kg of CO₂ emissions!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
