import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/technology", label: "Technology" },
    { href: "/solutions", label: "Solutions" },
    { href: "/solutions#developer", label: "Developer SDK" },
    { href: "/solutions#enterprise", label: "Enterprise" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/about#team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ],
  Resources: [
    { href: "/technology#architecture", label: "Architecture" },
    { href: "/technology#syntriRX", label: "SyntriRX" },
    { href: "/technology#ipvx", label: "IPvX" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-sg-border bg-sg-darker">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sg-blue to-sg-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Smart<span className="gradient-text">Grids</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sg-muted">
              Distributed sovereign compute for the AI era. Solar-powered,
              air-cooled, 100% Australian-owned.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sg-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-sg-border pt-8 md:flex-row">
          <p className="text-sm text-sg-muted">
            &copy; 2026 RapidStart Pty Ltd. All rights reserved.
          </p>
          <p className="text-sm text-sg-muted">
            100% Australian Owned &amp; Operated
          </p>
        </div>
      </div>
    </footer>
  );
}
