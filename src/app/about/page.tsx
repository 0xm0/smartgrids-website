import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "SmartGrids AI is building distributed sovereign compute infrastructure — 100% Australian-owned, solar-powered, and air-cooled.",
};

const milestones = [
  {
    phase: "Phase 1",
    title: "Developer SDK",
    description:
      "Free-tier developer access with 5-second CLI integration. Build, test, deploy on sovereign infrastructure.",
    status: "current",
  },
  {
    phase: "Phase 2",
    title: "Enterprise SaaS",
    description:
      "Managed AI infrastructure with SLA-backed services for enterprise workloads.",
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "Government Sovereign Compute",
    description:
      "IRAP-certified sovereign compute for defence, health, and critical infrastructure.",
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "International Expansion",
    description:
      "Five Eyes, AUKUS, and Indo-Pacific partner network rollout.",
    status: "upcoming",
  },
];

const values = [
  {
    title: "Sovereignty First",
    description:
      "Data should be governed by the laws of the country that owns it — not by the laws of the country that hosts it.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "100% renewable energy target, zero water cooling, minimal land footprint. Technology should heal, not harm.",
  },
  {
    title: "Distributed Resilience",
    description:
      "No single point of failure. If one node goes down, the mesh reroutes. The system heals itself.",
  },
  {
    title: "Evidence Over Trust",
    description:
      "Every operation produces a cryptographic execution receipt. Don't trust — verify.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-blue">
              About SmartGrids AI
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Building Australia&apos;s{" "}
              <span className="gradient-text">sovereign compute</span> future
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sg-muted">
              SmartGrids AI is a product of RapidStart — an Australian company
              on a mission to replace hyperscale data centres with distributed,
              solar-powered micro-compute infrastructure that keeps data
              sovereign, secure, and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="team" className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-green">
              Leadership
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Founded by builders
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-sg-border bg-sg-card p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sg-blue to-sg-green text-2xl font-bold text-white">
                MH
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                Mo Hassan
              </h3>
              <p className="mt-1 text-sm font-medium text-sg-blue">
                Co-Founder
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sg-muted">
                Technology architect and systems thinker driving the vision for
                distributed sovereign compute. Leading the development of
                RapidEngine, SyntriRX, and the SmartGrids platform architecture.
              </p>
            </div>

            <div className="rounded-xl border border-sg-border bg-sg-card p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sg-purple to-sg-blue text-2xl font-bold text-white">
                HM
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                Haris Memic
              </h3>
              <p className="mt-1 text-sm font-medium text-sg-purple">
                Co-Founder
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sg-muted">
                Business strategist and operations leader focused on
                go-to-market execution, partnerships, and scaling SmartGrids
                across government and enterprise sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-purple">
              Our Principles
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              What we stand for
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-sg-border bg-sg-card p-8"
              >
                <h3 className="text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sg-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-blue">
              Roadmap
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              From pilot to platform
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              Currently seeking partners for a 4–5 node demonstrator pilot to
              validate the technology.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {milestones.map((milestone, i) => (
              <div
                key={milestone.phase}
                className={`flex gap-6 rounded-xl border p-6 ${
                  milestone.status === "current"
                    ? "border-sg-blue/50 bg-sg-blue/5"
                    : "border-sg-border bg-sg-card"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      milestone.status === "current"
                        ? "bg-sg-blue text-white"
                        : "bg-sg-border text-sg-muted"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="mt-2 h-full w-px bg-sg-border" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sg-muted">
                    {milestone.phase}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-sg-muted">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Want to be part of the journey?
          </h2>
          <p className="mt-4 text-lg text-sg-muted">
            We&apos;re looking for strategic partners, investors, and early
            adopters who believe in sovereign infrastructure.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-sg-blue to-sg-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
