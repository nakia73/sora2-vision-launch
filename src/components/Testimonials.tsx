import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "田中 健太",
      role: "マーケティングディレクター",
      company: "テック企業A社",
      content: "この講座のおかげで、社内の動画制作コストを70%削減できました。Sora2の実践的な使い方を学べたことで、すぐにビジネスに活用できています。",
      rating: 5,
    },
    {
      name: "佐藤 美咲",
      role: "フリーランスクリエイター",
      company: "個人事業主",
      content: "AIツールの使い方を学ぶのは初めてでしたが、わかりやすい説明と実践的な課題のおかげでスムーズに習得できました。今では複数のクライアントからSora2を使った案件を受注しています。",
      rating: 5,
    },
    {
      name: "鈴木 大輔",
      role: "教育コンテンツクリエイター",
      company: "教育系スタートアップ",
      content: "オンライン教育向けの動画制作に革命が起きました。Sora2を使うことで、これまで外注していた動画を内製化でき、制作スピードが5倍になりました。",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">
            受講生の声
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            実際に講座を受講し、スキルを習得した方々のリアルな感想
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl flex flex-col"
              style={{
                animation: 'fade-in-up 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border/50">
                <div className="font-bold text-lg mb-1">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
