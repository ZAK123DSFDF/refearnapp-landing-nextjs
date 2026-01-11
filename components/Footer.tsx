import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 px-3">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand Column */}
          <div className="max-w-sm space-y-4">
            <Logo iconSize={32} />
            <p className="text-slate-500 leading-relaxed">
              The most elegant way to build your affiliate marketing program for
              your SaaS business.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} RefearnApp. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link
              href="/terms"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
