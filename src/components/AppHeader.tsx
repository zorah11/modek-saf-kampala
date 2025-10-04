import { Leaf, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  title?: string;
  showNotification?: boolean;
}

export const AppHeader = ({ title = "MODEK", showNotification = true }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="flex items-center justify-between px-4 py-4 max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-eco shadow-soft">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-eco bg-clip-text text-transparent">
            {title}
          </span>
        </div>
        {showNotification && (
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-colors rounded-xl">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full animate-pulse" />
          </Button>
        )}
      </div>
    </header>
  );
};
