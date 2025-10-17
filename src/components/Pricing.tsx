import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "ベーシック",
      icon: Sparkles,
      price: "¥49,800",
      period: "買い切り",
      description: "Sora2の基礎を学びたい方向け",
      features: [
        "Week 1-2のカリキュラムアクセス",
        "基礎動画コンテンツ（20本）",
        "コミュニティフォーラムアクセス",
        "メール質問サポート",
        "修了証明書発行",
      ],
      cta: "今すぐ始める",
      popular: false,
    },
    {
      name: "プロフェッショナル",
      icon: Crown,
      price: "¥98,000",
      period: "買い切り",
      description: "本格的にスキルを習得したい方向け",
      features: [
        "全カリキュラムアクセス（Week 1-4）",
        "完全動画コンテンツ（50本以上）",
        "1対1メンタリング（月2回）",
        "優先質問サポート",
        "実践プロジェクト添削",
        "修了証明書発行",
        "卒業生コミュニティ永久アクセス",
      ],
      cta: "最も人気",
      popular: true,
    },
    {
      name: "エンタープライズ",
      icon: Rocket,
      price: "¥198,000",
      period: "買い切り",
      description: "企業・チーム向けプラン",
      features: [
        "プロフェッショナルの全機能",
        "1対1メンタリング（無制限）",
        "専属講師による個別指導",
        "企業向けカスタマイズカリキュラム",
        "チーム導入サポート",
        "優先技術サポート",
        "最新アップデート永久アクセス",
        "企業向け修了証明書",
      ],
      cta: "お問い合わせ",
      popular: false,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">
            料金プラン
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            あなたの学習目標に合わせた最適なプランをお選びください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 flex flex-col ${
                plan.popular ? 'ring-2 ring-primary glow-effect' : ''
              }`}
              style={{
                animation: 'scale-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-primary text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="inline-flex p-3 rounded-2xl bg-gradient-primary mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "glass"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            全プラン30日間返金保証付き・分割払いオプションあり
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
