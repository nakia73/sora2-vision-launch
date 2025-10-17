import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-gradient animate-fade-in-up">
            今すぐSora2マスターへの
            <br />
            第一歩を踏み出そう
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            限定価格は今月末まで。
            <br className="hidden sm:block" />
            AI動画生成の最前線で活躍する未来が、ここから始まります。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" className="group min-w-[240px]">
              無料相談を予約
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group min-w-[240px]">
              <Mail className="mr-2 w-5 h-5" />
              資料請求
            </Button>
          </div>

          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-sm text-muted-foreground">
              ✓ 30日間返金保証　✓ 無料サンプルレッスン視聴可能　✓ 分割払い対応
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
