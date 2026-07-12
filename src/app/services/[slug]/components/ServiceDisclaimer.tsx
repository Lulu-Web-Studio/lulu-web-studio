import {Info} from "lucide-react";
import Link from "next/link";

interface ServiceDisclaimerProps {
  points: string[];
}

export default function ServiceDisclaimer({points}: ServiceDisclaimerProps) {
  return (
    <div className="mb-16 md:mb-24 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
      <div className="flex items-start gap-3 mb-5">
        <Info className="h-5 w-5 flex-shrink-0 text-neutral-500 mt-0.5" />
        <h2 className="text-base font-semibold text-neutral-900">
          Before You Reach Out
        </h2>
      </div>
      <ul className="space-y-2.5 mb-5">
        {points.map((point, index) => (
          <li key={index} className="text-base leading-relaxed text-neutral-600 pl-1">
            {point}
          </li>
        ))}
      </ul>
      <Link
        href="/terms-of-service"
        className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600 transition-colors"
      >
        See full Terms of Service
      </Link>
    </div>
  );
}
