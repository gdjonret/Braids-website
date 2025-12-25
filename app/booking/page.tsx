import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import { bookingCategories } from "./data";

export default function BookingPage() {
    return (
        <>
            <Navbar />

            <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-24 md:py-32 text-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Book Your Style</p>
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
                        Services <span className="font-serif italic">Categories</span>
                    </h1>
                    <p className="mt-6 text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                        Select a category to explore available styles and secure your appointment.
                    </p>
                </div>
                <div className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-amber-100/30 blur-3xl" aria-hidden="true" />
            </section>

            <section className="bg-white pb-24 md:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="divide-y divide-neutral-200/60">
                        {bookingCategories.map((category) => (
                            <div
                                key={category.slug}
                                className="group flex items-center justify-between py-8 md:py-10 transition-all duration-300 hover:bg-neutral-50/50"
                            >
                                <div className="flex flex-col">
                                    <span className="text-lg md:text-xl font-light tracking-wide text-neutral-900 transition-colors group-hover:text-neutral-700">
                                        {category.name}
                                    </span>
                                </div>

                                <Button
                                    asChild
                                    className="rounded-none border border-neutral-900 bg-neutral-900 px-6 md:px-8 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-transparent hover:text-neutral-900"
                                >
                                    <Link href={`/booking/${category.slug}`}>Book Now</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
