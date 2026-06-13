import { createFileRoute } from "@tanstack/react-router";
import heroRoulette from "@/assets/hero-roulette.jpg";
import casinoFloor from "@/assets/casino-floor.jpg";
import ecosystemBg from "@/assets/ecosystem-bg.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import liveStudioImg from "@/assets/live-studio.jpg";
import securityImg from "@/assets/security.jpg";
import aiLayerImg from "@/assets/ai-layer.jpg";
import showcasePlatform from "@/assets/showcase-platform.jpg";
import showcaseApi from "@/assets/showcase-api.jpg";
import showcaseMobile from "@/assets/showcase-mobile.jpg";
import gradientMesh from "@/assets/gradient-mesh.jpg";
import clientOps1 from "@/assets/clients/client-ops-1.jpg.asset.json";
import clientTeam from "@/assets/clients/client-team.jpg.asset.json";
import clientStudio1 from "@/assets/clients/client-studio-1.jpg.asset.json";
import clientTables from "@/assets/clients/client-tables.jpg.asset.json";
import clientPartners from "@/assets/clients/client-partners.jpg.asset.json";
import clientMeeting from "@/assets/clients/client-meeting.jpg.asset.json";
import clientRoulette from "@/assets/clients/client-roulette.jpg.asset.json";
import clientCamera from "@/assets/clients/client-camera.jpg.asset.json";
import clientWalkthrough from "@/assets/clients/client-walkthrough.jpg.asset.json";
import brandLogo from "@/assets/bitdecentro-logo.png.asset.json";
import brandMark from "@/assets/bitdecentro-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bitdecentro — Your Technology Partner for Your Own Brand" },
      {
        name: "description",
        content:
          "Build. Own. Scale. Monetize. Bitdecentro helps casino operators build a fully owned gaming ecosystem — not just another rented platform.",
      },
      { property: "og:title", content: "Bitdecentro — Sovereign Casino Infrastructure" },
      {
        property: "og:description",
        content:
          "Own the Brand. Own the Players. Own the Technology. Enterprise-grade casino infrastructure for operators and investors.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-display selection:bg-accent/30 overflow-x-hidden">
      {/* Brand watermark — fixed, behind all content */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
      >
        <img
          src={brandMark.url}
          alt=""
          className="w-[70vw] max-w-[900px] opacity-[0.04] select-none"
          style={{ filter: "blur(0.5px)" }}
        />
      </div>
      <div className="relative z-10">
      <Nav />
      <Hero />
      <TrustStrip />
      <Ownership />
      <Showcase />
      <DashboardShowcase />
      <Comparison />
      <Ecosystem />
      <LiveStudio />
      <Security />
      <AIFeatures />
      <ClientShowcase />
      <Partnership />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={brandLogo.url} alt="Bitdecentro" className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          <a href="#showcase" className="hover:text-accent transition-colors">Showcase</a>
          <a href="#ecosystem" className="hover:text-accent transition-colors">Ecosystem</a>
          <a href="#security" className="hover:text-cyan transition-colors">Security</a>
          <a href="#ai" className="hover:text-magenta transition-colors">AI Layer</a>
          <a href="#partnership" className="hover:text-emerald transition-colors">Partnership</a>
        </div>
        <a
          href="#partnership"
          className="px-4 py-2 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-widest rounded-sm transition-transform active:scale-95 hover:shadow-glow"
        >
          Schedule Demo
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center px-6 overflow-hidden border-b border-border"
    >
      {/* Roulette background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroRoulette}
          alt="Luxury roulette wheel"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center scale-110 animate-[spin_120s_linear_infinite] origin-center"
          style={{ transformOrigin: "60% 70%" }}
        />
        {/* Vignette + readability layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute -top-1/4 -left-40 size-[600px] rounded-full opacity-30 blur-3xl z-0"
        style={{ background: "radial-gradient(circle, var(--magenta), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 size-[700px] rounded-full opacity-25 blur-3xl z-0"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full py-28">
        <div className="max-w-3xl animate-entrance">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-background/60 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent">
              The House Always Wins — When You Own It
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance leading-[0.9] mb-8">
            Bitdecentro —{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-spectrum)" }}
            >
              Your Technology Partner
            </span>{" "}
            <span className="text-muted-foreground/80">for Your Own Brand</span>
          </h1>

          <p className="text-xl md:text-3xl font-mono mb-5 tracking-tight">
            <span className="text-accent">Build.</span>{" "}
            <span className="text-cyan">Own.</span>{" "}
            <span className="text-emerald">Scale.</span>{" "}
            <span className="text-magenta">Monetize.</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mb-10">
            Sovereign casino infrastructure for global operators who refuse to rent their future.
            We engineer the vault — you spin the wheel and keep every chip.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#partnership"
              className="group relative px-7 py-4 bg-accent text-accent-foreground font-bold rounded-sm text-xs uppercase tracking-widest transition-all hover:shadow-glow active:scale-95"
            >
              Book Investor Meeting →
            </a>
            <a
              href="#showcase"
              className="px-7 py-4 border border-border-strong bg-background/40 backdrop-blur-sm font-bold rounded-sm text-xs uppercase tracking-widest hover:bg-surface transition-colors"
            >
              Start Partnership
            </a>
          </div>

          {/* Inline metric strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] border-t border-border-strong pt-6 max-w-2xl">
            <Metric label="Uptime" value="99.999%" color="text-emerald" />
            <Metric label="TPS" value="24,500/s" color="text-cyan" />
            <Metric label="Latency" value="<12ms" color="text-accent" />
            <Metric label="Volume" value="$1.2B YTD" color="text-magenta" />
          </div>
        </div>
      </div>

      {/* Floating chip cluster (decorative) */}
      <div
        aria-hidden
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-10 font-mono text-[10px] uppercase tracking-widest"
      >
        {[
          { l: "Red 36", c: "text-destructive" },
          { l: "Black 17", c: "text-foreground" },
          { l: "Green 00", c: "text-emerald" },
        ].map((b) => (
          <div
            key={b.l}
            className="px-3 py-2 border border-border-strong bg-background/70 backdrop-blur-md rounded-sm"
          >
            <span className={b.c}>● </span>
            <span className="text-muted-foreground">{b.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Metric({ label, value, color = "text-accent" }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap">
      <span className="text-muted-foreground">{label}</span>
      <span className={color}>{value}</span>
    </div>
  );
}

function TrustStrip() {
  const logos = ["NEXUS GAMING", "ORION BET", "MERIDIAN CASINO", "AURUM PLAY", "SOLARIS LIVE", "VELOCITY 24"];
  return (
    <section className="border-b border-border bg-surface py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground mb-6">
          Powering Operators Across 14 Jurisdictions
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {logos.map((l) => (
            <span key={l} className="text-sm font-bold tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ownership() {
  const pillars = [
    {
      n: "01",
      kicker: "Brand",
      title: "Your Brand Identity",
      desc: "Custom casino design, logo, UI, and player experience built to your exact specifications. Every pixel is yours.",
      color: "magenta",
      stat: "100%",
      statLabel: "White-label",
    },
    {
      n: "02",
      kicker: "Players",
      title: "Your Player Database",
      desc: "Complete ownership of users, analytics, and customer relationships. No shared data pools, no third-party access.",
      color: "cyan",
      stat: "0",
      statLabel: "Data shared",
    },
    {
      n: "03",
      kicker: "Tech",
      title: "Your Technology Stack",
      desc: "Scalable infrastructure that can evolve into APIs and white-label products — under your control, on your roadmap.",
      color: "emerald",
      stat: "∞",
      statLabel: "Extensible",
    },
  ];

  return (
    <section id="ownership" className="relative px-6 py-32 overflow-hidden border-y border-border">
      {/* Casino floor background */}
      <div className="absolute inset-0 z-0">
        <img
          src={casinoFloor}
          alt="Luxury casino floor with poker tables and chips"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-background/90" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 mb-20 items-end">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em]">
                01 · Sovereignty
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
              Own the <span className="text-magenta">Brand</span>.
              <br />
              Own the <span className="text-cyan">Players</span>.
              <br />
              Own the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-spectrum)" }}
              >
                Technology
              </span>.
            </h2>
          </div>
          <div className="lg:pl-12 lg:border-l border-border-strong">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
              Bitdecentro helps casino operators build a fully owned gaming ecosystem —
              not just another rented platform. Break free from vendor lock-in.
            </p>
            <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald animate-pulse" />
                <span className="text-emerald">Operator-owned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-destructive" />
                <span className="text-muted-foreground line-through">Vendor-locked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border-strong">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 md:p-10 bg-background/85 backdrop-blur-md hover:bg-surface/95 transition-all overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: `var(--${p.color})` }}
              />
              <div
                className="absolute -bottom-32 -right-32 size-64 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700"
                style={{ background: `var(--${p.color})` }}
              />

              <div className="flex items-start justify-between mb-10 relative">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: `var(--${p.color})` }}
                >
                  /{p.n} · {p.kicker}
                </span>
                <div
                  className="text-right"
                  style={{ color: `var(--${p.color})` }}
                >
                  <div className="text-3xl font-extrabold leading-none">{p.stat}</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                    {p.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold mb-4 tracking-tight relative leading-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative mb-8">
                {p.desc}
              </p>

              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest relative">
                <span
                  className="transition-all"
                  style={{ color: `var(--${p.color})` }}
                >
                  Read protocol
                </span>
                <span
                  className="transition-transform group-hover:translate-x-1"
                  style={{ color: `var(--${p.color})` }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const items = [
    {
      n: "01",
      title: "Branded Casino Platform",
      url: "your-brand.casino",
      desc: "Full-stack player-facing platform: lobby, slots, live tables, wallet, KYC, bonuses, loyalty engine — shipped under your brand from day one.",
      tech: ["Next.js", "PostgreSQL", "Redis", "Stripe", "Cloudflare"],
      image: showcasePlatform,
      accent: "cyan",
      reverse: false,
    },
    {
      n: "02",
      title: "API & White-Label Layer",
      url: "api.your-brand.io",
      desc: "Productize your platform. License your aggregator API, onboard sub-operators, and monetize your infrastructure as a SaaS revenue stream.",
      tech: ["GraphQL", "REST", "Webhooks", "OAuth 2.0", "Swagger"],
      image: showcaseApi,
      accent: "emerald",
      reverse: true,
    },
    {
      n: "03",
      title: "Native Mobile Casino App",
      url: "iOS · Android",
      desc: "Pixel-perfect native apps with biometric login, push retention loops, real-time wallet sync and store-approved compliance flows.",
      tech: ["Swift", "Kotlin", "React Native", "Firebase", "OneSignal"],
      image: showcaseMobile,
      accent: "magenta",
      reverse: false,
    },
  ];
  return (
    <section id="showcase" className="py-28 px-6 border-t border-border relative overflow-hidden">
      <img
        src={gradientMesh}
        aria-hidden
        loading="lazy"
        alt=""
        width={1600}
        height={900}
        className="absolute -top-40 inset-x-0 w-full h-[500px] object-cover opacity-[0.08] pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "var(--cyan)" }}>
            02 · Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Platforms we've{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-spectrum)" }}
            >
              built, shipped, and scaled.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Reference deployments from the Bitdecentro engineering studio — each one owned outright
            by the operator behind it.
          </p>
        </div>

        <div className="space-y-24">
          {items.map((p) => (
            <div
              key={p.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${p.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative group">
                <div
                  className="absolute -inset-4 blur-2xl rounded-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{ background: `var(--${p.accent})` }}
                />
                <div className="relative border border-border-strong rounded-sm overflow-hidden bg-surface">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-elevated">
                    <div className="size-2.5 rounded-full bg-destructive/70" />
                    <div className="size-2.5 rounded-full" style={{ background: "var(--amber)" }} />
                    <div className="size-2.5 rounded-full" style={{ background: "var(--emerald)" }} />
                    <div className="ml-auto text-[10px] font-mono text-muted-foreground tracking-widest">
                      {p.url}
                    </div>
                  </div>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={832}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="size-10 grid place-items-center font-mono font-bold text-xs rounded-sm"
                    style={{
                      background: `color-mix(in oklab, var(--${p.accent}) 15%, transparent)`,
                      color: `var(--${p.accent})`,
                    }}
                  >
                    {p.n}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.url}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-[1.1]">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">{p.desc}</p>
                <div className="mb-8">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-[11px] font-mono rounded-full border"
                        style={{
                          borderColor: `color-mix(in oklab, var(--${p.accent}) 40%, transparent)`,
                          color: `var(--${p.accent})`,
                          background: `color-mix(in oklab, var(--${p.accent}) 8%, transparent)`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#partnership"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all"
                  style={{ color: `var(--${p.accent})` }}
                >
                  Discuss a similar build <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    { feature: "Ownership Model", icon: "◈", trad: "Pay forever", ours: "Build an owned asset" },
    { feature: "UI/UX Control", icon: "✦", trad: "Limited customization", ours: "Fully customizable" },
    { feature: "Architecture", icon: "▣", trad: "Vendor dependency", ours: "Technology independence" },
    { feature: "External Connectivity", icon: "⌘", trad: "Restricted integrations", ours: "Open API architecture" },
    { feature: "Data Governance", icon: "◉", trad: "Data controlled externally", ours: "Data controlled by you" },
    { feature: "Growth Vector", icon: "▲", trad: "Hard to scale", ours: "Designed for expansion" },
    { feature: "Exit Potential", icon: "★", trad: "Zero IP value", ours: "High IP valuation" },
  ];

  return (
    <section className="relative py-32 px-6 border-t border-border overflow-hidden">
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[900px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--emerald), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 mb-16 items-end">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "var(--emerald)" }} />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em]" style={{ color: "var(--emerald)" }}>
                03 · Audit Log
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Why Operators{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-spectrum)" }}>
                Choose
              </span>{" "}
              This Model
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed lg:pl-12 lg:border-l border-border-strong">
            A side-by-side audit of what you actually own when the contract ends.
            Most platforms leave you with nothing. We leave you with infrastructure.
          </p>
        </div>

        {/* VS Header bar */}
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-4 mb-3 font-mono text-[10px] uppercase tracking-[0.25em]">
          <div className="text-muted-foreground px-2">Capability</div>
          <div className="text-destructive/80 flex items-center gap-2 px-4">
            <span className="size-1.5 rounded-full bg-destructive" />
            Traditional Vendor
          </div>
          <div className="flex items-center gap-2 px-4" style={{ color: "var(--emerald)" }}>
            <span className="size-1.5 rounded-full animate-pulse" style={{ background: "var(--emerald)" }} />
            Bitdecentro Sovereign
          </div>
        </div>

        {/* Row stack */}
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div
              key={r.feature}
              className="group grid grid-cols-[1.4fr_1fr_1fr] gap-4 items-stretch rounded-sm overflow-hidden border border-border hover:border-border-strong transition-colors"
            >
              {/* Feature label */}
              <div className="flex items-center gap-4 p-5 bg-surface">
                <span
                  className="font-mono text-lg opacity-60"
                  style={{ color: "var(--emerald)" }}
                >
                  {r.icon}
                </span>
                <div>
                  <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                    /{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base font-bold tracking-tight">{r.feature}</div>
                </div>
              </div>

              {/* Traditional */}
              <div className="relative p-5 bg-background flex items-center gap-3 border-l border-border">
                <span className="text-destructive/70 font-bold text-lg leading-none">✕</span>
                <span className="text-sm text-muted-foreground line-through decoration-destructive/40">
                  {r.trad}
                </span>
              </div>

              {/* Bitdecentro */}
              <div
                className="relative p-5 flex items-center gap-3 border-l border-border overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, color-mix(in oklab, var(--emerald) 10%, transparent), transparent)",
                }}
              >
                <span className="text-base font-bold leading-none" style={{ color: "var(--emerald)" }}>
                  ✓
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--emerald)" }}>
                  {r.ours}
                </span>
                <span
                  className="absolute right-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--emerald)" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer summary */}
        <div className="mt-10 grid sm:grid-cols-3 gap-px bg-border border border-border-strong rounded-sm overflow-hidden">
          {[
            { k: "7/7", v: "Categories Won", c: "emerald" },
            { k: "0%", v: "Vendor Lock-in", c: "cyan" },
            { k: "100%", v: "IP Retained", c: "accent" },
          ].map((s) => (
            <div key={s.v} className="bg-surface p-6 text-center">
              <div className="text-3xl font-extrabold" style={{ color: `var(--${s.c})` }}>{s.k}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const blocks = [
    {
      n: "01",
      icon: "🎮",
      title: "Gaming Platform",
      color: "cyan",
      items: ["Casino lobby & game management", "Wallet & payment systems", "Bonuses, loyalty & CRM", "Multi-device experience"],
    },
    {
      n: "02",
      icon: "🎥",
      title: "Live Casino Infrastructure",
      color: "magenta",
      items: ["OBS / VMIX streaming setup", "Custom table & studio design", "Live dealer integration", "Broadcast-quality production"],
    },
    {
      n: "03",
      icon: "🔌",
      title: "API & White-Label Layer",
      color: "emerald",
      items: ["Future API licensing opportunities", "Third-party integrations", "White-label expansion model", "Scalable partner onboarding"],
    },
    {
      n: "04",
      icon: "🤖",
      title: "AI & Intelligence Layer",
      color: "accent",
      items: ["Fraud detection & risk scoring", "Player behavior analytics", "Retention & VIP prediction", "AI support & automation"],
    },
  ];
  return (
    <section id="ecosystem" className="relative py-32 px-6 overflow-hidden border-y border-border">
      {/* Tech ecosystem background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ecosystemBg}
          alt="Casino technology ecosystem network"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-background/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "var(--magenta)" }} />
              <span
                className="text-[11px] font-mono font-bold uppercase tracking-[0.3em]"
                style={{ color: "var(--magenta)" }}
              >
                05 · Ecosystem
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
              Complete Casino{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-spectrum)" }}
              >
                Technology Ecosystem
              </span>
            </h2>
          </div>
          <div className="lg:pl-10 lg:border-l border-border-strong">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              The technology layer that powers your brand across web, mobile,
              live casino, and future AI-driven services — modular, sovereign, infinitely composable.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-cyan">● 4 Layers</span>
              <span className="text-magenta">● 16 Modules</span>
              <span className="text-emerald">● 1 Stack</span>
            </div>
          </div>
        </div>

        {/* Stack diagram */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-strong/40 border border-border-strong rounded-sm overflow-hidden">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className="group relative bg-background/80 backdrop-blur-xl p-8 transition-all overflow-hidden hover:bg-surface/90"
            >
              {/* Layer index strip */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                style={{ background: `var(--${b.color})` }}
              />
              <div
                className="absolute -bottom-32 -right-24 size-64 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700"
                style={{ background: `var(--${b.color})` }}
              />

              {/* Header row */}
              <div className="relative flex items-start justify-between mb-8">
                <div>
                  <div
                    className="text-[9px] font-mono uppercase tracking-[0.3em] mb-2"
                    style={{ color: `var(--${b.color})` }}
                  >
                    Layer /{b.n}
                  </div>
                  <div className="text-5xl font-extrabold tracking-tighter opacity-80 leading-none">
                    {b.n}
                  </div>
                </div>
                <div
                  className="size-14 grid place-items-center rounded-sm text-2xl border"
                  style={{
                    background: `color-mix(in oklab, var(--${b.color}) 10%, transparent)`,
                    borderColor: `color-mix(in oklab, var(--${b.color}) 40%, transparent)`,
                  }}
                >
                  {b.icon}
                </div>
              </div>

              <h3 className="relative text-lg font-extrabold mb-5 tracking-tight leading-tight">
                {b.title}
              </h3>

              <ul className="relative space-y-3 text-xs text-muted-foreground mb-6">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 items-start">
                    <span
                      className="size-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: `var(--${b.color})` }}
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              {/* Status footer */}
              <div className="relative pt-5 border-t border-border flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-muted-foreground">Status</span>
                <span className="flex items-center gap-1.5" style={{ color: `var(--${b.color})` }}>
                  <span
                    className="size-1.5 rounded-full animate-pulse"
                    style={{ background: `var(--${b.color})` }}
                  />
                  Operational
                </span>
              </div>

              {/* Connector line between cards (desktop) */}
              {i < blocks.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-1/2 -right-px w-3 h-px"
                  style={{ background: `var(--${b.color})`, opacity: 0.4 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Foundation bar */}
        <div className="mt-px bg-background/80 backdrop-blur-xl border border-t-0 border-border-strong rounded-b-sm p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="size-2 rotate-45 bg-accent" />
            Foundation · Bitdecentro Core Infrastructure
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>Kubernetes</span>
            <span>Cloudflare</span>
            <span>Vault</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "var(--cyan)" }}>
            06 · Security & Fraud Protection
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
            Enterprise-grade defense for{" "}
            <span style={{ color: "var(--cyan)" }}>operator-grade stakes.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-px bg-border border border-border">
          <div className="relative bg-surface overflow-hidden min-h-[400px]">
            <img
              src={securityImg}
              alt="Cybersecurity shield network visualization"
              loading="lazy"
              width={1400}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/40 to-transparent" />
            <div className="relative p-10 h-full flex flex-col justify-end">
              <div className="font-mono text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--cyan)" }}>
                Defense Layer · Active
              </div>
              <div className="text-3xl font-extrabold tracking-tight">
                $4.2M+ <span className="text-muted-foreground text-base font-normal">in fraud prevented YTD</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-surface p-10">
              <div className="text-3xl mb-6">🛡️</div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-tight">Enterprise Protection</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Device fingerprinting", "Bot detection", "IP intelligence", "Velocity monitoring", "Suspicious activity alerts"].map((i) => (
                  <li key={i} className="flex gap-3 items-baseline">
                    <span className="text-xs" style={{ color: "var(--cyan)" }}>▣</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface p-10">
              <div className="text-3xl mb-6">📊</div>
              <h3 className="text-lg font-bold mb-6 uppercase tracking-tight">Business Outcomes</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {["Reduce fraud losses", "Protect player funds", "Maintain platform integrity", "Strengthen compliance readiness", "Improve operational visibility"].map((i) => (
                  <li key={i} className="flex gap-3 items-baseline">
                    <span className="text-xs" style={{ color: "var(--cyan)" }}>▣</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIFeatures() {
  const items = [
    {
      n: "01",
      icon: "🕵️",
      title: "AI Fraud Detection",
      desc: "Predict and flag suspicious behavior before losses occur.",
      color: "magenta",
      metric: "+$2.4M",
      metricLabel: "Saved / month",
      tags: ["ML Models", "Real-time"],
    },
    {
      n: "02",
      icon: "📈",
      title: "Player Behavior Analytics",
      desc: "Understand engagement, retention, and lifetime value trends.",
      color: "cyan",
      metric: "94%",
      metricLabel: "Prediction Acc.",
      tags: ["LTV Score", "Cohorts"],
    },
    {
      n: "03",
      icon: "🎯",
      title: "VIP & Churn Prediction",
      desc: "Identify high-value players and at-risk users automatically.",
      color: "emerald",
      metric: "+38%",
      metricLabel: "VIP Retention",
      tags: ["Auto-Tier", "Win-back"],
    },
    {
      n: "04",
      icon: "💬",
      title: "AI Support & Personalization",
      desc: "Automated support, recommendations, and smart bonus delivery.",
      color: "accent",
      metric: "8.2s",
      metricLabel: "Avg Resolve",
      tags: ["LLM Agent", "Smart Bonus"],
    },
  ];
  return (
    <section id="ai" className="relative py-32 px-6 overflow-hidden border-y border-border bg-background">
      {/* Layered AI background */}
      <img
        src={aiLayerImg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 size-[500px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--magenta), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-1/4 size-[500px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "var(--magenta)" }} />
              <span
                className="text-[11px] font-mono font-bold uppercase tracking-[0.3em]"
                style={{ color: "var(--magenta)" }}
              >
                07 · Intelligence Layer
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-magenta/30 text-[9px] font-mono uppercase tracking-widest text-magenta">
                <span className="size-1.5 rounded-full bg-magenta animate-pulse" />
                Live
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
              AI Features That{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-spectrum)" }}
              >
                Increase Profitability
              </span>
            </h2>
          </div>
          <div className="lg:pl-10 lg:border-l border-border-strong">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5">
              Four models trained on billions of player events. Every interaction
              becomes a signal — every signal becomes margin.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-emerald">↑ 34% GGR</span>
              <span className="text-cyan">↓ 67% Churn</span>
              <span className="text-magenta">↑ 12× ROAS</span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <article
              key={i.title}
              className="group relative p-7 bg-background/70 backdrop-blur-xl border border-border rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-transparent"
              style={{
                boxShadow: "0 0 0 1px transparent",
              }}
            >
              {/* Gradient border on hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, var(--${i.color}), transparent 60%)`,
                  padding: "1px",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              {/* Glow */}
              <div
                aria-hidden
                className="absolute -bottom-32 -right-20 size-64 rounded-full opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-700"
                style={{ background: `var(--${i.color})` }}
              />

              {/* Top row */}
              <div className="relative flex items-start justify-between mb-8">
                <div
                  className="size-14 grid place-items-center text-2xl rounded-sm border"
                  style={{
                    background: `color-mix(in oklab, var(--${i.color}) 10%, transparent)`,
                    borderColor: `color-mix(in oklab, var(--${i.color}) 35%, transparent)`,
                  }}
                >
                  {i.icon}
                </div>
                <div
                  className="text-[10px] font-mono uppercase tracking-[0.3em]"
                  style={{ color: `var(--${i.color})` }}
                >
                  /{i.n}
                </div>
              </div>

              {/* Title + desc */}
              <h3 className="relative text-lg font-extrabold mb-3 tracking-tight leading-tight">
                {i.title}
              </h3>
              <p className="relative text-xs text-muted-foreground leading-relaxed mb-6">
                {i.desc}
              </p>

              {/* Big metric */}
              <div className="relative pt-5 border-t border-border mb-5">
                <div
                  className="text-3xl font-extrabold tracking-tight leading-none"
                  style={{ color: `var(--${i.color})` }}
                >
                  {i.metric}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  {i.metricLabel}
                </div>
              </div>

              {/* Tag chips */}
              <div className="relative flex flex-wrap gap-1.5">
                {i.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-sm text-[9px] font-mono uppercase tracking-widest border"
                    style={{
                      borderColor: `color-mix(in oklab, var(--${i.color}) 30%, transparent)`,
                      color: `var(--${i.color})`,
                      background: `color-mix(in oklab, var(--${i.color}) 6%, transparent)`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Animated scan line */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, var(--${i.color}), transparent)` }}
              />
            </article>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 p-5 bg-background/60 backdrop-blur-xl border border-border-strong rounded-sm">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span
              className="size-2 rounded-full animate-pulse"
              style={{ background: "var(--magenta)" }}
            />
            Models retrained · every 6 hours · 2.1B events processed today
          </div>
          <a
            href="#partnership"
            className="text-[11px] font-bold font-mono uppercase tracking-widest text-magenta hover:opacity-80 transition-opacity"
          >
            Request AI Demo →
          </a>
        </div>
      </div>
    </section>
  );
}

function DashboardShowcase() {
  return (
    <section className="py-28 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--emerald)" }}>
              04 · Console · Operator View
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Every metric. <br />
              <span style={{ color: "var(--emerald)" }}>Every player. Every dollar.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              A single source of truth across your entire operation — revenue, retention, risk, and
              real-time player behavior. Built for operators who run their floors like a hedge fund
              runs its book.
            </p>
            <div className="grid grid-cols-2 gap-6 font-mono">
              <Stat label="GGR Lift" value="+34%" color="emerald" />
              <Stat label="VIP Retention" value="92%" color="cyan" />
              <Stat label="Fraud Caught" value="99.4%" color="magenta" />
              <Stat label="Time-to-Insight" value="<1s" color="accent" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 blur-3xl rounded-full opacity-50"
              style={{ background: "var(--gradient-spectrum)" }} />
            <div className="relative border border-border-strong rounded-sm overflow-hidden shadow-glow">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface">
                <div className="size-2.5 rounded-full bg-destructive/70" />
                <div className="size-2.5 rounded-full" style={{ background: "var(--amber)" }} />
                <div className="size-2.5 rounded-full" style={{ background: "var(--emerald)" }} />
                <div className="ml-auto text-[10px] font-mono text-muted-foreground tracking-widest">
                  console.bitdecentro.io
                </div>
              </div>
              <img
                src={dashboardImg}
                alt="Bitdecentro operator dashboard with live casino analytics"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, color = "accent" }: { label: string; value: string; color?: string }) {
  return (
    <div className="border-l-2 pl-4" style={{ borderColor: `var(--${color})` }}>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-2xl font-bold" style={{ color: `var(--${color})` }}>{value}</div>
    </div>
  );
}

function LiveStudio() {
  return (
    <section className="relative py-32 px-6 overflow-hidden border-t border-border">
      <img
        src={liveStudioImg}
        alt="Live casino broadcast studio with cameras and roulette table"
        loading="lazy"
        width={1600}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-xl">
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "var(--magenta)" }}>
            On-Air · Broadcast-Grade
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Your studio. <br />
            <span style={{ color: "var(--magenta)" }}>Your show. Your house edge.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Bitdecentro engineers the entire live-casino stack — OBS / VMIX pipelines, custom
            studio buildouts, multi-camera rigs, and dealer interfaces. Broadcast-grade production
            without the broadcast-network overhead.
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-xs">
            <span className="text-muted-foreground">
              <span style={{ color: "var(--cyan)" }}>4K</span> Multi-cam
            </span>
            <span className="text-muted-foreground">
              <span style={{ color: "var(--emerald)" }}>&lt;180ms</span> Latency
            </span>
            <span className="text-muted-foreground">
              <span style={{ color: "var(--magenta)" }}>24/7</span> Operation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


function ClientShowcase() {
  const gallery = [
    { src: clientPartners.url, label: "Leadership Sync", tag: "On-site · Europe", span: "row-span-2" },
    { src: clientStudio1.url, label: "Live Studio Floor", tag: "Studio 3 · Blackjack", span: "" },
    { src: clientRoulette.url, label: "Roulette QA", tag: "Hardware Calibration", span: "" },
    { src: clientTables.url, label: "Table Provisioning", tag: "18 Live Tables", span: "col-span-2" },
    { src: clientCamera.url, label: "Camera Rig Tuning", tag: "Broadcast Setup", span: "" },
    { src: clientWalkthrough.url, label: "Floor Walkthrough", tag: "Operations Review", span: "" },
    { src: clientOps1.url, label: "NOC + Engineering", tag: "24/7 Monitoring", span: "" },
    { src: clientTeam.url, label: "Delivery Team", tag: "On-prem Integration", span: "" },
    { src: clientMeeting.url, label: "Strategy Session", tag: "Product Roadmap", span: "" },
  ];

  const reviews = [
    {
      name: "Giorgi T.",
      role: "Director of Operations · Happy Customer (Confidential)",
      rating: 5,
      quote:
        "Bitdecentro shipped our live casino studio end-to-end — 18 tables, broadcast stack, RNG and player wallets. Migration was zero-downtime and GGR lifted 31% in the first quarter.",
    },
    {
      name: "Alexei V.",
      role: "CTO · Happy Customer · Europe",
      rating: 5,
      quote:
        "Their team is genuinely on the floor with us. Camera rigs, dealer UI, latency tuning — they own the full stack and treat the project like it's their own brand.",
    },
    {
      name: "Marina K.",
      role: "Head of Product · Strategic Partner",
      rating: 5,
      quote:
        "Most vendors disappear after go-live. Bitdecentro stayed embedded — weekly product reviews, AI risk dashboards, real KPI accountability. Easiest renewal we've ever signed.",
    },
  ];

  return (
    <section id="clients" className="relative py-28 px-6 border-t border-border overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, var(--emerald) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 mb-16 items-end">
          <div>
            <div
              className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-4"
              style={{ color: "var(--emerald)" }}
            >
              08 · Field Proof · Live Deployment
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              Built on the floor with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-spectrum)" }}
              >
                trusted operators
              </span>
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Real partners. Real studios. Real revenue. A behind-the-scenes look at one of our active
              live casino deployments — engineering, dealer studios, and operations delivered hand-in-hand
              with the operator's team.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] font-mono uppercase tracking-wider">
              <span className="px-3 py-1.5 rounded-full border border-emerald/40 text-emerald bg-emerald/5">
                ★★★★★ 4.9 / 5
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border text-foreground/70">
                18 Live Tables Shipped
              </span>
              <span className="px-3 py-1.5 rounded-full border border-border text-foreground/70">
                Zero-downtime Migration
              </span>
            </div>
          </div>
        </div>

        {/* Featured operator card */}
        <div className="mb-12 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center font-extrabold text-2xl text-background"
            style={{ background: "var(--gradient-spectrum)" }}
          >
            HC
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/50 mb-1">
              Featured Client
            </div>
            <div className="text-xl font-bold">Happy Customer 🔒 — Europe <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/50 ml-2">NDA Protected</span></div>
            <div className="text-sm text-foreground/60 mt-1">
              Full live casino stack · 18 tables · RNG + Wallet + AI risk · On-prem broadcast
            </div>
          </div>
          <div className="flex gap-6 md:border-l md:border-border md:pl-6">
            {[
              { v: "+31%", l: "GGR Lift" },
              { v: "18", l: "Live Tables" },
              { v: "99.99%", l: "Uptime" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-extrabold text-emerald">{s.v}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-foreground/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3 mb-16">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald mb-0.5">
                  {g.tag}
                </div>
                <div className="text-sm font-semibold text-foreground">{g.label}</div>
              </figcaption>
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald animate-pulse" />
            </figure>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl border border-border bg-surface/60 backdrop-blur-sm p-6 hover:border-emerald/40 transition-colors"
            >
              <div className="absolute -top-3 left-6 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-background border border-emerald/40 text-emerald rounded">
                Verified Client
              </div>
              <div className="flex gap-0.5 text-emerald text-lg mb-3">
                {"★".repeat(r.rating)}
                <span className="text-foreground/20">{"★".repeat(5 - r.rating)}</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">"{r.quote}"</p>
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-foreground/50 mt-0.5">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-foreground/60 border-t border-border pt-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Live deployment · monitored from our NOC · 24/7
          </div>
          <a href="#partnership" className="text-emerald hover:underline">
            Become our next case study →
          </a>
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section id="partnership" className="py-28 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "var(--emerald)" }}>
            08 · Partnership Model
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            Capital-efficient infrastructure for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-spectrum)" }}
            >
              sovereign operators.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A three-stage partnership ladder designed for long-term alignment between technology
            and business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <PricingCard
            phase="Phase 01 · Deployment"
            title="One-Time Setup"
            price="From $50,000"
            desc="Platform foundation, infrastructure setup, wallet system, core casino modules, initial integrations, security framework, and deployment."
            cta="Initiate Setup"
            color="cyan"
          />
          <PricingCard
            phase="Phase 02 · Operations"
            title="Monthly Technology Partnership"
            price="$10,000 / month"
            desc="Dedicated development team, new features, enhancements, optimization, QA, security improvements, AI development, and ongoing support."
            cta="Start Partnership"
            color="accent"
            featured
          />
          <PricingCard
            phase="Phase 03 · Alignment"
            title="Strategic Alignment"
            price="10% Profit Sharing"
            desc="Long-term partnership model where technology and business growth stay perfectly aligned. Equity-grade incentive structure."
            cta="Discuss Strategy"
            color="emerald"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  phase,
  title,
  price,
  desc,
  cta,
  color,
  featured,
}: {
  phase: string;
  title: string;
  price: string;
  desc: string;
  cta: string;
  color: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative p-10 flex flex-col bg-surface overflow-hidden ${
        featured ? "border-2 shadow-glow lg:-translate-y-2" : "border border-border"
      }`}
      style={featured ? { borderColor: `var(--${color})` } : undefined}
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `var(--${color})` }}
      />
      <div
        className="absolute -bottom-32 -right-32 size-64 rounded-full opacity-20 blur-3xl"
        style={{ background: `var(--${color})` }}
      />
      {featured && (
        <div
          className="absolute top-0 right-0 text-accent-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-tighter"
          style={{ background: `var(--${color})` }}
        >
          Recommended
        </div>
      )}
      <span
        className="relative text-[10px] font-mono uppercase tracking-widest mb-6"
        style={{ color: `var(--${color})` }}
      >
        {phase}
      </span>
      <h3 className="relative text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">{title}</h3>
      <div className="relative text-base font-mono mb-8" style={{ color: `var(--${color})` }}>{price}</div>
      <p className="relative text-sm text-muted-foreground leading-relaxed mb-10">{desc}</p>
      <div className="relative mt-auto pt-8 border-t border-border">
        <button
          className="w-full py-3 text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-90"
          style={
            featured
              ? { background: `var(--${color})`, color: "var(--accent-foreground)" }
              : { border: `1px solid var(--${color})`, color: `var(--${color})` }
          }
        >
          {cta}
        </button>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 px-6 border-t border-border bg-surface relative overflow-hidden">
      <img
        src={gradientMesh}
        aria-hidden
        loading="lazy"
        alt=""
        width={1600}
        height={900}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface" />
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] mb-6"
          style={{ color: "var(--cyan)" }}>
          09 · Positioning Statement
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02] mb-8">
          Bitdecentro — Your Technology Partner{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-spectrum)" }}
          >
            for Your Own Brand.
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          We don't just build casino software. We build technology assets that can evolve into
          APIs, white-label products, AI-powered gaming platforms, and scalable revenue
          infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-10 py-5 bg-accent text-accent-foreground font-bold text-xs uppercase tracking-widest rounded-sm hover:shadow-glow transition-all">
            Book Investor Meeting
          </button>
          <button className="px-10 py-5 border border-border-strong font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-background transition-colors">
            Start Partnership
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <img src={brandLogo.url} alt="Bitdecentro" className="h-6 w-auto" />
        </div>
        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest text-center">
          © 2025 Bitdecentro Technology Infrastructure · Operator-Grade · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
