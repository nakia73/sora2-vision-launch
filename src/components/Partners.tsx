const Partners = () => {
  const partners = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "🔷" },
    { name: "Adobe", logo: "🎨" },
    { name: "Sony", logo: "🎮" },
  ];

  return (
    <section className="py-16 border-y border-border/30 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            信頼されています
          </p>
          <h3 className="text-2xl font-bold">
            業界をリードする企業の社員が受講
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl hover:scale-110 transition-all duration-300 group cursor-pointer"
              style={{
                animation: 'scale-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {partner.logo}
              </div>
              <div className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            その他、Fortune 500企業の従業員 <span className="text-gradient font-bold">200社以上</span> が受講中
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
