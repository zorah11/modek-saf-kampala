import { Leaf, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  title?: string;
  showNotification?: boolean;
}

export const AppHeader = ({ title = "MODEK", showNotification = true }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-eco">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-eco bg-clip-text text-transparent">
            {title}
          </span>
        </div>
        {showNotification && (
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
          </Button>
        )}
      </div>
    </header>
  );
};
