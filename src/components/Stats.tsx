import { useCountUp } from "@/hooks/useCountUp";
import { Users, Award, TrendingUp, Star } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  value, 
  suffix = "", 
  label 
}: { 
  icon: React.ElementType; 
  value: number; 
  suffix?: string; 
  label: string;
}) => {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <div 
      ref={ref}
      className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 glow-effect"
    >
      <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6 animate-fade-in-up">
            圧倒的な実績
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            数字が証明する、日本No.1のSora2講座
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <StatCard
            icon={Users}
            value={5247}
            suffix="+"
            label="累計受講生数"
          />
          <StatCard
            icon={Award}
            value={98}
            suffix="%"
            label="受講満足度"
          />
          <StatCard
            icon={TrendingUp}
            value={92}
            suffix="%"
            label="修了率"
          />
          <StatCard
            icon={Star}
            value={4.9}
            suffix="/5.0"
            label="平均評価"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            ※ 2025年1月時点のデータ
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
