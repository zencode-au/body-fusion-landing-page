function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 text-[#FFA500]"
      aria-hidden="true"
    >
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SecuritySection() {
  return (
    <section className="mt-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-slate-900 p-8 text-slate-100 md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#FFA500]/20 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
          <div className="shrink-0 rounded-2xl bg-[#FFA500]/20 p-5">
            <ShieldIcon />
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold">100% Secure & Private</h3>
            <p className="leading-relaxed text-slate-300">
              Your data and your clients&apos; progress are encrypted with
              industry-standard security. We never sell your data, and we
              provide daily backups for all accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
