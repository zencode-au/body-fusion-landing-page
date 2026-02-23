export type BillingCycle = "monthly" | "yearly";

type PricingHeroProps = {
  billingCycle: BillingCycle;
  onToggle: () => void;
};

export function PricingHero({ billingCycle, onToggle }: PricingHeroProps) {
  return (
    <section className="mb-6 text-center">
      <div className="mx-auto max-w-3xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
          Simple, transparent pricing.
        </h1>
        <p className="text-xl leading-relaxed text-slate-500">
          Choose the plan that fits your coaching style. No hidden fees, cancel
          anytime.
        </p>
        <div className="flex items-center justify-center gap-4 pt-8">
          <span className="text-sm font-medium text-slate-500">Monthly</span>
          <button
            type="button"
            aria-label="Billing cycle"
            aria-pressed={billingCycle === "yearly"}
            onClick={onToggle}
            className="relative h-7 w-14 rounded-full bg-slate-200 p-1"
          >
            <span
              className={`block h-5 w-5 rounded-full bg-[#FFA500] shadow-sm transition-transform ${billingCycle === "yearly" ? "translate-x-7" : "translate-x-0"
                }`}
            />
          </button>
          <span className="text-sm font-medium text-slate-900">Yearly</span>
        </div>
      </div>
    </section>
  );
}
