import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="AI Video Generation" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
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

          {/* Stats */}
          <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto" style={{ animationDelay: '0.4s' }}>
            {[
              { label: '受講生数', value: '5,000+' },
              { label: '満足度', value: '98%' },
              { label: '修了率', value: '92%' },
              { label: '平均評価', value: '4.9/5' },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
