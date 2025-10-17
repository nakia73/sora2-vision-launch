import { CheckCircle2 } from "lucide-react";

const Curriculum = () => {
  const modules = [
    {
      week: "Week 1",
      title: "Sora2の基礎理解",
      topics: [
        "AIによる動画生成の概要と歴史",
        "Sora2のアーキテクチャと仕組み",
        "基本的なプロンプトの書き方",
        "初めての動画生成実践",
      ],
    },
    {
      week: "Week 2",
      title: "高度なプロンプト技術",
      topics: [
        "効果的なプロンプトエンジニアリング",
        "シーン構成とストーリーテリング",
        "スタイルとムードのコントロール",
        "プロンプトの最適化テクニック",
      ],
    },
    {
      week: "Week 3",
      title: "実践プロジェクト制作",
      topics: [
        "商業向け動画の制作",
        "教育コンテンツの作成",
        "SNS向けショート動画制作",
        "ブランディング動画の企画・制作",
      ],
    },
    {
      week: "Week 4",
      title: "ワークフロー最適化",
      topics: [
        "効率的な制作フローの構築",
        "他ツールとの連携方法",
        "品質管理とレビュープロセス",
        "ビジネスへの実装戦略",
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">
            カリキュラム
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            4週間で完結する、体系的かつ実践的な学習プログラム
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group glass-card p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300"
              style={{
                animation: 'scale-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex px-6 py-3 rounded-2xl bg-gradient-primary text-white font-bold text-lg">
                    {module.week}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 group-hover:text-gradient transition-all duration-300">
                    {module.title}
                  </h3>
                  <ul className="space-y-4">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            + 最終プロジェクト：オリジナル動画作品の制作とプレゼンテーション
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
