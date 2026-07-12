"use client";

import {useMemo, useState} from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {ArrowUpRight, Bug, CalendarDays, CheckCircle2} from "lucide-react";
import type {CalEventKey, CalEventOption} from "@/lib/cal";

interface BookingPickerProps {
  events: (CalEventOption & {embedUrl: string | null})[];
}

function isCalEventKey(value: string | null): value is CalEventKey {
  return value === "booking" || value === "debugging";
}

export default function BookingPicker({events}: BookingPickerProps) {
  const searchParams = useSearchParams();
  const requestedEvent = searchParams.get("event");
  const initialKey = isCalEventKey(requestedEvent) ? requestedEvent : "booking";
  const initialEvent =
    events.find((event) => event.key === initialKey && event.embedUrl) ??
    events.find((event) => event.embedUrl);
  const [selectedKey, setSelectedKey] = useState<CalEventKey | undefined>(initialEvent?.key);

  const selectedEvent = useMemo(
    () => events.find((event) => event.key === selectedKey) ?? initialEvent,
    [events, initialEvent, selectedKey],
  );

  if (!selectedEvent?.embedUrl) {
    return (
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 text-center sm:p-10 md:p-14">
        <h2 className="mb-4 text-3xl font-bold text-neutral-950 md:text-4xl">
          Add your Cal.com event settings
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Set `NEXT_PUBLIC_CAL_USERNAME`, `NEXT_PUBLIC_CAL_BOOKING_EVENT`, and
          `NEXT_PUBLIC_CAL_DEBUGGING_EVENT` so visitors can choose the right call.
        </p>
        <Link
          href="#message"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-white transition-colors hover:bg-neutral-800"
        >
          Send a Message Instead
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:items-start lg:gap-8">
      <aside className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
        {events.map((event) => {
          const isSelected = selectedEvent.key === event.key;
          const Icon = event.key === "debugging" ? Bug : CalendarDays;

          return (
            <button
              key={event.key}
              type="button"
              disabled={!event.embedUrl}
              onClick={() => setSelectedKey(event.key)}
              className={`group flex w-full flex-col rounded-2xl border p-4 text-left transition-all lg:rounded-[1.75rem] lg:p-6 ${
                isSelected
                  ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl shadow-neutral-950/15"
                  : "border-neutral-200 bg-white text-neutral-950 hover:border-neutral-400 hover:-translate-y-0.5"
              } ${!event.embedUrl ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <div className="mb-3 flex items-start justify-between gap-3 lg:mb-8 lg:gap-4">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full lg:h-11 lg:w-11 ${
                    isSelected ? "bg-white text-neutral-950" : "bg-lime-200 text-neutral-950"
                  }`}
                >
                  <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                </span>
                {isSelected && <CheckCircle2 className="h-4 w-4 text-lime-200 lg:h-5 lg:w-5" />}
              </div>
              <p className={`mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] lg:mb-3 lg:text-xs ${isSelected ? "text-white/55" : "text-neutral-500"}`}>
                {event.eyebrow}
              </p>
              <h2 className="mb-2 text-base font-bold tracking-tight lg:mb-3 lg:text-2xl xl:text-3xl">
                {event.title}
              </h2>
              <p className={`mb-6 hidden leading-relaxed lg:block ${isSelected ? "text-white/70" : "text-neutral-600"}`}>
                {event.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium lg:px-3 lg:text-sm ${isSelected ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-700"}`}>
                  {event.priceLabel}
                </span>
                <span className={`hidden rounded-full px-3 py-1 text-sm font-medium lg:inline-block ${isSelected ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-700"}`}>
                  {event.durationLabel}
                </span>
              </div>
            </button>
          );
        })}
      </aside>

      <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-2xl shadow-neutral-950/10">
        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Now booking
            </p>
            <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
              {selectedEvent.title}
            </h2>
          </div>
          <a
            href={selectedEvent.embedUrl.replace("?embed=true", "").replace("&embed=true", "")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 sm:inline-flex"
          >
            Open Cal
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <iframe
          src={selectedEvent.embedUrl}
          title={`Book ${selectedEvent.title} with Lulu Web Studio`}
          className="h-[760px] w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
