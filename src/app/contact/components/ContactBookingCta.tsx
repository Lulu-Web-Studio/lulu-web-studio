import Link from "next/link";
import {ArrowUpRight, CalendarDays} from "lucide-react";

export default function ContactBookingCta() {
  return (
    <section
      id="book"
      className="relative z-10 -mt-12 rounded-t-[50px] bg-white pt-20 pb-10 text-black sm:-mt-16 md:-mt-24 md:pt-28 md:pb-14 lg:-mt-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col items-start gap-8 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
              Book a Call
            </p>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Pick the kind of help you actually need
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600">
              Free general calls for planning new projects, or paid debugging sessions
              for broken apps and stuck features.
            </p>
          </div>
          <Link
            href="/schedule-a-call"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            <CalendarDays className="h-5 w-5" />
            Schedule a Call
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
