import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "SmartGrids AI solutions for developers, enterprises, and government — sovereign compute for every workload.",
};

const segments = [
  {
    id: "developer",
    label: "Developers",
    title: "Ship on sovereign infrastructure in seconds",
    description:
      "Three commands. That's all it takes to deploy on distributed, solar-powered compute with full data sovereignty.",
    code: `$ npx smartgrids init
$ smartgrids integrate
$ smartgrids deploy`,
    features: [
      "5-second CLI integration",
      "Free developer tier",
      "1,600+ hostable services",
      "Full API gateway with execution receipts",
      "Auto-scaling across the mesh",
      "TypeScript, Python, Go, Rust SDKs",
    ],
    cta: "Start Building",
    ctaHref: "/contact",
    gradient: "from-sg-blue to-cyan-400",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    title: "AI infrastructure without the hyperscale lock-in",
    description:
      "SLA-backed managed services running on 100% Australian-owned infrastructure. No CLOUD Act exposure. No water. No fossil fuels.",
    features: [
      "SLA-backed uptime guarantees",
      "Managed databases, CDN, and security",
      "CPU-native inference at 10x lower cost",
      "Evidence-first execution with audit trails",
      "Dedicated account management",
      "Custom deployment topologies",
    ],
    cta: "Talk to Sales",
    ctaHref: "/contact",
    gradient: "from-sg-green to-emerald-400",
  },
  {
    id: "government",
    label: "Government",
    title: "Sovereign compute for national security",
    description:
      "Purpose-built for regulated workloads: defence, health, critical infrastructure. Every byte stays under Australian jurisdiction — provably.",
    features: [
      "IRAP certification pathway",
      "Privacy Act & SOCI Act compliant",
      "Hosting Certification Framework (HCF) aligned",
      "Cryptographic execution receipts",
      "Sovereignty zone enforcement via IPvX",
      "Policy-first placement — no exceptions",
    ],
    cta: "Request Briefing",
    ctaHref: "/contact",
    gradient: "from-sg-purple to-violet-400",
  },
];

const services = [
  { category: "AI / ML", margin: "90–95%", examples: "Inference, training, model hosting" },
  { category: "Serverless", margin: "92%", examples: "Functions, edge compute, event processing" },
  { category: "API Gateway", margin: "90%", examples: "Rate limiting, auth, load balancing" },
  { category: "Databases", margin: "80–85%", examples: "PostgreSQL, Redis, MongoDB managed" },
  { category: "CDN / Edge", margin: "82%", examples: "Static assets, edge caching, streaming" },
  { category: "Security", margin: "80%", examples: "WAF, DDoS protection, certificate management" },
  { category: "Game Hosting", margin: "65–70%", examples: "Dedicated servers, matchmaking, state sync" },
  { category: "Media", margin: "65%", examples: "Transcoding, streaming, image processing" },
];

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-green">
              Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Sovereign compute for{" "}
              <span className="gradient-text">every workload</span>
            </h1>
            <p className="mt-6 text-lg text-sg-muted">
              From developer side projects to classified government workloads —
              SmartGrids provides the right infrastructure with the right
              guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Segments */}
      {segments.map((segment, i) => (
        <section
          key={segment.id}
          id={segment.id}
          className={`py-24 ${i % 2 === 0 ? "border-t border-sg-border bg-sg-dark/30" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span
                  className={`inline-block rounded-full bg-gradient-to-r ${segment.gradient} px-3 py-1 text-xs font-semibold text-white`}
                >
                  {segment.label}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  {segment.title}
                </h2>
                <p className="mt-4 text-lg text-sg-muted">
                  {segment.description}
                </p>

                {segment.code && (
                  <div className="mt-6 rounded-lg border border-sg-border bg-sg-darker p-4 font-mono text-sm text-sg-green">
                    {segment.code.split("\n").map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  <Link
                    href={segment.ctaHref}
                    className={`inline-block rounded-lg bg-gradient-to-r ${segment.gradient} px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90`}
                  >
                    {segment.cta}
                  </Link>
                </div>
              </div>

              <div>
                <ul className="space-y-4">
                  {segment.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sg-muted"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-5 w-5 shrink-0 text-sg-green"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Services Overview */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-blue">
              Service Catalogue
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              1,600+ hostable services
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              23 revenue categories. Every self-hosted tool has a hosted,
              sovereign version.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="divide-y divide-sg-border rounded-xl border border-sg-border bg-sg-card">
              <div className="grid grid-cols-3 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-sg-muted">
                <span>Category</span>
                <span>Margin</span>
                <span>Examples</span>
              </div>
              {services.map((service) => (
                <div
                  key={service.category}
                  className="grid grid-cols-3 px-6 py-4 text-sm"
                >
                  <span className="font-medium text-white">
                    {service.category}
                  </span>
                  <span className="text-sg-green">{service.margin}</span>
                  <span className="text-sg-muted">{service.examples}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Market opportunity
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-sg-border bg-sg-card p-8 text-center">
              <div className="gradient-text text-4xl font-bold">$7.2B</div>
              <p className="mt-2 text-sm text-sg-muted">
                Australian cloud market (2025)
              </p>
            </div>
            <div className="rounded-xl border border-sg-border bg-sg-card p-8 text-center">
              <div className="gradient-text text-4xl font-bold">$61B</div>
              <p className="mt-2 text-sm text-sg-muted">
                Global edge AI market (2028)
              </p>
            </div>
            <div className="rounded-xl border border-sg-border bg-sg-card p-8 text-center">
              <div className="gradient-text text-4xl font-bold">42%</div>
              <p className="mt-2 text-sm text-sg-muted">
                Edge compute CAGR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Find the right solution for your workload
          </h2>
          <p className="mt-4 text-lg text-sg-muted">
            Talk to our team about your requirements and we&apos;ll show you how
            SmartGrids fits.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-sg-blue to-sg-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
