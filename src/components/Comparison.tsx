import { X, Check, Sparkles } from "lucide-react";

const Comparison = () => {
  const beforeItems = [
    "動画制作に数日〜数週間かかる",
    "高額な制作費用（数十万円〜）",
    "専門知識と高価なソフトが必要",
    "修正に時間とコストがかかる",
    "クリエイターへの依存",
  ];

  const afterItems = [
    "数分で高品質動画を生成",
    "月額コストのみで無制限制作",
    "プロンプトだけで制作可能",
    "即座に修正・バリエーション作成",
    "完全に内製化して自由に制作",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-destructive/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">革命的な変化</span>
          </div>
          <h2 className="text-gradient mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            動画制作の常識が変わる
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Sora2によって、動画制作のワークフローが劇的に変化します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before */}
          <div 
            className="glass-card p-8 rounded-3xl border-2 border-destructive/30 hover:scale-105 transition-all duration-300"
            style={{
              animation: 'fade-in-up 0.8s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0,
            }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <X className="w-6 h-6 text-destructive" />
              <h3 className="text-2xl font-bold text-destructive">従来の方法</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div 
            className="glass-card p-8 rounded-3xl border-2 border-primary glow-effect hover:scale-105 transition-all duration-300"
            style={{
              animation: 'fade-in-up 0.8s ease-out forwards',
              animationDelay: '0.4s',
              opacity: 0,
            }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Check className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-gradient">Sora2で</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                  <span className="leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          {[
            { value: "95%", label: "時間削減" },
            { value: "80%", label: "コスト削減" },
            { value: "10x", label: "生産性向上" },
            { value: "無制限", label: "創作の自由" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass-card rounded-2xl hover:scale-110 transition-all duration-300"
              style={{
                animation: 'scale-in 0.6s ease-out forwards',
                animationDelay: `${0.6 + index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
