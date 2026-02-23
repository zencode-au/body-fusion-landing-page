import { PageContainer } from "@/components/layout/page-container";
import { SubscribeForm } from "@/components/sections/subscribe-form";
import { Logo } from "@/components/ui/logo";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Features", href: "/features" },
      { label: "Plans", href: "/plans" },
      { label: "Contact", href: "/contact" },
    ],
  },
  // {
  //   title: "Services",
  //   links: [
  //     { label: "Workout Builder", href: "/features#builder" },
  //     { label: "In-App Chat", href: "/features#chat" },
  //     { label: "Client Profiles", href: "/features#profiles" },
  //   ],
  // },
  // {
  //   title: "Resources",
  //   links: [
  //     { label: "Help Center", href: "/help" },
  //     { label: "Success Stories", href: "/stories" },
  //   ],
  // },
];

export function SiteFooter() {
  return (
    <footer id="about" className="bg-white pb-8 pt-16">
      <PageContainer>
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-lg font-medium text-slate-900">
            Get product updates and practical tips for growing your coaching
            business.
          </h3>
          <div className="mx-auto max-w-md">
            <SubscribeForm />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-y-8 border-t border-slate-200 pt-12 md:gap-x-12">
          <div className="col-span-2 md:col-span-1">
            <Logo full={false} />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Client management and workout programming software designed for
              modern personal trainers.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              © Body Fusion {new Date().getFullYear()}
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900">
                {column.title}
              </h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {column.links.map((link) => (
                  <li key={link.label}>
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

        <div className="h-2 w-full bg-gradient-to-r from-amber-200 via-[#FFA500] to-amber-200" />
      </PageContainer>
    </footer>
  );
}
