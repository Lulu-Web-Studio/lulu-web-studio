"use client";

import {useEffect, useState} from "react";
import {ReactGoogleReviews} from "react-google-reviews";

const FEATURABLE_WIDGET_ID = "6cb0b647-b677-406c-bb78-02af8c3beab1";

// react-slick (used internally by react-google-reviews) only applies its
// responsive breakpoints on a viewport *change* after mount, so a page
// loaded directly on mobile gets stuck showing the desktop slide count.
// We work around this by driving `maxItems` (which doubles as slidesToShow)
// from our own matchMedia listeners instead.
function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState<number | null>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 640px)");
    const tablet = window.matchMedia("(max-width: 1024px)");

    const update = () => {
      setSlidesPerView(mobile.matches ? 1 : tablet.matches ? 2 : 3);
    };

    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return slidesPerView;
}

export default function GoogleReviews() {
  const slidesPerView = useSlidesPerView();

  return (
    <section className="bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="uppercase text-xs sm:text-sm tracking-widest text-white/60 mb-4">
            Google reviews
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What clients say after launch
          </h2>
        </div>

        {slidesPerView && (
          <ReactGoogleReviews
            key={slidesPerView}
            layout="carousel"
            featurableId={FEATURABLE_WIDGET_ID}
            theme="dark"
            reviewVariant="card"
            nameDisplay="firstAndLastInitials"
            dateDisplay="relative"
            logoVariant="icon"
            maxItems={slidesPerView}
            maxCharacters={260}
            carouselAutoplay={false}
            showDots
            hideEmptyReviews
            loadingMessage="Loading Google reviews..."
            errorMessage={
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white/70">
                Google reviews are temporarily unavailable.
              </div>
            }
            carouselClassName="google-reviews-carousel"
            carouselCardClassName="px-2"
            reviewCardDarkClassName="!bg-white/5 !border !border-white/10 !rounded-3xl !shadow-none"
            reviewTextDarkClassName="!text-white/90"
            reviewerNameDarkClassName="!text-white"
            reviewerDateDarkClassName="!text-white/60"
            reviewReadMoreDarkClassName="!text-white"
            carouselBtnDarkClassName="!bg-white/10 !text-white hover:!bg-white/20"
          />
        )}
      </div>
    </section>
  );
}
