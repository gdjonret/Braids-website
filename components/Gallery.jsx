"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { bookingCategories } from "@/app/booking/data";

const FALLBACK_SUMMARY = "Refined craftsmanship and enduring elegance designed to elevate your everyday signature.";

const gatherEntriesWithPreview = (category) => {
    const entries = [];

    if (category.items?.length) {
        entries.push(
            ...category.items.map((item) => ({
                item,
                link: `/booking/${category.slug}`,
            })),
        );
    }

    if (category.subcategories?.length) {
        category.subcategories.forEach((subcategory) => {
            const subcategoryLink = `/booking/${category.slug}/${subcategory.slug}`;
            subcategory.items?.forEach((item) => {
                entries.push({
                    item,
                    link: subcategoryLink,
                });
            });
        });
    }

    return entries;
};

const featuredGalleryItems = bookingCategories
    .filter((category) => category.slug !== "crochet" && category.slug !== "french-curl")
    .map((category) => {
        const entries = gatherEntriesWithPreview(category);
        if (!entries.length) {
            return null;
        }

        const entryWithImage = entries.find((entry) => Boolean(entry.item.image));
        const fallbackEntry = entries[0];
        const slides = entries
            .flatMap((entry) => {
                const base = entry.item;
                const baseSlides = [];

                if (Array.isArray(base.images) && base.images.length) {
                    baseSlides.push(
                        ...base.images
                            .filter(Boolean)
                            .map((src) => ({
                                src,
                                label: base.name,
                                link: entry.link,
                                objectPosition: base.objectPosition,
                            })),
                    );
                }

                if (base.image) {
                    baseSlides.push({
                        src: base.image,
                        label: base.name,
                        link: entry.link,
                        objectPosition: base.objectPosition,
                    });
                }

                return baseSlides;
            })
            .filter((slide) => Boolean(slide?.src));

        const uniqueSlides = [];
        const seenSlideSources = new Set();
        for (const slide of slides) {
            if (!slide?.src || seenSlideSources.has(slide.src)) {
                continue;
            }

            seenSlideSources.add(slide.src);
            uniqueSlides.push(slide);
        }

        return {
            slug: category.slug,
            title: category.name,
            link: `/booking/${category.slug}`,
            image: entryWithImage?.item.image ?? fallbackEntry?.item.image,
            objectPosition: entryWithImage?.item.objectPosition ?? fallbackEntry?.item.objectPosition,
            summary: category.summary ?? FALLBACK_SUMMARY,
            featuredStyle: entryWithImage?.item.name ?? fallbackEntry?.item.name,
            featuredLink: entryWithImage?.link ?? fallbackEntry?.link ?? `/booking/${category.slug}`,
            slides: uniqueSlides,
        };
    })
    .filter(Boolean);

export default function Gallery() {
    const router = useRouter();
    const [activeImageIndexes, setActiveImageIndexes] = useState(() => featuredGalleryItems.map(() => 0));

    return (
        <section
            id="gallery"
            className="relative overflow-hidden bg-gradient-to-b from-[#fff6df] via-[#fffbea] to-[#fffef8] py-24 md:py-32 text-neutral-900"
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Portfolio</p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
                        Braids That Tell <span className="font-serif italic">Your Story</span>
                    </h2>

                </div>

                <div className="space-y-12 md:space-y-16">
                    {featuredGalleryItems.map((item, index) => {
                        const fallbackSlides = item.image
                            ? [
                                  {
                                      src: item.image,
                                      label: item.featuredStyle,
                                      link: item.featuredLink,
                                      objectPosition: item.objectPosition,
                                  },
                              ]
                            : [];
                        const slides = item.slides?.length ? item.slides : fallbackSlides;
                        const totalImages = slides.length;
                        const currentIndex = activeImageIndexes[index] ?? 0;
                        const normalizedIndex = totalImages
                            ? ((currentIndex % totalImages) + totalImages) % totalImages
                            : 0;
                        const activeSlide = totalImages ? slides[normalizedIndex] : slides[0] ?? null;
        
                        const currentImage = activeSlide?.src ?? item.image;
                        const showCarouselControls = totalImages > 1;
                        const activeStyleName = activeSlide?.label ?? item.featuredStyle;
                        const activeStyleLink = activeSlide?.link ?? item.featuredLink;
                        const activeObjectPosition = activeSlide?.objectPosition ?? item.objectPosition;

                        return (
                            <div
                                key={item.slug}
                                role="link"
                                tabIndex={0}
                                onClick={() => router.push(item.link)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        router.push(item.link);
                                    }
                                }}
                                className={`group overflow-hidden rounded-sm border border-[#f5e8c8] bg-[#fffdf6] shadow-[0_12px_38px_rgba(15,23,42,0.07)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] md:flex md:items-center md:gap-10 ${
                                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                <div className="md:w-1/2">
                                    <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                                        {currentImage ? (
                                            <img
                                                src={currentImage}
                                                alt={item.title}
                                                style={activeObjectPosition ? { objectPosition: activeObjectPosition } : undefined}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-white to-neutral-300" />
                                        )}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/10 to-neutral-900/35" />

                                        {showCarouselControls ? (
                                            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        setActiveImageIndexes((prev) => {
                                                            const next = [...prev];
                                                            const total = slides.length;
                                                            if (!total) {
                                                                return next;
                                                            }
                                                            const current = next[index] ?? 0;
                                                            next[index] = (current - 1 + total) % total;
                                                            return next;
                                                        });
                                                    }}
                                                    className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/30 bg-neutral-900/35 text-base text-white/90 shadow-sm backdrop-blur transition hover:bg-neutral-900/45"
                                                    aria-label={`View previous ${item.title} style`}
                                                >
                                                    ‹
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        setActiveImageIndexes((prev) => {
                                                            const next = [...prev];
                                                            const total = slides.length;
                                                            if (!total) {
                                                                return next;
                                                            }
                                                            const current = next[index] ?? 0;
                                                            next[index] = (current + 1) % total;
                                                            return next;
                                                        });
                                                    }}
                                                    className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/30 bg-neutral-900/35 text-base text-white/90 shadow-sm backdrop-blur transition hover:bg-neutral-900/45"
                                                    aria-label={`View next ${item.title} style`}
                                                >
                                                    ›
                                                </button>
                                            </div>
                                        ) : null}

                                        {showCarouselControls ? (
                                            <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                                                {slides.map((_, dotIndex) => (
                                                    <span
                                                        key={`${item.slug}-dot-${dotIndex}`}
                                                        className={`h-1.5 w-1.5 rounded-full transition ${
                                                            dotIndex === normalizedIndex ? "bg-white" : "bg-white/40"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-6 py-8 md:px-10 md:py-10 flex flex-col gap-6">
                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                                        <span className="h-px w-10 bg-neutral-300" aria-hidden="true" />
                                        Collection No. {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div className="space-y-5">
                                        <h3 className="text-[26px] font-light tracking-tight text-neutral-900 md:text-3xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed md:text-base">
                                            {item.summary}
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            {activeStyleName ? (
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        router.push(activeStyleLink);
                                                    }}
                                                    className="group inline-flex flex-col items-start gap-1 text-[10px] uppercase tracking-[0.32em] text-neutral-700 transition hover:text-neutral-900"
                                                >
                                                    <span className="inline-flex items-center gap-3">
                                                        <span>Featured · {activeStyleName}</span>
                                                        <span aria-hidden="true" className="text-sm">→</span>
                                                    </span>
                                                    <span className="block h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-12 group-hover:bg-neutral-900" />
                                                </button>
                                            ) : null}
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                    router.push(item.link);
                                                }}
                                                className="group inline-flex flex-col items-start gap-1 text-[10px] font-medium uppercase tracking-[0.32em] text-neutral-700 transition hover:text-neutral-900"
                                            >
                                                <span className="inline-flex items-center gap-3">
                                                    <span>View Collection</span>
                                                    <span aria-hidden="true" className="text-sm">→</span>
                                                </span>
                                                <span className="block h-px w-8 bg-neutral-300 transition-all duration-300 group-hover:w-12 group-hover:bg-neutral-900" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="pointer-events-none absolute -top-20 right-10 h-48 w-48 rounded-full bg-amber-100/30 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-amber-100/40 blur-3xl" aria-hidden="true" />
        </section>
    );
}
