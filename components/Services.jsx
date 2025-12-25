"use client";
import { Button } from "@/components/ui/button";

export default function Services() {
  const items = [
    {
      name: "Box Braids",
      slug: "box-braids",
    },
    {
      name: "Knotless Styles",
      slug: "knotless",
      focus: "40% 20%",
    },
    {
      name: "French Curl",
      slug: "french-curl",
      focus: "80% 10%",
    },
    {
      name: "Locs",
      slug: "locs",
    },
    {
      name: "Twists",
      slug: "twists",
    },
    {
      name: "Crochet",
      slug: "crochet",
    },
    {
      name: "Kids Braids",
      slug: "kids-braids",
      focus: "60% 30%",
    },
  ];

  return (
    <>
      <section id="services" className="relative overflow-hidden bg-gradient-to-b from-[#fff3d2] via-[#fff7e1] to-[#fffdf4] pt-24 md:pt-32 pb-12 md:pb-16 text-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
              Signature <span className="font-serif italic">Services</span>
            </h2>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -top-20 left-10 h-56 w-56 rounded-full bg-[#f7e4ab]/40 blur-3xl" aria-hidden="true" />
      </section>

      <section className="bg-[#fffdf6] pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="divide-y divide-[#ecdcc0]">
            {items.map((it, idx) => (
              <div
                key={`${it.name}-${idx}`}
                className="group flex items-center justify-between py-8 md:py-10 transition-all duration-300 hover:bg-white/80"
              >
                <div className="flex flex-col">
                  <span className="text-lg md:text-xl font-light tracking-wide text-neutral-900 transition-colors group-hover:text-neutral-700">
                    {it.name}
                  </span>
                </div>
                <Button
                  asChild
                  className="rounded-none border border-neutral-900 bg-neutral-900 px-6 md:px-8 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-transparent hover:text-neutral-900"
                >
                  <a href={`/booking/${it.slug}`}>Book Now</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
