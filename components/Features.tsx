import { LinkIcon, Users, TrendingUp, BadgeDollarSign } from "lucide-react";

const featuresData = [
  {
    icon: <LinkIcon className="w-6 h-6 text-blue-600" />,
    title: "Easy Integration",
    description:
      "Connect your web app to our platform in minutes with a streamlined setup flow. No complicated configuration — just plug in, integrate, and begin tracking instantly.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Custom Affiliate Portal",
    description:
      "Offer your affiliates a clean, branded dashboard where they can access links, track clicks, view earnings, and stay engaged with your affiliate program.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Performance Tracking & Payouts",
    description:
      "Track every referral and conversion in real-time with clear analytics. Manage commissions effortlessly and pay affiliates based on verified activity.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-blue-600" />,
    title: "Flexible Reward Duration",
    description:
      "Choose how long affiliates earn commissions — 2 months, 3 months, or more. Customize reward periods to match your SaaS pricing model and growth strategy.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="text-primary">Affiliate Growth</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            A complete affiliate infrastructure refined for SaaS teams—built to
            help you onboard affiliates faster, track performance seamlessly,
            and scale revenue with confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`animate-fade-in animation-delay-${index * 100}`}
            >
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col items-start transition-all duration-300 hover:shadow-md border border-slate-200">
                <div className="p-3 bg-blue-50 rounded-xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
