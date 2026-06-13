import { createFileRoute } from "@tanstack/react-router";
import heroVault from "@/assets/hero-vault.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import liveStudioImg from "@/assets/live-studio.jpg";
import securityImg from "@/assets/security.jpg";
import aiLayerImg from "@/assets/ai-layer.jpg";

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
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/30">
      <Nav />
      <Hero />
      <Ownership />
      <DashboardShowcase />
      <Comparison />
      <Ecosystem />
      <LiveStudio />
      <Security />
      <AIFeatures />
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
          <div className="size-6 bg-accent rounded-sm rotate-45" />
          <span className="font-extrabold tracking-tighter text-lg">BITDECENTRO</span>
        </a>
        <div className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          <a href="#ecosystem" className="hover:text-accent transition-colors">Ecosystem</a>
          <a href="#security" className="hover:text-accent transition-colors">Security</a>
          <a href="#ai" className="hover:text-accent transition-colors">AI Layer</a>
          <a href="#partnership" className="hover:text-accent transition-colors">Partnership</a>
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
    <section id="top" className="relative pt-24 pb-40 px-6 overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 size-[800px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="animate-entrance">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent-soft mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent">
              Enterprise Infrastructure · v4.0
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-balance leading-[0.92] mb-8">
            Bitdecentro — Your Technology Partner{" "}
            <span className="text-muted-foreground">for Your Own Brand</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground text-pretty max-w-2xl mb-4 font-mono">
            <span className="text-accent">Build.</span> <span className="text-accent">Own.</span>{" "}
            <span className="text-accent">Scale.</span>{" "}
            <span className="text-accent">Monetize.</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mb-12">
            We engineer the vault; you hold the keys. Sovereign casino infrastructure for global
            operators who refuse to rent their future.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#partnership"
              className="px-7 py-4 bg-accent text-accent-foreground font-bold rounded-sm text-xs uppercase tracking-widest transition-all hover:shadow-glow active:scale-95"
            >
              Become a Technology Partner
            </a>
            <a
              href="#ecosystem"
              className="px-7 py-4 border border-border-strong font-bold rounded-sm text-xs uppercase tracking-widest hover:bg-surface transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>

        <div className="relative animate-entrance [animation-delay:200ms] hidden lg:block">
          <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
          <div className="relative border border-border-strong bg-surface overflow-hidden rounded-sm">
            <img
              src={heroVault}
              alt="Bronze casino vault representing technology ownership"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
              <span className="text-muted-foreground">Asset_ID</span>
              <span className="text-accent">BDC-VAULT-001</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 bg-accent-soft border-t border-border py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[11px]">
          <Metric label="Uptime" value="99.999%" />
          <Metric label="TPS" value="24,500/s" />
          <Metric label="Volume" value="$1.2B YTD" />
          <Metric label="Sec_Audit" value="Passed_2025" />
          <Metric label="Latency" value="<12ms" />
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-accent">{value}</span>
    </div>
  );
}

function Ownership() {
  const pillars = [
    {
      icon: "🏷️",
      title: "Your Brand Identity",
      desc: "Custom casino design, logo, UI, and player experience built to your exact specifications. Every pixel is yours.",
    },
    {
      icon: "🗄️",
      title: "Your Player Database",
      desc: "Complete ownership of users, analytics, and customer relationships. No shared data pools, no third-party access.",
    },
    {
      icon: "🔌",
      title: "Your Technology Stack",
      desc: "Scalable infrastructure that can evolve into APIs and white-label products — under your control, on your roadmap.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">
            01 · Sovereignty
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Own the Brand. Own the Players.{" "}
            <span className="text-accent">Own the Technology.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bitdecentro helps casino operators build a fully owned gaming ecosystem — not just
            another rented platform. Break free from vendor lock-in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className="group relative p-8 border border-border bg-background hover:border-accent/40 transition-colors"
            >
              <div className="text-3xl mb-6 transition-transform duration-500 group-hover:scale-110">
                {p.icon}
              </div>
              <h3 className="text-base font-bold mb-3 uppercase tracking-wider">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/40">
                /0{idx + 1}
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
    ["Ownership Model", "Pay forever", "Build an owned asset"],
    ["UI/UX Control", "Limited customization", "Fully customizable"],
    ["Architecture", "Vendor dependency", "Technology independence"],
    ["External Connectivity", "Restricted integrations", "Open API architecture"],
    ["Data Governance", "Data controlled externally", "Data controlled by you"],
    ["Growth Vector", "Hard to scale", "Designed for expansion"],
    ["Exit Potential", "Zero IP value", "High IP valuation"],
  ];
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">
            02 · Audit Log
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Operators Choose This Model
          </h2>
        </div>

        <div className="border border-border bg-surface rounded-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse font-mono text-xs md:text-[13px] min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-surface-elevated">
                <th className="p-5 font-bold text-muted-foreground uppercase tracking-widest">
                  Feature Set
                </th>
                <th className="p-5 font-bold text-muted-foreground uppercase tracking-widest">
                  Traditional Platform
                </th>
                <th className="p-5 font-bold text-accent uppercase tracking-widest">
                  Bitdecentro
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map(([feature, traditional, ours]) => (
                <tr key={feature} className="hover:bg-surface-elevated/50 transition-colors">
                  <td className="p-5 text-foreground">{feature}</td>
                  <td className="p-5 text-muted-foreground line-through decoration-destructive/40">
                    {traditional}
                  </td>
                  <td className="p-5 text-accent">{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
      items: ["Casino lobby & game management", "Wallet & payment systems", "Bonuses, loyalty & CRM", "Multi-device experience"],
    },
    {
      n: "02",
      icon: "🎥",
      title: "Live Casino Infrastructure",
      items: ["OBS / VMIX streaming setup", "Custom table & studio design", "Live dealer integration", "Broadcast-quality production"],
    },
    {
      n: "03",
      icon: "🔌",
      title: "API & White-Label Layer",
      items: ["Future API licensing opportunities", "Third-party integrations", "White-label expansion model", "Scalable partner onboarding"],
    },
    {
      n: "04",
      icon: "🤖",
      title: "AI & Intelligence Layer",
      items: ["Fraud detection & risk scoring", "Player behavior analytics", "Retention & VIP prediction", "AI support & automation"],
    },
  ];
  return (
    <section id="ecosystem" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">
            03 · Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Complete Casino Technology Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg">
            Bitdecentro provides the technology layer that powers your brand across web, mobile,
            live casino, and future AI-driven services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {blocks.map((b) => (
            <div key={b.title} className="bg-background p-8 group hover:bg-surface-elevated transition-colors">
              <div className="flex items-center justify-between mb-8">
                <div className="size-9 bg-accent-soft text-accent grid place-items-center font-mono font-bold text-xs">
                  {b.n}
                </div>
                <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                  {b.icon}
                </div>
              </div>
              <h3 className="text-base font-bold mb-5 uppercase tracking-tight leading-tight">
                {b.title}
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {b.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">
            04 · Security & Fraud Protection
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
            Enterprise-grade defense for{" "}
            <span className="text-accent">operator-grade stakes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-surface p-10">
            <div className="text-3xl mb-6">🛡️</div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">Enterprise Protection</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Device fingerprinting", "Bot detection", "IP intelligence", "Velocity monitoring", "Suspicious activity alerts"].map((i) => (
                <li key={i} className="flex gap-3 items-baseline">
                  <span className="text-accent text-xs">▣</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface p-10">
            <div className="text-3xl mb-6">📊</div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">Business Outcomes</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Reduce fraud losses", "Protect player funds", "Maintain platform integrity", "Strengthen compliance readiness", "Improve operational visibility"].map((i) => (
                <li key={i} className="flex gap-3 items-baseline">
                  <span className="text-accent text-xs">▣</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIFeatures() {
  const items = [
    { icon: "🕵️", title: "AI Fraud Detection", desc: "Predict and flag suspicious behavior before losses occur." },
    { icon: "📈", title: "Player Behavior Analytics", desc: "Understand engagement, retention, and lifetime value trends." },
    { icon: "🎯", title: "VIP & Churn Prediction", desc: "Identify high-value players and at-risk users automatically." },
    { icon: "💬", title: "AI Support & Personalization", desc: "Automated support, recommendations, and smart bonus delivery." },
  ];
  return (
    <section id="ai" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">
            05 · Future-Ready with AI
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
            AI Features That <span className="text-accent">Increase Profitability</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div
              key={i.title}
              className="p-7 bg-background border border-border hover:border-accent/40 transition-colors group"
            >
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-500">
                {i.icon}
              </div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider">{i.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
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
          <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-4">
            06 · Partnership Model
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-4">
            Capital-efficient infrastructure for{" "}
            <span className="text-accent">sovereign operators.</span>
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
          />
          <PricingCard
            phase="Phase 02 · Operations"
            title="Monthly Technology Partnership"
            price="$10,000 / month"
            desc="Dedicated development team, new features, enhancements, optimization, QA, security improvements, AI development, and ongoing support."
            cta="Start Partnership"
            featured
          />
          <PricingCard
            phase="Phase 03 · Alignment"
            title="Strategic Alignment"
            price="10% Profit Sharing"
            desc="Long-term partnership model where technology and business growth stay perfectly aligned. Equity-grade incentive structure."
            cta="Discuss Strategy"
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
  featured,
}: {
  phase: string;
  title: string;
  price: string;
  desc: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative p-10 flex flex-col bg-surface ${
        featured ? "border-2 border-accent shadow-glow" : "border border-border"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
          Recommended
        </div>
      )}
      <span className="text-[10px] font-mono text-accent uppercase tracking-widest mb-6">
        {phase}
      </span>
      <h3 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">{title}</h3>
      <div className="text-base text-accent font-mono mb-8">{price}</div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-10">{desc}</p>
      <div className="mt-auto pt-8 border-t border-border">
        <button
          className={`w-full py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${
            featured
              ? "bg-accent text-accent-foreground hover:opacity-90"
              : "border border-border-strong hover:bg-surface-elevated"
          }`}
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
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="text-[11px] font-mono font-bold text-accent uppercase tracking-[0.3em] mb-6">
          07 · Positioning Statement
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02] mb-8">
          Bitdecentro — Your Technology Partner{" "}
          <span className="text-accent">for Your Own Brand.</span>
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
          <div className="size-5 bg-accent rounded-sm rotate-45" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Bitdecentro</span>
        </div>
        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest text-center">
          © 2025 Bitdecentro Technology Infrastructure · Operator-Grade · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
