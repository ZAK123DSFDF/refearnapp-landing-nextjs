import {
  Settings,
  Code2,
  CreditCard,
  Share2,
  BarChart3,
  ChevronDown,
} from "lucide-react";

const stepsData = [
  {
    number: "01",
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: "Create Your Organization",
    description:
      "Set up your organization with custom cookie settings, flexible commission tiers, and tracking rules tailored for your SaaS.",
  },
  {
    number: "02",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: "Connect Your Web App",
    description:
      "Add a lightweight script snippet to your frontend. No complexity — drop it in and start tracking instantly.",
  },
  {
    number: "03",
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Integrate Checkout Tracking",
    description:
      "Pass the tracking ID to your payment processor (like Paddle or Stripe) to automatically attribute successful sales to your Affiliates.",
  },
  {
    number: "04",
    icon: <Share2 className="w-10 h-10 text-primary" />,
    title: "Share Your Affiliate Portal",
    description:
      "Invite affiliates and give them a branded portal where they can generate links, view stats, and track progress.",
  },
  {
    number: "05",
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Track Performance Seamlessly",
    description:
      "Monitor real-time analytics as your affiliates drive signups and revenue. Optimize your growth effortlessly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-slate-50/50">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-primary">It Works</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A simple, guided workflow to launch and scale your affiliate program
            — without any technical overhead.
          </p>
        </div>

        {/* Steps Column */}
        <div className="flex flex-col items-center gap-12">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center gap-12"
            >
              <div className="w-full bg-white shadow-lg rounded-2xl p-8 text-center animate-fade-in border border-slate-100">
                <div className="flex flex-col items-center gap-3 mb-4">
                  <div className="text-blue-600/20 text-4xl font-bold">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-500 text-lg">{step.description}</p>
              </div>

              {/* Show Arrow if not the last item */}
              {index < stepsData.length - 1 && (
                <ChevronDown className="w-10 h-10 text-blue-600/40 animate-bounce" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
