import { Star } from "lucide-react";

const testimonialsData = [
  {
    quote:
      "AffiliateSaaS transformed our partner program. What used to take hours of manual work each week now happens automatically. Our affiliate revenue has increased by 215% in just 6 months.",
    author: "Sarah Johnson",
    role: "CMO",
    company: "TechFlow SaaS",
  },
  {
    quote:
      "The elegant design and intuitive interface make managing our affiliates a breeze. It's the perfect blend of simplicity and powerful features.",
    author: "Michael Chen",
    role: "Head of Growth",
    company: "AnalyticsPro",
  },
  {
    quote:
      "As someone who's tried every affiliate platform out there, I can confidently say this is the best solution for SaaS companies. Integration was smooth and our partners love the dashboard.",
    author: "Emma Williams",
    role: "Partnership Lead",
    company: "CloudSecurity",
  },
  {
    quote:
      "Switching to AffiliateSaaS was the best decision we made this year. The automation alone saves us dozens of hours every month.",
    author: "David Miller",
    role: "Founder",
    company: "ScaleOps",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Loved by SaaS Companies
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Hear from businesses that have transformed their growth with our
            affiliate platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, index) => (
            <div
              key={index}
              className={`animate-fade-in animation-delay-${(index + 1) * 200}`}
            >
              <div className="glass-card p-8 rounded-2xl h-full border border-slate-200 flex flex-col justify-between transition-all hover:shadow-md">
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-slate-600 italic mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
