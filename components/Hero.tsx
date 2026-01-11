import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 filter blur-3xl opacity-70 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Launch Your <span className="text-primary">Affiliate Program</span>{" "}
            in Minutes
          </h1>

          <p className="text-xl text-slate-500 font-normal max-w-3xl mx-auto leading-relaxed">
            A simple, powerful platform to track referrals, monitor performance,
            and grow your SaaS without any complexity.
          </p>

          <div className="flex justify-center items-center pt-8">
            <Link
              href="/signup"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-primary-foreground transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 shadow-xl hover:scale-105 active:scale-95"
            >
              Start for Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
