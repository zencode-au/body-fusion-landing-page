import { submitContactMessage } from "@/app/contact/actions";
import { PageContainer } from "@/components/layout/page-container";

const channels = [
  {
    title: "Support",
    description: "Need help with your account or feature troubleshooting.",
    email: "support@bodyfusion.app",
  },
  {
    title: "Partnerships",
    description:
      "Explore integrations, affiliates, and strategic partnerships.",
    email: "partners@bodyfusion.app",
  },
];

const faqs = [
  {
    question: "How quickly does your team reply?",
    answer: "Most inquiries receive a first response within one business day.",
  },
  {
    question: "Do you support migration from other platforms?",
    answer:
      "Yes. Our onboarding team can help import clients, plans, and workout history.",
  },
];

type ContactContentProps = {
  status?: "success" | "error";
};

export function ContactContent({ status }: ContactContentProps) {
  const cardClass = "rounded-2xl border border-slate-200 bg-white p-6";

  return (
    <section className="py-24">
      <PageContainer>
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {channels.map((channel) => (
            <article key={channel.title} className={cardClass}>
              <h2 className="text-lg font-bold text-slate-900">
                {channel.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {channel.description}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-4 inline-block text-sm font-semibold text-[#cc8400] hover:text-[#FFA500]"
              >
                {channel.email}
              </a>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className={`${cardClass} shadow-sm`}>
            <h3 className="text-2xl font-bold text-slate-950">
              Send us a message
            </h3>
            <p className="mt-2 text-slate-500">
              Share your goals and context, and we&apos;ll route your request to
              the right team.
            </p>

            {status === "success" ? (
              <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Message sent successfully. Our team will get back to you soon.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                We couldn&apos;t send your message right now. Please try again
                in a moment.
              </p>
            ) : null}

            <form action={submitContactMessage} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    First name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#FFA500]/40 transition focus:border-[#FFA500] focus:ring-4"
                    placeholder="Jane"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Last name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#FFA500]/40 transition focus:border-[#FFA500] focus:ring-4"
                    placeholder="Cooper"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#FFA500]/40 transition focus:border-[#FFA500] focus:ring-4"
                  placeholder="you@company.com"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Team
                </span>
                <select
                  name="team"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#FFA500]/40 transition focus:border-[#FFA500] focus:ring-4"
                  defaultValue="sales"
                >
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="partnerships">Partnerships</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none ring-[#FFA500]/40 transition focus:border-[#FFA500] focus:ring-4"
                  placeholder="Tell us about your coaching business and what you need."
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-12 items-center rounded-full bg-[#FFA500] px-7 text-sm font-bold text-slate-950 transition-colors hover:bg-[#e69500]"
              >
                Send Message
              </button>
            </form>
          </div>

          <aside className="space-y-6">
            {/* <div className={cardClass}>
              <h3 className="text-xl font-bold text-slate-900">Office</h3>
              <p className="mt-2 text-slate-500">
                Body Fusion HQ
                <br />
                441 Market Street
                <br />
                San Francisco, CA 94105
              </p>
            </div> */}

            <div className={cardClass}>
              <h3 className="text-xl font-bold text-slate-900">FAQ</h3>
              <div className="mt-4 space-y-4">
                {faqs.map((faq) => (
                  <article key={faq.question}>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {faq.question}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </PageContainer>
    </section>
  );
}
