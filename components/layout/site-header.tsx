import { PageContainer } from "@/components/layout/page-container";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "App", href: "#app" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <PageContainer className="flex h-20 items-center justify-between">
        <Logo />
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}
