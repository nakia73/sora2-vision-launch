import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  const examples = [
    {
      title: "プロダクトデモ",
      description: "商品紹介動画を数分で制作",
      gradient: "from-primary to-secondary",
    },
    {
      title: "教育コンテンツ",
      description: "わかりやすい解説動画を瞬時に",
      gradient: "from-secondary to-accent",
    },
    {
      title: "SNS投稿",
      description: "バイラルするショート動画を量産",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">実際の制作例</span>
          </div>
          <h2 className="text-gradient mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            受講生の作品を見る
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            プロンプトから生まれた、プロフェッショナルクオリティの動画たち
          </p>
        </div>

        {/* Main Video */}
        <div 
          className="max-w-5xl mx-auto mb-12 group cursor-pointer"
          style={{
            animation: 'scale-in 0.8s ease-out forwards',
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-card group-hover:scale-[1.02] transition-all duration-500 glow-effect">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white font-semibold text-lg">デモリールを再生</p>
                <p className="text-white/70 text-sm mt-2">受講生が制作した作品集（2分）</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example Categories */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: `${0.5 + index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card mb-4 group-hover:scale-105 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-40 flex items-center justify-center`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-gradient transition-all duration-300">
                {example.title}
              </h3>
              <p className="text-muted-foreground text-sm">{example.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            全ての作品例を見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
