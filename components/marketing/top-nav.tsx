import { PageContainer } from "@/components/layout/page-container";
import { Logo } from "@/components/ui/logo";

type TopNavProps = {
  active: "plans" | "features" | "contact" | null;
};

const navItems: Array<{
  key: TopNavProps["active"];
  label: string;
  href: string;
}> = [
    { key: "features", label: "Features", href: "/features" },
    { key: "plans", label: "Plans", href: "/plans" },
    { key: "contact", label: "Contact", href: "/contact" },
  ];

export function TopNav({ active }: TopNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <PageContainer className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden md:block" aria-label="Top navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={
                    item.key === active
                      ? "text-sm font-bold text-[#FFA500]"
                      : "text-sm font-medium text-slate-500 transition-colors hover:text-slate-950"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/login"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-[#FFA500]"
          >
            Log In
          </a>
          <a
            href="https://coach.bodyfusion.app/#/coach/coachSignUpWebRoute"
            className="rounded-full bg-[#FFA500] px-6 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#e69500]"
          >
            Get Started
          </a>
        </div>
      </PageContainer>
    </header>
  );
}
