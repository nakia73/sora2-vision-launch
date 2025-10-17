import { Mail, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Sora2 Academy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              日本初のSora2完全マスター講座。
              AIによる動画生成の未来を、あなたの手に。
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">講座について</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">カリキュラム</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">料金プラン</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">受講生の声</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">サポート</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">特定商取引法</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">フォロー</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg glass-card hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-card hover:scale-110 transition-transform">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-card hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg glass-card hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              info@sora2academy.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Sora2 Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
