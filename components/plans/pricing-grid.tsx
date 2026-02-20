"use client";

import { useRef } from "react";
import type { BillingCycle } from "@/components/plans/pricing-hero";

type Plan = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for new coaches launching their first clients.",
    cta: "Start Free",
    features: [
      "Up to 3 Active Clients",
      "Unlimited Workout Templates",
      "HD Exercise Library (2,000+)",
      "In-app Messaging",
      "Mobile App Access",
    ],
  },
  {
    name: "Standard",
    monthlyPrice: 29,
    yearlyPrice: 25,
    description: "Built for coaches ready to grow and serve more clients.",
    cta: "Get Started",
    features: [
      "Everything in Starter",
      "Up to 10 Active Clients",
      "Custom Exercise Video Uploads",
    ],
  },
  {
    name: "Elite",
    monthlyPrice: 59,
    yearlyPrice: 49,
    description: "Advanced tools for high-performing coaches and teams.",
    cta: "Get Started",
    featured: true,
    features: [
      "Everything in Standard",
      "100 Active Clients",
      "Client Feedback Tools",
      "Broadcast Messages to All Clients",
      "Assessments",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 89,
    description:
      "For fitness businesses and coaching teams that need full-scale operations.",
    cta: "Contact Sales",
    features: [
      "Everything in Elite",
      "Unlimited Active Clients",
      "Advanced Permissions & Team Roles",
      "Priority Onboarding and Migration Support",
      "Dedicated Success Manager",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3 text-[#FFA500]"
      aria-hidden="true"
    >
      <path
        d="M20 6 9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatPrice(value: number) {
  const isInteger = Number.isInteger(value);
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: isInteger ? 0 : 2,
    maximumFractionDigits: isInteger ? 0 : 2,
  }).format(value);
}

type PricingGridProps = {
  billingCycle: BillingCycle;
};

export function PricingGrid({ billingCycle }: PricingGridProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  function scrollPlans(direction: "left" | "right") {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>("[data-plan-card]");
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const gap = 24;
    const offset = direction === "right" ? cardWidth + gap : -(cardWidth + gap);

    slider.scrollBy({ left: offset, behavior: "smooth" });
  }

  return (
    <section>
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Previous plan"
          onClick={() => scrollPlans("left")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-[#FFA500] hover:text-[#FFA500]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M15 6 9 12l6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next plan"
          onClick={() => scrollPlans("right")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-[#FFA500] hover:text-[#FFA500]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="m9 6 6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={sliderRef}
        className="mx-auto flex w-full snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible pb-2 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {plans.map((plan) => {
          const activePrice =
            billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
          const savingsPercentage =
            plan.monthlyPrice > 0
              ? Math.round(
                  ((plan.monthlyPrice - plan.yearlyPrice) / plan.monthlyPrice) *
                    100,
                )
              : 0;

          return (
            <article
              key={plan.name}
              data-plan-card
              className={`relative flex flex-col rounded-3xl border bg-white p-8 ${
                plan.featured
                  ? "z-10 min-w-[18.5rem] snap-start border-[#FFA500] bg-[#FFA500]/5 shadow-xl ring-2 ring-[#FFA500]/40 md:min-w-[20rem] lg:min-w-[22rem] xl:min-w-[23rem]"
                  : "min-w-[18.5rem] snap-start md:min-w-[20rem] lg:min-w-[22rem] xl:min-w-[23rem]"
              } ${plan.featured ? "" : "border-slate-200 shadow-sm"}`}
            >
              {plan.featured ? (
                <p className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFA500] px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">
                  Most Popular
                </p>
              ) : null}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-950">
                  {plan.name}
                </h3>
                <p className="flex items-baseline gap-1">
                  {activePrice === 0 ? (
                    <span className="text-4xl font-extrabold text-slate-950">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-slate-950">
                        {formatPrice(activePrice)}
                      </span>
                      <span className="text-slate-500">/mo</span>
                    </>
                  )}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  All prices in <span className="font-bold">AUD</span>
                </p>
                {billingCycle === "yearly" ? (
                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-xs font-medium text-[#cc8400]">
                      Billed annually
                    </p>
                    {activePrice > 0 ? (
                      <span className="rounded-full bg-[#FFA500]/20 px-2 py-0.5 text-[10px] font-bold uppercase text-[#cc8400]">
                        {savingsPercentage > 0
                          ? `Save ${savingsPercentage}%`
                          : "Save 0%"}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFA500]/10">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={
                  plan.name === "Enterprise"
                    ? "/contact"
                    : "https://bodyfusion.app/#/coach/coachSignUpWebRoute"
                }
                className={`inline-flex h-14 w-full items-center justify-center rounded-2xl border-2 px-4 text-base font-bold transition-all ${
                  plan.featured
                    ? "border-[#FFA500] bg-[#FFA500] text-slate-950 hover:bg-[#e69500]"
                    : "border-[#FFA500] text-slate-950 hover:bg-[#FFA500]/10"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
