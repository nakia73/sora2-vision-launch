import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "プログラミングの知識は必要ですか？",
      answer: "いいえ、プログラミングの知識は一切必要ありません。この講座はプロンプトを使った動画生成に特化しており、初心者の方でも安心して受講いただけます。",
    },
    {
      question: "受講期間に制限はありますか？",
      answer: "いいえ、すべてのプランで買い切り制となっており、購入後は期限なくコンテンツにアクセスできます。自分のペースで学習を進めることができます。",
    },
    {
      question: "Sora2のアカウントは含まれていますか？",
      answer: "講座料金にはSora2のアカウントは含まれていません。別途OpenAIのSora2アカウントをご用意いただく必要があります。アカウントの取得方法については講座内で詳しく解説しています。",
    },
    {
      question: "修了証明書はどのように発行されますか？",
      answer: "全カリキュラムを修了し、最終プロジェクトを提出いただいた方に、デジタル形式の修了証明書を発行いたします。LinkedInなどのプロフィールにも掲載可能です。",
    },
    {
      question: "返金保証の条件は？",
      answer: "購入から30日以内であれば、理由を問わず全額返金いたします。コンテンツに満足いただけない場合は、サポートまでご連絡ください。",
    },
    {
      question: "企業での利用は可能ですか？",
      answer: "はい、エンタープライズプランでは企業向けのカスタマイズカリキュラムや、チーム全体での導入サポートを提供しています。詳細はお問い合わせください。",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gradient mb-6">
            よくある質問
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            受講に関する疑問にお答えします
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-8 py-2 rounded-2xl border-none"
                style={{
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-gradient hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
