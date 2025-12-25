"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[rgba(255,255,255,0.95)] backdrop-blur-sm border-b border-neutral-200/60">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="/"
            className="text-lg font-light tracking-[0.15em] text-neutral-900 transition-colors hover:text-neutral-600"
          >
            ZBOO
          </a>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-xs uppercase tracking-[0.2em] text-neutral-600 font-medium">
            <a className="hover:text-neutral-900 transition-colors" href="/about">About</a>
            <a className="hover:text-neutral-900 transition-colors" href="/services">Services</a>
            <a className="hover:text-neutral-900 transition-colors" href="/gallery">Gallery</a>
            <a className="hover:text-neutral-900 transition-colors" href="/contact">Contact</a>
          </nav>

          <Button asChild className="hidden md:inline-flex rounded-none border border-neutral-900 bg-neutral-900 px-6 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-all hover:bg-transparent hover:text-neutral-900">
            <a href="/booking">Book Now</a>
          </Button>

          <button
            onClick={() => {
              console.log('Menu button clicked');
              setOpen(!open);
            }}
            className="md:hidden rounded-none border border-neutral-900 bg-neutral-900 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-20 z-40 bg-[rgba(255,255,255,0.98)] border-b border-neutral-200 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm uppercase tracking-[0.26em] text-neutral-700">
            <a href="/about" onClick={() => setOpen(false)} className="border-b border-neutral-200 py-3 text-neutral-800">About</a>
            <a href="/services" onClick={() => setOpen(false)} className="border-b border-neutral-200 py-3 text-neutral-800">Services</a>
            <a href="/gallery" onClick={() => setOpen(false)} className="border-b border-neutral-200 py-3 text-neutral-800">Gallery</a>
            <a href="/contact" onClick={() => setOpen(false)} className="border-b border-neutral-200 py-3 text-neutral-800">Contact</a>
            <a href="/booking" onClick={() => setOpen(false)} className="border-b border-neutral-200 py-3 text-neutral-800">Book Now</a>
          </nav>
        </div>
      )}
    </>
  );
}