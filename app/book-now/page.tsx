"use client";

/*
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AvailabilityWidget from "@/components/AvailabilityWidget";
import Footer from "@/components/Footer";

export default function BookNowPage() {
    const name = "PASSION TWIST / JUMBO";
    const price = 146;
    const img = "/Services/box-braids.png";
    const timeEstimate = "Prices and time depend on style size, length, density, and selected add-ons";
    const bullets = [
        "Protective Style: Shields your natural hair while it grows, promoting healthy hair underneath.",
        "Low Maintenance: Enjoy long-lasting style with minimal daily upkeep.",
        "Versatility: Wear up, down, or half-up styles for endless options.",
        "Effortless Beauty: Natural texture and bounce add instant volume and style.",
    ];
    const description =
        "Experience the effortless beauty and bohemian flair of Passion Twists! These stunning two-strand twists are created using water wave braiding hair, resulting in a natural, bouncy texture that flatters all face shapes.";
    const bookingUrl = "https://squareup.com/appointments/buyer/widget/YOUR_LOCATION_ID";

    const [styleSize, setStyleSize] = useState("Jumbo");
    const [length, setLength] = useState("Shoulder");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sizeOptions = ["Jumbo", "Large", "Medium", "Small"];
    const lengthOptions = ["Shoulder", "Mid-Back", "Waist", "Butt-Length"];

    const displayPrice = typeof price === "number" ? `$${price.toFixed(2)} USD` : price;

    return (
        <>
        <Navbar />
        <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-auto object-cover"
                />

                <div className="max-w-xl">
                    <p className="text-xs tracking-widest text-neutral-500 uppercase">My Store</p>
                    <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">{name}</h1>

                    <div className="mt-4 text-lg font-medium">{displayPrice}</div>

                    <div className="mt-4 text-sm text-neutral-700">
                        <div className="uppercase tracking-widest text-neutral-500">Time Estimation</div>
                        <div className="mt-1">{timeEstimate}</div>
                    </div>

                    <div className="my-4">~</div>

                    <h3 className="font-semibold">Unleash Your Inner Goddess with Passion Twists!</h3>
                    <p className="mt-2 text-neutral-800 leading-relaxed">{description}</p>

                    {bullets.length > 0 && (
                        <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-800">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}

                    <p className="mt-6 text-neutral-800">
                        Ready to rock this glamorous yet carefree hairstyle? Book your appointment today!
                    </p>

                    <div className="mt-6 space-y-4 text-sm">
                        <div>
                            <div className="mb-1 font-medium">Style Size</div>
                            <div className="flex flex-wrap gap-2">
                                {sizeOptions.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setStyleSize(size)}
                                        className={`inline-flex items-center justify-center px-4 py-2 rounded-full border transition ${
                                            styleSize === size
                                                ? "border-neutral-900 bg-neutral-900 text-white"
                                                : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="mb-1 font-medium">Length</div>
                            <div className="flex flex-wrap gap-2">
                                {lengthOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setLength(option)}
                                        className={`inline-flex items-center justify-center px-4 py-2 rounded-full border transition ${
                                            length === option
                                                ? "border-neutral-900 bg-neutral-900 text-white"
                                                : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-md border border-neutral-300 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Purchase Options</p>
                        <div className="mt-3 flex items-center gap-3 text-sm font-medium text-neutral-900">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="deposit-only"
                                    name="purchase-option"
                                    checked
                                    readOnly
                                    className="h-4 w-4 border-neutral-400 text-neutral-900 focus:ring-neutral-900"
                                />
                                <label htmlFor="deposit-only">$50.00 Deposit</label>
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-neutral-600">
                            You will be charged a deposit today and the remaining balance after the service.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-neutral-900 px-6 py-3 text-sm font-semibold tracking-[0.25em] uppercase text-neutral-900 hover:bg-neutral-50 transition"
                    >
                        Schedule Your Time
                    </button>

                    <p className="mt-6 text-xs text-neutral-500">
                        Deposits are non-refundable. 15-minute grace period. 24h+ notice to reschedule.
                    </p>
                </div>
            </div>
        </section>

        {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setIsModalOpen(false)}>
                <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto" onClick={(e) => e.stopPropagation()}>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-neutral-600 shadow-lg hover:bg-neutral-100 transition"
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                    <AvailabilityWidget
                        serviceName={name}
                        sizeOptions={sizeOptions}
                        lengthOptions={lengthOptions}
                        initialSize={styleSize}
                        initialLength={length}
                    />
                </div>
            </div>
        )}

        <Footer />
        </>
    );
}
*/

export default function BookNowPage() {
    return null;
}
