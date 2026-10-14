import { useEffect, useRef, useState, type CSSProperties } from "react";

export type AuroraLinkLandingPageProps = { className?: string; style?: CSSProperties };

export function AuroraLinkLandingPage({ className = "", style }: AuroraLinkLandingPageProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [documentVisible, setDocumentVisible] = useState(() => typeof document === "undefined" || !document.hidden);
  const [hostVisible, setHostVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [painted, setPainted] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setHostVisible(entry?.isIntersecting ?? true), { rootMargin: "80px" });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const update = () => setDocumentVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  const mounted = hostVisible && documentVisible;
  useEffect(() => {
    setReady(false);
    setPainted(false);
    const onMessage = (event: MessageEvent) => {
      if (event.source !== frameRef.current?.contentWindow || event.data?.type !== "aurora-link-state") return;
      setPainted(true);
      setReady(event.data.state === "ready" || event.data.state === "fallback");
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [mounted]);

  return (
    <div ref={hostRef} className={`threeui-background aurora-link-landing-page${className ? ` ${className}` : ""}`} role="group" aria-label="SmartGrids AI interactive landing page" data-state={!mounted ? "paused" : ready ? "ready" : "loading"} style={{ position: "relative", overflow: "hidden", background: "#05080b", pointerEvents: "auto", ...style }}>
      {mounted ? (
        <iframe ref={frameRef} title="SmartGrids AI" src="/landing-pages/aurora-link.html" sandbox="allow-scripts allow-same-origin" loading="eager" onLoad={() => setPainted(true)} style={{ position: "absolute", inset: 0, display: "block", width: "100%", height: "100%", border: 0, background: "#05080b" }} />
      ) : null}
      {mounted && !painted ? (
        <div role="status" style={{ position: "absolute", inset: 0, display: "grid", placeContent: "center", gap: 16, textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#dceafa", background: "#05080b", pointerEvents: "none" }}>
          <span style={{ fontSize: 26, fontWeight: 300 }}>SmartGrids AI</span>
          <span style={{ fontSize: 12, color: "#9eb5cc" }}>Initialising compute nodes</span>
        </div>
      ) : null}
    </div>
  );
}
