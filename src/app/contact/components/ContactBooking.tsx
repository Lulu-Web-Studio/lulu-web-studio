import {Suspense} from "react";
import BookingPicker from "./BookingPicker";
import {calEventOptions, getCalEventUrl} from "@/lib/cal";

export default function ContactBooking() {
  const events = calEventOptions.map((event) => ({
    ...event,
    embedUrl: getCalEventUrl(event.eventSlug),
  }));

  return (
    <section
      id="book"
      className="relative z-10 -mt-12 rounded-t-[50px] bg-white pt-20 pb-10 text-black sm:-mt-16 md:-mt-24 md:pt-28 md:pb-14 lg:-mt-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-10 md:mb-14">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500 sm:text-sm">
            Book a Call
          </p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Pick the kind of help you actually need
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Free general calls are for planning websites, apps, AI integrations, SEO,
            automations, and new digital projects. Paid debugging calls are working
            sessions for broken apps, vibe-coded projects, and technical problems that
            need hands on attention.
          </p>
        </div>
        <Suspense fallback={<div className="h-[760px] rounded-[2rem] bg-neutral-100" />}>
          <BookingPicker events={events} />
        </Suspense>
      </div>
    </section>
  );
}
