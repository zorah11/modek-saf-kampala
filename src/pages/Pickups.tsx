import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Plus } from "lucide-react";

const Pickups = () => {
  return (
    <div className="pb-20 px-4 space-y-6 max-w-md mx-auto animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pickups</h1>
        <Button className="gap-2 shadow-soft hover:shadow-elevated transition-all hover:scale-[1.02]">
          <Plus className="w-4 h-4" />
          Schedule
        </Button>
      </div>

      {/* Upcoming Pickup */}
      <Card className="p-6 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-primary/20">
            <Calendar className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-xl">Next Pickup</h3>
                <p className="text-sm text-muted-foreground mt-1">Monthly Schedule</p>
              </div>
              <span className="px-3 py-1.5 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                Upcoming
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">November 15, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">9:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Kampala, Uganda</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-5 hover:bg-primary/5 transition-all">
              Reschedule
            </Button>
          </div>
        </div>
      </Card>

      {/* Pickup History */}
      <div>
        <h2 className="font-semibold text-lg mb-3">History</h2>
        
        <div className="space-y-3">
          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Completed Pickup</h4>
                  <p className="text-sm text-muted-foreground">15 liters collected</p>
                  <p className="text-xs text-muted-foreground mt-1">Nov 1, 2025</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                Completed
              </span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Completed Pickup</h4>
                  <p className="text-sm text-muted-foreground">20 liters collected</p>
                  <p className="text-xs text-muted-foreground mt-1">Oct 15, 2025</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                Completed
              </span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Completed Pickup</h4>
                  <p className="text-sm text-muted-foreground">10 liters collected</p>
                  <p className="text-xs text-muted-foreground mt-1">Oct 1, 2025</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                Completed
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pickups;
