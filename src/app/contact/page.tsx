import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SmartGrids AI — partnerships, investment, enterprise enquiries, and developer access.",
};

const enquiryTypes = [
  {
    title: "Developer Access",
    description:
      "Get early access to the SmartGrids SDK and start building on sovereign infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-sg-blue to-cyan-400",
  },
  {
    title: "Enterprise Enquiry",
    description:
      "Discuss managed sovereign infrastructure for your organisation with SLA-backed services.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
    gradient: "from-sg-green to-emerald-400",
  },
  {
    title: "Government & Defence",
    description:
      "Request a sovereign compute briefing for defence, health, or critical infrastructure workloads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: "from-sg-purple to-violet-400",
  },
  {
    title: "Investment & Partnerships",
    description:
      "Explore strategic investment or partnership opportunities with the SmartGrids team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-400",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-blue">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Let&apos;s build{" "}
              <span className="gradient-text">together</span>
            </h1>
            <p className="mt-6 text-lg text-sg-muted">
              Whether you&apos;re a developer, enterprise, government, or
              investor — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Types */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {enquiryTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-xl border border-sg-border bg-sg-card p-8 transition-colors hover:border-sg-blue/30"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${type.gradient} text-white`}
                >
                  {type.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sg-muted">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-white">
            Send us a message
          </h2>
          <p className="mt-4 text-center text-sg-muted">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>

          <form className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-2 w-full rounded-lg border border-sg-border bg-sg-card px-4 py-3 text-sm text-white placeholder-sg-muted focus:border-sg-blue focus:outline-none focus:ring-1 focus:ring-sg-blue"
                  placeholder="Mo"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-2 w-full rounded-lg border border-sg-border bg-sg-card px-4 py-3 text-sm text-white placeholder-sg-muted focus:border-sg-blue focus:outline-none focus:ring-1 focus:ring-sg-blue"
                  placeholder="Hassan"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-sg-border bg-sg-card px-4 py-3 text-sm text-white placeholder-sg-muted focus:border-sg-blue focus:outline-none focus:ring-1 focus:ring-sg-blue"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="organisation"
                className="block text-sm font-medium text-white"
              >
                Organisation
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                className="mt-2 w-full rounded-lg border border-sg-border bg-sg-card px-4 py-3 text-sm text-white placeholder-sg-muted focus:border-sg-blue focus:outline-none focus:ring-1 focus:ring-sg-blue"
                placeholder="Your company or agency"
              />
            </div>

            <div>
              <label
                htmlFor="enquiryType"
                className="block text-sm font-medium text-white"
              >
                Enquiry Type
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                className="mt-2 w-full rounded-lg border border-sg-border bg-sg-card px-4 py-3 text-sm text-white focus:border-sg-blue focus:outline-none focus:ring-1 focus:ring-sg-blue"
              >
                <option value="">Select an option</option>
                <option value="developer">Developer Access</option>
                <option value="enterprise">Enterprise Enquiry</option>
                <option value="government">Government &amp; Defence</option>
                <option value="investment">Investment &amp; Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-sg-border bg-sg-card px-4 py-3 text-sm text-white placeholder-sg-muted focus:border-sg-blue focus:outline-none focus:ring-1 focus:ring-sg-blue"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-sg-blue to-sg-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-sg-muted">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:hello@smartgrids.ai"
              className="font-medium text-sg-blue hover:text-sg-green"
            >
              hello@smartgrids.ai
            </a>
          </p>
          <p className="mt-2 text-sm text-sg-muted">
            Melbourne, Australia — 100% Australian Owned &amp; Operated
          </p>
        </div>
      </section>
    </div>
  );
}
