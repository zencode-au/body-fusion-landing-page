import { PageContainer } from "@/components/layout/page-container";
import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/plans" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function FeaturesFooter() {
  return (
    <footer className="bg-slate-900 pb-8 pt-16 text-slate-100">
      <PageContainer>
        <div className="mb-16 flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm text-slate-300/70">
              The ultimate platform for modern personal trainers who value time
              and excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                  {column.title}
                </h4>
                <ul className="space-y-4 text-sm text-slate-300/70">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-[#FFA500]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © Body Fusion 2026. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400">
            <span className="h-4 w-4 rounded-full bg-slate-400/70" />
            <span className="h-4 w-4 rounded-full bg-slate-400/70" />
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
