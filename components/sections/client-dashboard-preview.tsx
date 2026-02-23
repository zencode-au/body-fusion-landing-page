export function ClientDashboardPreview() {
  return (
    <div className="animate-fade-up delay-300 relative mx-auto mt-16 max-w-6xl">
      <div className="animate-pulse-glow absolute -left-12 top-1/2 h-28 w-28 rounded-full bg-[#FFA500]/40 blur-3xl" />
      <div className="animate-float-soft absolute -right-12 top-1/4 h-36 w-36 rounded-full bg-amber-300/45 blur-3xl" />
      <div
        className="animate-float-soft delay-100 pointer-events-none absolute -left-8 top-12 z-30 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 text-left shadow-xl lg:block"
        style={{ animationDuration: "7s" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Weekly Check-ins
        </p>
        <p className="mt-1 text-lg font-black text-emerald-600">+12%</p>
      </div>
      <div
        className="animate-float-soft delay-300 pointer-events-none absolute -right-6 top-24 z-30 hidden rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 text-left shadow-xl lg:block"
        style={{ animationDuration: "8s" }}
      >
        <p className="text-sm font-bold text-slate-900">3 New Feedbacks</p>
        <p className="text-xs font-medium text-amber-600">Pending answer</p>
      </div>
      <div
        className="animate-float-soft delay-500 pointer-events-none absolute -bottom-7 left-12 z-30 hidden w-52 rounded-2xl border border-slate-200/80 bg-white/95 p-3 text-left shadow-xl md:block"
        style={{ animationDuration: "9s" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Body Fat
        </p>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-2xl font-black text-slate-900">21%</p>
          <p className="text-xs font-semibold text-emerald-600">+3.46%</p>
        </div>
      </div>

      <div className="group relative z-10 overflow-hidden rounded-[2rem] border-8 border-slate-200/60 bg-[#f4f4f5]/90 p-3 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 md:p-4">
        <div className="grid min-h-[440px] gap-3 rounded-[1.6rem] bg-[#ececec] p-3 md:grid-cols-[220px_1fr] md:gap-4 md:p-4">
          <aside className="rounded-2xl bg-[#efe6d4] p-4 text-left transition-transform duration-300 group-hover:-translate-y-1">
            <div className="flex items-center gap-2 border-b border-black/10 pb-4">
              <div className="h-8 w-8 rounded-lg bg-[#FFA500]" />
              <p className="text-sm font-black uppercase tracking-wide text-slate-900">
                Body Fusion
              </p>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="rounded-xl px-3 py-2 transition-colors hover:bg-white/60">
                Dashboard
              </li>
              <li className="rounded-xl px-3 py-2 transition-colors hover:bg-white/60">
                Workouts
              </li>
              <li className="rounded-xl bg-[#e8be67] px-3 py-2 font-semibold text-slate-900 shadow-sm">
                My Clients
              </li>
              <li className="rounded-xl px-3 py-2 transition-colors hover:bg-white/60">
                Assessments
              </li>
              <li className="rounded-xl px-3 py-2 transition-colors hover:bg-white/60">
                Settings
              </li>
            </ul>
          </aside>

          <section className="rounded-2xl bg-[#f7f7f7] p-4 text-left transition-transform duration-300 group-hover:-translate-y-1 md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="h-10 w-full rounded-xl bg-white/95 px-4 md:w-72" />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Decline
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[#FFA500] px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Edit details
                </button>
              </div>
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
              View Client
            </h3>

            <div className="mt-4 grid gap-3 lg:grid-cols-[230px_1fr]">
              <article className="rounded-2xl border border-slate-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=120"
                    alt="Client profile"
                    className="h-14 w-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-2xl font-black text-[#cc8400]">
                      John Doe
                    </p>
                    <p className="text-xs text-slate-600">35 years old</p>
                    <p className="text-xs text-slate-500">
                      Scarborough - Perth
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                    johndoe@bodyfusion.app
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Phone:</span>{" "}
                    +61 0123 456 890
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">
                      Client since:
                    </span>{" "}
                    01/01/1990
                  </p>
                </div>
              </article>

              <div className="space-y-3">
                <article className="rounded-2xl border border-slate-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-slate-900">
                      Training
                    </h4>
                    <p className="text-xs font-semibold text-slate-500">
                      26 May - 01 Jun
                    </p>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <div
                        key={`${day}-${index}`}
                        className="rounded-xl bg-slate-50 px-2 py-2 text-center text-[10px] font-semibold text-slate-500"
                      >
                        <div
                          className={`mx-auto mb-1 h-2.5 w-2.5 rounded-full ${
                            index === 5
                              ? "bg-[#f3c14d]"
                              : index < 4
                                ? "bg-[#FFA500]"
                                : "bg-slate-300"
                          }`}
                        />
                        {day}
                      </div>
                    ))}
                  </div>
                </article>

                <div className="grid gap-3 sm:grid-cols-2">
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
                    <h5 className="text-lg font-bold text-slate-900">Tasks</h5>
                    <p className="mt-2 text-sm text-slate-700">
                      Update progress photos
                    </p>
                    <p className="text-xs font-medium text-amber-600">
                      Pending completion
                    </p>
                  </article>
                  <article className="rounded-2xl border border-slate-200 bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
                    <h5 className="text-lg font-bold text-slate-900">
                      Assessments
                    </h5>
                    <p className="mt-2 text-sm text-slate-700">Strength Test</p>
                    <p className="text-xs font-medium text-emerald-600">
                      Completed
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
