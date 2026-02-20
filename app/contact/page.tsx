import { ContactContent } from "@/components/contact/contact-content";
import { ContactHero } from "@/components/contact/contact-hero";
import { SiteFooter } from "@/components/layout/site-footer";
import { TopNav } from "@/components/marketing/top-nav";

type ContactPageProps = {
  searchParams: Promise<{ status?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const status =
    params.status === "success" || params.status === "error"
      ? params.status
      : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav active="contact" />
      <ContactHero />
      <main>
        <ContactContent status={status} />
      </main>
      <SiteFooter />
    </div>
  );
}
