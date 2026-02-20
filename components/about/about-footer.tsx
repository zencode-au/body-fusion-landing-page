import { PageContainer } from "@/components/layout/page-container";
import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/plans" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
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

export function AboutFooter() {
  return (
    <footer className="bg-slate-900 pb-8 pt-16 text-slate-100">
      <PageContainer>
        <div className="mb-16 flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-slate-300/70">
              Elevating the standard of coaching through precision engineering
              and design.
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
        <div className="border-t border-white/10 pt-8 text-center sm:text-left">
          <p className="text-xs text-slate-400">
            © Body Fusion 2026. Handcrafted for coaches.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
