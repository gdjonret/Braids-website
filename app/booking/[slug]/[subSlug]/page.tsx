"use client";

import { use, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import { getBookingCategory, getBookingSubcategory } from "../../data";

type BookingSubcategoryPageProps = {
    params: Promise<{
        slug: string;
        subSlug: string;
    }>;
};

export default function BookingSubcategoryPage({ params }: BookingSubcategoryPageProps) {
    const { slug, subSlug } = use(params);
    const category = getBookingCategory(slug);
    const router = useRouter();

    if (!category) {
        notFound();
    }

    const subcategory = getBookingSubcategory(slug, subSlug);

    if (!subcategory) {
        notFound();
    }

    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [selectedLength, setSelectedLength] = useState<string | null>(null);
    const [photoItemIndex, setPhotoItemIndex] = useState<number | null>(null);
    const [photoImageIndex, setPhotoImageIndex] = useState(0);
    const [selectedTexture, setSelectedTexture] = useState<string | null>(null);

    const items = subcategory.items ?? [];
    const selectedItem = selectedItemIndex !== null ? items[selectedItemIndex] : null;
    const lengthOptions = selectedItem?.lengthOptions ?? [];
    const photoItem = photoItemIndex !== null ? items[photoItemIndex] : null;
    const photoGallery = photoItem?.images?.length ? photoItem.images : photoItem?.image ? [photoItem.image] : [];
    const hasMultiplePhotos = photoGallery.length > 1;

    const openModalForItem = (index: number) => {
        const item = items[index];
        if (item?.lengthOptions?.length) {
            setSelectedItemIndex(index);
            setSelectedLength(null);
            setSelectedTexture(item?.hairTextures?.[0] ?? null);
            return;
        }

        const params = new URLSearchParams({
            service: item?.name ?? "Selected Service",
            price: item?.price ?? "",
            duration: "2-4 hours",
            description: item?.description ?? "Professional braiding service",
        });

        router.push(`/checkout?${params.toString()}`);
    };

    const closeModal = () => {
        setSelectedItemIndex(null);
        setSelectedLength(null);
        setSelectedTexture(null);
    };

    const handleModalSelect = () => {
        if (!selectedItem || !selectedLength) return;
        if (selectedItem.hairTextures?.length && !selectedTexture) return;

        const option = lengthOptions.find((opt, idx) => (opt.name ?? `option-${idx}`) === selectedLength);

        const params = new URLSearchParams({
            service: selectedItem.name,
            length: option?.name ?? "",
            price: option?.price ?? selectedItem.price ?? "",
            duration: option?.duration ?? "2-4 hours",
            description: selectedItem.description ?? "Professional braiding service",
            texture: selectedTexture ?? "",
        });

        router.push(`/checkout?${params.toString()}`);
        closeModal();
    };

    const openPhotoModal = (index: number) => {
        if (items[index]?.image || items[index]?.images?.length) {
            setPhotoItemIndex(index);
            setPhotoImageIndex(0);
        }
    };

    const closePhotoModal = () => {
        setPhotoItemIndex(null);
        setPhotoImageIndex(0);
    };

    const showNextPhoto = () => {
        if (!hasMultiplePhotos) return;
        setPhotoImageIndex((prev) => (prev + 1) % photoGallery.length);
    };

    const showPrevPhoto = () => {
        if (!hasMultiplePhotos) return;
        setPhotoImageIndex((prev) => (prev - 1 + photoGallery.length) % photoGallery.length);
    };

    return (
        <>
            <Navbar />

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-24 md:py-32 text-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">{category.name}</p>
                        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
                            {subcategory.name}
                        </h1>
                    </div>
                    {subcategory.summary && (
                        <p className="mt-6 text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            {subcategory.summary}
                        </p>
                    )}
                    <div className="flex items-center justify-center gap-3 pt-6">
                        <Button
                            asChild
                            variant="outline"
                            className="rounded-none border border-neutral-300 bg-transparent px-6 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                        >
                            <Link href={`/booking/${category.slug}`}>Back to {category.name}</Link>
                        </Button>
                    </div>
                </div>
                <div className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-amber-100/30 blur-3xl" aria-hidden="true" />
            </section>

            <section className="bg-white pb-24 md:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-6">
                    {items.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-sm border border-neutral-200/60 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] py-6 px-6 md:px-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
                        >
                            <div className="w-full text-neutral-900">
                                <span className="block text-base md:text-lg font-light tracking-wide">
                                    {item.name}
                                </span>
                                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-neutral-600 font-light">
                                    {item.description && (
                                        <span className="tracking-wide">{item.description}</span>
                                    )}
                                    {item.price && (
                                        <span className="font-medium">{item.price}</span>
                                    )}
                                    {item.notes && <span>{item.notes}</span>}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                {item.image && (
                                    <button
                                        type="button"
                                        onClick={() => openPhotoModal(index)}
                                        className="rounded-none border border-neutral-300 bg-transparent px-4 md:px-5 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 whitespace-nowrap"
                                    >
                                        View Photo
                                    </button>
                                )}
                                <Button
                                    className="rounded-none border border-neutral-900 bg-neutral-900 px-5 md:px-7 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-transparent hover:text-neutral-900 shrink-0 whitespace-nowrap"
                                    onClick={() => openModalForItem(index)}
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {photoItem && photoGallery.length > 0 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={closePhotoModal}>
                    <div
                        className="relative w-full max-w-lg overflow-hidden rounded-sm bg-white shadow-[0_20px_60px_rgb(0,0,0,0.3)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closePhotoModal}
                            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-md hover:bg-white transition"
                            aria-label="Close photo"
                        >
                            ×
                        </button>
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                            <img
                                src={photoGallery[photoImageIndex]}
                                alt={`${photoItem.name} photo ${photoImageIndex + 1}`}
                                className="h-full w-full object-cover"
                            />
                            {hasMultiplePhotos && (
                                <>
                                    <button
                                        type="button"
                                        onClick={showPrevPhoto}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-black/50 backdrop-blur-sm"
                                        aria-label="Previous photo"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        type="button"
                                        onClick={showNextPhoto}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 px-3 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-black/50 backdrop-blur-sm"
                                        aria-label="Next photo"
                                    >
                                        ›
                                    </button>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                                        {photoGallery.map((_, idx) => (
                                            <span
                                                key={idx}
                                                className={`h-1.5 w-6 rounded-full transition ${
                                                    idx === photoImageIndex ? "bg-neutral-900" : "bg-neutral-300"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="p-6 bg-white">
                            <h3 className="text-base font-light tracking-wide text-neutral-900">{photoItem.name}</h3>
                            {photoItem.description?.includes("\n") && (
                                <p className="mt-2 text-sm text-neutral-600 font-light whitespace-pre-line">{photoItem.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {selectedItem && lengthOptions.length > 0 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={closeModal}>
                    <div
                        className="relative w-full max-w-md rounded-sm bg-white p-8 md:p-10 text-neutral-900 shadow-[0_20px_60px_rgb(0,0,0,0.3)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-6 top-6 text-xl leading-none text-neutral-400 hover:text-neutral-700"
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                        <div className="space-y-2 pb-6 border-b border-neutral-200/60 text-left">
                            <h2 className="text-xl font-light tracking-wide text-neutral-900">{selectedItem.name}</h2>
                            {selectedItem.description && (
                                <p className="text-sm text-neutral-600 font-light whitespace-pre-line">
                                    {selectedItem.description}
                                </p>
                            )}
                        </div>

                        <div className="mt-5 space-y-3">
                            {lengthOptions.map((option, idx) => {
                                const optionKey = option.name ?? `option-${idx}`;
                                const isSelected = selectedLength === optionKey;
                                return (
                                    <div key={optionKey} className="space-y-3">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedLength(optionKey);
                                                if (selectedItem?.hairTextures?.length) {
                                                    setSelectedTexture((prev) => prev ?? selectedItem.hairTextures?.[0] ?? null);
                                                }
                                            }}
                                            className={`flex w-full items-center justify-between rounded-none border px-5 py-4 text-left transition ${
                                                isSelected ? "border-neutral-900 bg-neutral-50" : "border-neutral-200 bg-white hover:border-neutral-400"
                                            }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <span
                                                    className={`mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full border-2 transition ${
                                                        isSelected ? "border-neutral-900" : "border-neutral-300"
                                                    }`}
                                                >
                                                    {isSelected && <span className="h-2 w-2 rounded-full bg-neutral-900" />}
                                                </span>
                                                <div className="space-y-1">
                                                    {option.name && (
                                                        <div className="text-sm font-medium tracking-wide text-neutral-900">{option.name}</div>
                                                    )}
                                                    {option.duration && (
                                                        <div className="text-xs text-neutral-500 font-light">{option.duration}</div>
                                                    )}
                                                    {option.notes && (
                                                        <div className="text-xs text-neutral-500 font-light">{option.notes}</div>
                                                    )}
                                                </div>
                                            </div>
                                            {option.price && <span className="text-base font-medium text-neutral-900">{option.price}</span>}
                                        </button>
                                        {isSelected && selectedItem?.hairTextures?.length ? (
                                            <div className="pl-9 pr-4">
                                                <div className="rounded-none border border-neutral-200 bg-neutral-50 p-4">
                                                    <label className="block text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-600 mb-2">
                                                        Select Human Hair Texture
                                                    </label>
                                                    <select
                                                        value={selectedTexture ?? ""}
                                                        onChange={(event) => setSelectedTexture(event.target.value || null)}
                                                        className="w-full rounded-none border border-neutral-300 bg-white px-4 py-2.5 text-sm font-light text-neutral-900 transition focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 hover:border-neutral-400"
                                                    >
                                                        {selectedItem.hairTextures.map((texture) => (
                                                            <option key={texture} value={texture}>
                                                                {texture}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                );
                            })}
                        </div>

                        <Button
                            type="button"
                            disabled={!selectedLength || (selectedItem.hairTextures?.length ? !selectedTexture : false)}
                            onClick={handleModalSelect}
                            className="mt-8 w-full rounded-none border border-neutral-900 bg-neutral-900 py-3 text-xs font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-transparent hover:text-neutral-900 disabled:cursor-not-allowed disabled:border-neutral-200 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:hover:bg-neutral-200 disabled:hover:text-neutral-500"
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
