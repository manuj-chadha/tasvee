"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/lib/site-config";

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const maxIndex = Math.max(0, testimonials.length - visible);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          What Our <span className="text-tasvee-red">Students</span> Say
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow disabled:opacity-30 md:-left-6"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-300"
              style={{ transform: `translateX(-${current * (100 / visible + 2)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-[280px] flex-1 rounded-2xl border bg-white p-6 shadow-sm md:min-w-[320px]"
                >
                  <Quote className="mb-4 h-8 w-8 text-tasvee-red/30" />
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-tasvee-red text-tasvee-red"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tasvee-red text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 shadow disabled:opacity-30 md:-right-6"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(Math.min(i, maxIndex))}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? "bg-tasvee-red" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
