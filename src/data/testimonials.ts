export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  /** Slug of related case study at /projects/[slug], if any. */
  caseStudySlug?: string;
  /** ISO date of publication (used in Review schema). */
  datePublished: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "facial-surgery-center",
    quote:
      "Our new site loads instantly and our consultation requests have nearly doubled. Patients tell us they finally understand what we do before they even pick up the phone.",
    author: "Dr. Joey Gulko",
    role: "Lead Surgeon, The Facial Surgery Center",
    caseStudySlug: "facial-surgery-center",
    datePublished: "2025-06-15",
  },
  {
    id: "isaacc18",
    quote:
      "For the first time we have a real home online. Donations are flowing in, volunteers can sign themselves up, and we can actually measure our impact. It changed how we operate.",
    author: "Professor Ron E. Samet, MD",
    role: "Executive Director, ISAACC18",
    caseStudySlug: "isaacc18",
    datePublished: "2025-07-20",
  },
  {
    id: "sonino-painting",
    quote:
      "We went from zero web leads to the phone ringing every week. Gabriel built us a site that actually brings in jobs — not just a brochure.",
    author: "Aviad Sonino",
    role: "Owner, Sonino Painting & Contracting",
    caseStudySlug: "sonino-painting",
    datePublished: "2025-05-02",
  },
];

export const getAllTestimonials = () => testimonials;
