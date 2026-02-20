import { PageContainer } from "@/components/layout/page-container";
import { Logo } from "@/components/ui/logo";

const links = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Plans", href: "/plans" },
  { label: "Contact", href: "/contact" },
];

export function PlansFooter() {
  return (
    <footer className="border-t border-slate-200 pt-16 pb-8">
      <PageContainer>
        <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <Logo />
          <nav aria-label="Footer links">
            <ul className="flex gap-8 text-sm font-medium text-slate-500">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={
                      link.href === "/plans"
                        ? "text-slate-900"
                        : "transition-colors hover:text-slate-900"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-slate-200 pt-8 text-center">
          <p className="text-xs text-slate-500">
            © Body Fusion 2026. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
