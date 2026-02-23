"use client";

import { submitSubscriber, type SubscribeState } from "@/app/actions";
import {
  type FormEvent,
  useActionState,
  useEffect,
  useRef,
  useTransition,
} from "react";

const initialState: SubscribeState = {
  status: "idle",
};

type SubscribeFormProps = {
  variant?: "dark" | "light";
};

export function SubscribeForm({ variant = "light" }: SubscribeFormProps) {
  const [state, formAction] = useActionState(submitSubscriber, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const isDark = variant === "dark";

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  }

  if (state.status === "success") {
    return (
      <p
        className={`mb-4 rounded-xl border px-4 py-3 text-sm font-medium ${
          isDark
            ? "border-emerald-300/35 bg-emerald-500/15 text-emerald-200"
            : "border-emerald-200 bg-emerald-50 text-emerald-700"
        }`}
      >
        You&apos;re subscribed. We&apos;ll keep you updated.
      </p>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="animate-fade-up delay-300 mb-4 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
      >
        <label className="sr-only" htmlFor="home-subscribe-email">
          Email
        </label>
        <input
          id="home-subscribe-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className={`h-11 flex-1 rounded-full px-4 text-sm outline-none ring-[#FFA500]/40 transition focus:border-[#FFA500] focus:ring-4 ${
            isDark
              ? "border border-white/25 bg-white/10 text-white placeholder:text-slate-300"
              : "border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-500"
          }`}
        />
        <button
          type="submit"
          disabled={isPending}
          className={`h-11 rounded-full px-5 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
            isDark
              ? "bg-white text-slate-900 hover:bg-slate-200"
              : "bg-[#FFA500] text-slate-950 hover:bg-[#e69500]"
          }`}
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {state.status === "error" ? (
        <p
          className={`-mt-1 mb-4 max-w-lg rounded-xl border px-4 py-3 text-sm font-medium ${
            isDark
              ? "border-rose-300/35 bg-rose-500/15 text-rose-200"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {state.message ??
            "We couldn&apos;t process your subscription right now. Please try again."}
        </p>
      ) : null}
    </>
  );
}
