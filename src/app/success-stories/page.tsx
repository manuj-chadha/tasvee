import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { hiringPartners, successStories } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Success Stories",
  description:
    "Real people, real skills, real success. Discover how Tasvee Design School students transformed their passion into professional creative careers.",
  path: "/success-stories",
});

const heroStats = [
  { icon: Users, value: "500+", label: "Students Trained" },
  { icon: Briefcase, value: "100+", label: "Placed / Freelancing" },
  { icon: GraduationCap, value: "6+", label: "Years of Impact" },
  { icon: Handshake, value: "50+", label: "Hiring Partners" },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tasvee-black text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Real People. Real Skills.{" "}
            <span className="text-tasvee-red">Real Success.</span>
          </h1>
          <p className="mb-12 max-w-xl text-gray-400">
            At Tasvee Design School, we don&apos;t just teach — we transform
            passion into profession.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {heroStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-tasvee-red" />
                <div>
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Our Students"
            title={
              <>
                Their Journey, Their{" "}
                <span className="text-tasvee-red">Success</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {successStories.map((student) => (
              <article
                key={student.name}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="absolute -bottom-5 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-tasvee-red text-sm font-bold text-white">
                    {student.name.charAt(0)}
                  </div>
                </div>
                <div className="p-5 pt-8">
                  <h3 className="font-bold">{student.name}</h3>
                  <p className="text-xs text-tasvee-red">{student.role}</p>
                  <p className="text-xs text-gray-500">{student.company}</p>
                  <p className="mt-3 text-sm text-gray-600">{student.story}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-tasvee-red hover:underline"
                  >
                    Read Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" variant="ghost" showArrow>
              View More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="bg-tasvee-black py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
            Our Impact — Building Careers.{" "}
            <span className="text-tasvee-red">Changing Lives.</span>
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {heroStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3">
                <Icon className="h-5 w-5 text-tasvee-red" />
                <div>
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Hiring Partners */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            title={
              <>
                Our Hiring <span className="text-tasvee-red">Partners</span>
              </>
            }
          />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {hiringPartners.map((partner) => (
              <div
                key={partner}
                className="flex h-20 items-center justify-center rounded-xl border bg-gray-50 px-4"
              >
                <span className="text-sm font-semibold text-gray-400">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact" variant="ghost" showArrow>
              View All Partners
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Your Success Story Could Be Next!"
        subtitle="Join Tasvee Design School and take the first step towards your dream career."
      />
    </>
  );
}
