interface StatCardProps {
  value: string;
  label: string;
  unit?: string;
}

export const StatCard = ({ value, label, unit }: StatCardProps) => {
  return (
    <div className="text-center p-6 rounded-2xl bg-gradient-hero border border-border animate-scale-in">
      <div className="text-4xl font-bold bg-gradient-eco bg-clip-text text-transparent mb-2">
        {value}
        {unit && <span className="text-2xl ml-1">{unit}</span>}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
