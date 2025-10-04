import { CheckCircle } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
}

export const BenefitCard = ({ title, description }: BenefitCardProps) => {
  return (
    <div className="flex items-start gap-4 animate-slide-up">
      <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
        <CheckCircle className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
