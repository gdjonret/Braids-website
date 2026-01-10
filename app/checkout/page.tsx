"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CalendlyInlineWidget from "@/components/CalendlyInlineWidget";

export default function CheckoutPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex-1 flex items-center justify-center bg-white text-xs uppercase tracking-[0.35em] text-neutral-500">
                        Loading checkout...
                    </div>
                    <Footer />
                </div>
            }
        >
            <CheckoutContent />
        </Suspense>
    );
}

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const serviceName = searchParams.get("service") || "Service";
    const lengthLabel = searchParams.get("length") || "";
    const price = searchParams.get("price") || "";
    const duration = searchParams.get("duration") || "";
    const description = searchParams.get("description") || "";
    const texture = searchParams.get("texture") || "";
    const refreshToken = searchParams.toString();

    return (
        <>
            <Navbar />

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-24 md:py-32 text-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Complete Your Booking</p>
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
                        <span className="font-serif italic">Checkout</span>
                    </h1>
                    <p className="mt-6 text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                        Review your selection and schedule your appointment
                    </p>
                </div>
                <div className="pointer-events-none absolute -top-20 left-10 h-56 w-56 rounded-full bg-amber-100/30 blur-3xl" aria-hidden="true" />
            </section>

            <section className="bg-white pb-24 md:pb-32 min-h-[70vh]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Appointment Summary */}
                        <div>
                            <h2 className="text-2xl font-light tracking-wide text-neutral-900 mb-6">
                                Appointment Summary
                            </h2>
                            <div className="bg-white rounded-sm p-6 md:p-8 border border-neutral-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
                                <h3 className="font-light text-neutral-900 text-xl tracking-wide">{serviceName}</h3>
                                {lengthLabel && (
                                    <p className="text-sm text-neutral-600 mt-3 font-light">{lengthLabel}</p>
                                )}
                                {texture && (
                                    <p className="text-xs text-neutral-500 mt-2 uppercase tracking-[0.2em] font-medium">{texture}</p>
                                )}
                                {duration && (
                                    <div className="flex items-center gap-3 mt-4 text-sm text-neutral-600 font-light">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{duration}</span>
                                    </div>
                                )}
                                {price && (
                                    <div className="flex items-center gap-3 mt-3 text-base text-neutral-900 font-medium">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{price}</span>
                                    </div>
                                )}
                                {description && (
                                    <p className="text-sm text-neutral-500 mt-6 pt-6 border-t border-neutral-200/60 font-light leading-relaxed">
                                        {description}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6 bg-neutral-50 border border-neutral-200/60 rounded-sm p-5">
                                <div className="flex gap-3">
                                    <svg className="h-5 w-5 text-neutral-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div className="text-sm text-neutral-700">
                                        <p className="font-medium mb-2 tracking-wide">What to expect</p>
                                        <ul className="space-y-1.5 text-neutral-600 font-light">
                                            <li>• You'll select your preferred date and time</li>
                                            <li>• A deposit may be required to confirm</li>
                                            <li>• You'll receive a confirmation email</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Embedded Calendar */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.back()}
                                    className="rounded-none border border-neutral-300 bg-transparent px-6 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                                >
                                    Back
                                </Button>
                                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium">
                                    Schedule Below
                                </p>
                            </div>
                            <div className="rounded-sm border border-neutral-200/60 p-2 shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
                                <CalendlyInlineWidget
                                    url="https://calendly.com/djonretglo/30min?hide_gdpr_banner=1&hide_event_type_details=1"
                                    minHeight={720}
                                    refreshToken={refreshToken}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
