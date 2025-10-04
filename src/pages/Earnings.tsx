import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, ArrowUpRight, Download } from "lucide-react";

const Earnings = () => {
  return (
    <div className="pb-20 px-4 space-y-6 max-w-md mx-auto animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Earnings</h1>
        <Button variant="outline" size="sm" className="gap-2 hover:shadow-soft transition-all">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      {/* Total Balance */}
      <Card className="p-6 bg-gradient-gold text-primary-foreground shadow-elevated border-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="space-y-5 relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-90 font-medium">Total Balance</p>
              <h2 className="text-6xl font-bold mt-2">45,000</h2>
              <p className="text-sm opacity-90 mt-1">UGX</p>
            </div>
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Wallet className="w-7 h-7" />
            </div>
          </div>
          <Button variant="secondary" className="w-full h-12 font-semibold hover:scale-[1.02] transition-all" size="lg">
            Withdraw Funds
          </Button>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-5 hover:shadow-soft transition-all border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">This Month</span>
          </div>
          <p className="text-3xl font-bold">15,000</p>
          <p className="text-xs text-muted-foreground mt-1">UGX</p>
        </Card>

        <Card className="p-5 hover:shadow-soft transition-all border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-xs font-medium">Total Liters</span>
          </div>
          <p className="text-3xl font-bold">45</p>
          <p className="text-xs text-muted-foreground mt-1">Liters</p>
        </Card>
      </div>

      {/* Transaction History */}
      <div>
        <h2 className="font-semibold text-lg mb-3">Transaction History</h2>
        
        <div className="space-y-3">
          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wallet className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Oil Payment</h4>
                  <p className="text-sm text-muted-foreground">15 liters @ 1,000 UGX/L</p>
                  <p className="text-xs text-muted-foreground mt-1">Nov 1, 2025 • 2:30 PM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">+15,000</p>
                <p className="text-xs text-muted-foreground">UGX</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wallet className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Oil Payment</h4>
                  <p className="text-sm text-muted-foreground">20 liters @ 1,000 UGX/L</p>
                  <p className="text-xs text-muted-foreground mt-1">Oct 15, 2025 • 10:15 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">+20,000</p>
                <p className="text-xs text-muted-foreground">UGX</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wallet className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Oil Payment</h4>
                  <p className="text-sm text-muted-foreground">10 liters @ 1,000 UGX/L</p>
                  <p className="text-xs text-muted-foreground mt-1">Oct 1, 2025 • 3:45 PM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">+10,000</p>
                <p className="text-xs text-muted-foreground">UGX</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
