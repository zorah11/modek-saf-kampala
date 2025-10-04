import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Settings, 
  Bell, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Leaf,
  Plane,
  TrendingDown
} from "lucide-react";

const Profile = () => {
  return (
    <div className="pb-20 px-4 space-y-6 max-w-md mx-auto">
      {/* User Info */}
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarFallback className="bg-gradient-eco text-primary-foreground text-xl">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">john.doe@email.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>

      {/* Environmental Impact */}
      <Card className="p-6 bg-gradient-eco text-primary-foreground">
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-white/20 rounded-full">
            <Leaf className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Your Environmental Impact</h3>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-3xl font-bold">45</p>
                <p className="text-xs opacity-90">Liters</p>
              </div>
              <div>
                <p className="text-3xl font-bold">38kg</p>
                <p className="text-xs opacity-90">CO₂ Saved</p>
              </div>
              <div>
                <p className="text-3xl font-bold">85%</p>
                <p className="text-xs opacity-90">Less Emissions</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Impact Details */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 text-center">
          <Plane className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-muted-foreground">SAF Liters Produced</p>
        </Card>
        <Card className="p-4 text-center">
          <TrendingDown className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold">85%</p>
          <p className="text-xs text-muted-foreground">Emissions Reduced</p>
        </Card>
      </div>

      {/* Menu Options */}
      <div className="space-y-2">
        <Card className="p-4">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Edit Profile</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>

        <Card className="p-4">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>

        <Card className="p-4">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>

        <Card className="p-4">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>

        <Card className="p-4 border-destructive/50">
          <button className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-destructive" />
              <span className="font-medium text-destructive">Log Out</span>
            </div>
            <ChevronRight className="w-5 h-5 text-destructive" />
          </button>
        </Card>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        MODEK v1.0.0 • www.modekapp.com
      </p>
    </div>
  );
};

export default Profile;
