import { Video, Cpu, Zap, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Video,
      title: "最新のSora2技術",
      description: "OpenAIの最新動画生成モデルSora2の全機能を網羅。基礎から応用まで段階的に学習できます。",
    },
    {
      icon: Cpu,
      title: "実践的なカリキュラム",
      description: "理論だけでなく、実際のプロジェクトを通じて学ぶ実践重視のアプローチ。即戦力となるスキルを習得。",
    },
    {
      icon: Zap,
      title: "最短2週間で習得",
      description: "効率的な学習プログラムにより、忙しいビジネスパーソンでも短期間でマスター可能。",
    },
    {
      icon: Award,
      title: "修了証明書発行",
      description: "コース修了者には公式の修了証明書を発行。スキルの証明として履歴書やポートフォリオに活用可能。",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">
            Sora2とは？
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Sora2は、OpenAIが開発した革新的な動画生成AIモデルです。
            テキストプロンプトから高品質な動画を生成し、
            クリエイティブな表現の可能性を飛躍的に拡大します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
