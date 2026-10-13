import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "SyntriRX, IPvX, iDOE, and the four-plane architecture powering SmartGrids distributed sovereign compute.",
};

const coreSystems = [
  {
    id: "syntriRX",
    name: "SyntriRX",
    tagline: "CPU-Native Inference Engine",
    description:
      "Runs AI models up to 850B parameters directly on standard CPU hardware — eliminating GPU dependency for inference workloads. 10x lower cost than GPU-based inference.",
    details: [
      "Supports models up to 850B parameters on CPU",
      "10x cost reduction vs GPU inference",
      "Compatible with NVIDIA L40S–GB300 and AMD MI300X–MI350X for GPU workloads",
      "Best value: 8×MI300X at $150K–$250K for 850B models",
    ],
    color: "sg-blue",
  },
  {
    id: "ipvx",
    name: "IPvX",
    tagline: "Identity & Policy Intelligence Layer",
    description:
      "Not a replacement for IP networking — an intelligence layer above it. Gives every workload, service, and node a persistent identity with attached policy, capability declarations, and sovereignty zone.",
    details: [
      "Persistent workload identity across relocations",
      "Policy and capability resolution before network delivery",
      "Sovereignty zone enforcement at the identity layer",
      "Capability resolver runs before any data moves",
    ],
    color: "sg-purple",
  },
  {
    id: "idoe",
    name: "iDOE",
    tagline: "Intelligent Distributed Orchestration Engine",
    description:
      "The placement brain. Decides where work runs using a two-stage process: first eliminate all resources that fail hard constraints, then rank survivors by SLO alignment.",
    details: [
      "Two-stage eliminate-then-rank placement",
      "9 resource dimensions for scheduling",
      "Policy determines eligibility, optimisation determines preference",
      "A cheaper node never outranks a sovereignty restriction",
    ],
    color: "sg-green",
  },
  {
    id: "rapidengine",
    name: "RapidEngine",
    tagline: "Full-Stack API Gateway",
    description:
      "The front door. Authenticates requests, normalises them into workload specifications carrying intent and policy, and returns structured results with execution receipts.",
    details: [
      "Request authentication and normalisation",
      "Intent + policy workload specifications",
      "Structured results with execution receipts",
      "5-second CLI integration: npx smartgrids init",
    ],
    color: "sg-blue",
  },
  {
    id: "synthlink",
    name: "SynthLink",
    tagline: "Encrypted Mesh Overlay",
    description:
      "Authenticated, policy-aware network overlay fabric. Encrypted inter-node communications with service discovery and sovereignty zone enforcement.",
    details: [
      "End-to-end encrypted inter-node comms",
      "Policy-aware routing and service discovery",
      "Sovereignty zone boundary enforcement",
      "Built on 60 GHz airFiber mesh links",
    ],
    color: "sg-purple",
  },
  {
    id: "pmccota",
    name: "PMC-CoTa",
    tagline: "Distributed AI Model Architecture",
    description:
      "Proprietary AI model architecture optimised for distributed inference across heterogeneous compute nodes — both CPU and GPU — across the mesh.",
    details: [
      "Heterogeneous compute support (CPU + GPU)",
      "Optimised for distributed inference",
      "Cross-node model sharding",
      "Adaptive workload balancing",
    ],
    color: "sg-green",
  },
];

const planes = [
  {
    name: "Control Plane",
    components: "RapidEngine, MrSerious, EEV3",
    description: "Accept requests, establish context, decompose work into DAGs",
    color: "sg-blue",
  },
  {
    name: "Policy & Intelligence Plane",
    components: "IPvX, iDOE",
    description: "Determine eligibility, sovereignty, capability, and placement",
    color: "sg-purple",
  },
  {
    name: "Execution Plane",
    components: "CoINT, Wing, SyntriRX, SynthLink",
    description: "Reserve hardware, execute workloads, supervise nodes",
    color: "sg-green",
  },
  {
    name: "Evidence Plane",
    components: "Cryptographic receipts, audit trail",
    description:
      "Observe, prove, retry, reroute, quarantine, recover — with full audit history",
    color: "amber-500",
  },
];

const infraSpecs = [
  { label: "Rack Size", value: "42U" },
  { label: "Relay Tier", value: "1U — Mesh gateway, load balancing, IPvX overlay" },
  { label: "CPU Tier", value: "2U — SyntriRX inference, general compute, databases" },
  { label: "GPU Tier", value: "4U — Training, large-model inference, HPC" },
  { label: "Power", value: "Solar panels + LiFePO4 batteries" },
  { label: "Cooling", value: "Air-cooled — zero water" },
  { label: "Networking", value: "Ubiquiti airFiber 60 HD — 60 GHz wireless mesh" },
  { label: "Rack CapEx", value: "$178K – $264K AUD" },
];

export default function TechnologyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-purple">
              Technology
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              The architecture behind{" "}
              <span className="gradient-text-purple">sovereign compute</span>
            </h1>
            <p className="mt-6 text-lg text-sg-muted">
              Six proprietary systems orchestrated across four planes — from
              request intake to cryptographic proof of execution.
            </p>
          </div>
        </div>
      </section>

      {/* Four Planes */}
      <section
        id="architecture"
        className="border-t border-sg-border bg-sg-dark/30 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              The Four-Plane Architecture
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              Every request flows through four planes — each with a distinct
              responsibility. Policy is enforced before execution. Evidence is
              generated after.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {planes.map((plane, i) => (
              <div
                key={plane.name}
                className="rounded-xl border border-sg-border bg-sg-card p-8"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${plane.color}/10 text-sm font-bold text-${plane.color}`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {plane.name}
                  </h3>
                </div>
                <p className="mt-2 text-xs font-medium text-sg-muted">
                  {plane.components}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-sg-muted">
                  {plane.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-sg-blue/30 bg-sg-blue/5 p-6 text-center">
            <p className="text-sm font-semibold text-sg-blue">
              The Golden Rule
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              &ldquo;Policy determines eligibility. Optimisation determines
              preference.&rdquo;
            </p>
            <p className="mt-2 text-sm text-sg-muted">
              A cheaper or faster node never outranks a hard sovereignty or
              security restriction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Core Systems
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              Each system has a single, clear responsibility — and communicates
              with others through defined interfaces.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {coreSystems.map((system) => (
              <div
                key={system.id}
                id={system.id}
                className="rounded-xl border border-sg-border bg-sg-card p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${system.color}/10`}
                      >
                        <span
                          className={`text-xs font-bold text-${system.color}`}
                        >
                          {system.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {system.name}
                        </h3>
                        <p className="text-sm text-sg-muted">
                          {system.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-sg-muted">
                      {system.description}
                    </p>
                  </div>
                  <div className="lg:w-80">
                    <ul className="space-y-2">
                      {system.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-sg-muted"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`mt-0.5 h-4 w-4 shrink-0 text-${system.color}`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="border-t border-sg-border bg-sg-dark/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sg-green">
              Hardware
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              42U Micro-Compute Node
            </h2>
            <p className="mt-4 text-lg text-sg-muted">
              Each node is a self-contained, solar-powered compute cell with
              three server tiers.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="divide-y divide-sg-border rounded-xl border border-sg-border bg-sg-card">
              {infraSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm font-semibold text-white">
                    {spec.label}
                  </span>
                  <span className="text-sm text-sg-muted">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Want to see it in action?
          </h2>
          <p className="mt-4 text-lg text-sg-muted">
            We&apos;re building a 4–5 node demonstrator pilot. Partner with us
            to validate the technology.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-sg-blue to-sg-green px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
