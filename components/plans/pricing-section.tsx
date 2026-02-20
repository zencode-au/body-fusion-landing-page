"use client";

import { useState } from "react";
import { PricingGrid } from "@/components/plans/pricing-grid";
import {
  type BillingCycle,
  PricingHero,
} from "@/components/plans/pricing-hero";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");

  function toggleBillingCycle() {
    setBillingCycle((prev) => (prev === "yearly" ? "monthly" : "yearly"));
  }

  return (
    <>
      <PricingHero billingCycle={billingCycle} onToggle={toggleBillingCycle} />
      <PricingGrid billingCycle={billingCycle} />
    </>
  );
}
