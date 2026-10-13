"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import TextShimmer from "@/components/TextShimmer";

const AuroraLinkLandingPage = dynamic(
  () =>
    import("@/shaders/aurora-link-landing-page/AuroraLinkLandingPage").then(
      (mod) => mod.AuroraLinkLandingPage
    ),
  { ssr: false }
);

const stats = [
  { value: "10x", label: "Cheaper AI Inference", detail: "CPU-native via SyntriRX" },
  { value: "0", label: "Litres of Water", detail: "Air-cooled, zero water" },
  { value: "100%", label: "Australian Owned", detail: "Full data sovereignty" },
  { value: "850B", label: "Parameter Models", detail: "On standard CPUs" },
];

const problems = [
  {
    icon: "💧",
    title: "3.5M Litres/Day",
    description:
      "A single hyperscale data centre consumes an Olympic swimming pool of water daily for cooling.",
  },
  {
    icon: "⚡",
    title: "2,000+ MW Power",
    description:
      "Each facility draws enough electricity to power 80,000 homes, straining aging grids.",
  },
  {
    icon: "🏗️",
    title: "Farmland Destroyed",
    description:
      "Football-field-sized facilities bulldoze productive agricultural land and blight communities.",
  },
  {
    icon: "🔒",
    title: "Sovereignty at Risk",
    description:
      "Australian data on US-owned infrastructure is subject to CLOUD Act extraterritorial jurisdiction.",
  },
  {
    icon: "🎯",
    title: "Single Point of Failure",
    description:
      "Centralised facilities are vulnerable targets for cyber attacks and natural disasters.",
  },
  {
    icon: "🌡️",
    title: "Massive Carbon Footprint",
    description:
      "Each centre emits as much CO₂ as 3,000+ cars running 24/7.",
  },
];

const solutions = [
  {
    title: "Solar-Powered Nodes",
    description:
      "LiFePO4 battery storage with solar panels. Zero grid dependency, zero marginal electricity cost.",
    gradient: "from-sg-green to-emerald-400",
  },
  {
    title: "Air-Cooled Architecture",
    description:
      "Zero water consumption. No cooling towers, no water permits, no environmental impact.",
    gradient: "from-sg-blue to-cyan-400",
  },
  {
    title: "Mesh-Networked Fabric",
    description:
      "60 GHz wireless mesh links connecting distributed nodes into a single logical compute grid.",
    gradient: "from-sg-purple to-violet-400",
  },
  {
    title: "CPU-Native AI Inference",
    description:
      "SyntriRX runs models up to 850B parameters on standard CPUs — 10x cheaper than GPU clusters.",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    title: "Policy-First Placement",
    description:
      "Sovereignty and security constraints are hard filters. A cheaper node never outranks a policy rule.",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    title: "Evidence by Default",
    description:
      "Every execution produces a cryptographic receipt proving jurisdiction, policy, and data integrity.",
    gradient: "from-sg-blue to-sg-green",
  },
];

const techHighlights = [
  { name: "SyntriRX", description: "CPU-native inference engine" },
  { name: "IPvX", description: "Identity & policy intelligence layer" },
  { name: "iDOE", description: "Distributed orchestration engine" },
  { name: "RapidEngine", description: "Full-stack API gateway" },
  { name: "SynthLink", description: "Encrypted mesh overlay" },
  { name: "PMC-CoTa", description: "Distributed AI model architecture" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — ThreeUI Aurora Link */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <AuroraLinkLandingPage style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <TextShimmer className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Distributed Sovereign Compute
          </TextShimmer>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            AI is the future.
            <br />
            <span className="gradient-text">Data centres aren&apos;t.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sg-muted md:text-xl">
            Solar-powered, air-cooled micro-compute nodes forming a resilient
            mesh — replacing hyperscale data centres with distributed sovereign
            infrastructure.
          </p>
          <div className="pointer-events-auto mt-8 flex gap-4">
            <Link
              href="/technology"
              className="rounded-lg bg-gradient-to-r from-sg-blue to-sg-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Explore Technology
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-sg-border bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-sg-border bg-sg-dark/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="gradient-text text-4xl font-bold md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-sg-muted">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-400">
              The Problem
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Hyperscale data centres are{" "}
              <span className="text-rose-400">unsustainable</span>
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              The current model of centralised compute is destroying our
              environment, compromising our sovereignty, and creating critical
              vulnerabilities.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl border border-sg-border bg-sg-card p-6 transition-colors hover:border-rose-500/30"
              >
                <div className="text-3xl">{problem.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sg-muted">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-green">
              The Solution
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Smart AI Grids
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              Just as rooftop solar replaced centralised power plants, SmartGrids
              replaces centralised data centres with distributed micro-compute
              nodes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="group rounded-xl border border-sg-border bg-sg-card p-6 transition-all hover:border-sg-blue/30 hover:shadow-lg"
              >
                <div
                  className={`h-1 w-12 rounded-full bg-gradient-to-r ${solution.gradient} transition-all group-hover:w-20`}
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sg-muted">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-purple">
              Core Technology
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              The Intelligence Layer
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              Six proprietary systems working in concert — from request intake
              to cryptographic proof of execution.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techHighlights.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-row items-center gap-4 rounded-xl border border-sg-border bg-sg-card p-5 transition-colors hover:border-sg-purple/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sg-purple/10">
                  <span className="text-sm font-bold text-sg-purple">
                    {tech.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                  <p className="text-sm text-sg-muted">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sg-blue transition-colors hover:text-sg-green"
            >
              Deep dive into our architecture
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to build on{" "}
            <span className="gradient-text">sovereign infrastructure</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sg-muted">
            Whether you&apos;re a developer, enterprise, or government agency —
            SmartGrids provides the compute fabric you need with the sovereignty
            you require.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-sg-blue to-sg-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Partner With Us
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border border-sg-border bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
