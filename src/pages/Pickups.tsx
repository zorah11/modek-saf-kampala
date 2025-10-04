import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Plus } from "lucide-react";

const Pickups = () => {
  return (
    <div className="pb-20 px-4 space-y-6 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pickups</h1>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Schedule
        </Button>
      </div>

      {/* Upcoming Pickup */}
      <Card className="p-5 border-primary/50 bg-primary/5">
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-xl bg-primary/10">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg">Next Pickup</h3>
                <p className="text-sm text-muted-foreground">Monthly Schedule</p>
              </div>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                Upcoming
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>November 15, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>9:00 AM - 12:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Kampala, Uganda</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4">
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
