"use client";

import dynamic from "next/dynamic";

const AuroraLinkLandingPage = dynamic(
  () =>
    import("@/shaders/aurora-link-landing-page/AuroraLinkLandingPage").then(
      (mod) => mod.AuroraLinkLandingPage
    ),
  { ssr: false }
);

export default function HomePage() {
  return <AuroraLinkLandingPage style={{ width: "100vw", height: "100vh" }} />;
}
