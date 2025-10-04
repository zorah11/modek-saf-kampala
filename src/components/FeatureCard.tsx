import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
}

export const FeatureCard = ({ icon: Icon, title, description, detail }: FeatureCardProps) => {
  return (
    <Card className="p-6 border-border bg-card hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-2xl bg-gradient-eco">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <p className="text-sm text-muted-foreground italic">{detail}</p>
      </div>
    </Card>
  );
};
