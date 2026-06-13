import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Pinterest icon – lucide-react doesn't ship one, so we inline SVG  */
/* ------------------------------------------------------------------ */
function PinterestIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="17" x2="12" y2="22" />
      <path d="M8 22l4-5" />
      <path d="M19.07 4.93A10 10 0 1 0 15 20.59" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const services = [
  { name: "Living Room", href: "/services/living-room" },
  { name: "Kitchen & Dining", href: "/services/kitchen-dining" },
  { name: "Bedroom", href: "/services/bedroom" },
  { name: "Bathroom", href: "/services/bathroom" },
  { name: "Office & Study", href: "/services/office-study" },
  { name: "Outdoor", href: "/services/outdoor" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Process", href: "/process" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Careers", href: "/careers" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/v.decor_vd", label: "Instagram" },
  { icon: PinterestIcon, href: "https://pinterest.com/thevdecor", label: "Pinterest" },
  { icon: Facebook, href: "https://facebook.com/thevdecor", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/thevdecor", label: "Twitter" },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* ── Brand column ──────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-baseline gap-1 group">
              <span className="font-heading text-3xl font-bold tracking-tight text-primary">
                V
              </span>
              <span className="font-heading text-2xl font-semibold tracking-wide">
                Decor
              </span>
            </Link>

            {/* Tagline */}
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-background/60">
              Crafting Spaces That Inspire
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-background/50 max-w-xs">
              We transform ordinary rooms into extraordinary living
              experiences&nbsp;— blending timeless elegance with modern
              functionality to create spaces uniquely yours.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/50 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Services column ────────────────────────────────────── */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-background/50 transition-colors duration-300 hover:text-primary"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company column ─────────────────────────────────────── */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm text-background/50 transition-colors duration-300 hover:text-primary"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ─────────────────────────────────────── */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-background/50">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  Karnataka & Odisha
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a
                  href="tel:+919611105592"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  +91 96111 05592
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <a
                  href="mailto:info@thevdecor.com"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  info@thevdecor.com
                </a>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:gap-3"
            >
              Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────── */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>&copy; 2026 V&nbsp;Decor. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
