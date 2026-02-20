import { PageContainer } from "@/components/layout/page-container";

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-32 w-32 text-white/20"
      aria-hidden="true"
    >
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.128a4 4 0 0 1 0 7.744"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 21v-2a4 4 0 0 0-3-3.87"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9"
        cy="7"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AboutStory() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              The Story Behind Body Fusion
            </h2>
            <p className="text-lg leading-relaxed text-slate-500">
              In 2021, our founders were juggling three different apps, two
              spreadsheets, and endless WhatsApp messages just to manage 15
              clients. They realized that the coaching industry was being
              underserved by generic fitness apps.
            </p>
            <p className="text-lg leading-relaxed text-slate-500">
              Body Fusion was born out of a desire to create a unified ecosystem
              that respects the coach&apos;s workflow. We&apos;re now a team of
              40 passionate engineers, designers, and strength coaches working
              to define the future of athletic management.
            </p>
            <div className="pt-4">
              <a
                href="/careers"
                className="inline-flex rounded-full border border-slate-300 px-8 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-[#FFA500] hover:text-[#FFA500]"
              >
                Join the Team
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-200">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FFA500]/35 to-black/80">
                <UsersIcon />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
                <p className="font-bold italic text-white">
                  &quot;We&apos;re building the tool we wish we had when we
                  started our coaching careers.&quot;
                </p>
                <p className="mt-2 text-sm text-white/60">
                  - Marcus Thorne, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
