import type {Metadata} from "next";
import ContactBooking from "../contact/components/ContactBooking";

const title = "Schedule a Call | Lulu Web Studio";
const description =
  "Book a free general project call or a paid debugging session with Lulu Web Studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: "/schedule-a-call"},
  openGraph: {
    type: "website",
    url: "/schedule-a-call",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ScheduleACallPage() {
  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40">
      <ContactBooking />
    </div>
  );
}
