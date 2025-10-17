import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay and parallax effect */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="AI Video Generation" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Enhanced animated particles with more movement */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">OpenAI Sora2 完全マスター講座</span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up text-gradient" style={{ animationDelay: '0.1s' }}>
            動画生成AIの未来を
            <br />
            あなたの手に
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Sora2の基礎から実践まで、プロフェッショナルな動画生成スキルを
            <br className="hidden sm:block" />
            体系的に習得できる日本初の完全オンライン講座
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="group">
              今すぐ受講を開始
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              デモ動画を見る
            </Button>
          </div>

          {/* Trust indicators with icons */}
          <div className="animate-fade-in-up flex flex-wrap justify-center gap-8 mt-12" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Users, label: '5,000+ 受講生', color: 'text-primary' },
              { icon: Award, label: '98% 満足度', color: 'text-secondary' },
              { icon: TrendingUp, label: '92% 修了率', color: 'text-accent' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 glass-card px-6 py-3 rounded-full hover:scale-110 transition-all duration-300">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Additional features badges */}
          <div className="animate-fade-in-up flex flex-wrap justify-center gap-4 mt-8" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Zap, text: '最短2週間で習得' },
              { icon: Award, text: '修了証明書発行' },
              { icon: TrendingUp, text: '30日間返金保証' },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/30 hover:border-primary/50 transition-all duration-300">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
