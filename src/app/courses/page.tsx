import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { CourseCard } from "@/components/sections/CourseCard";
import { StatsBar } from "@/components/sections/StatsBar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { courses, stats } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Courses",
  description:
    "Explore industry-focused courses at Tasvee Design School — Graphic Design, Video Editing, Motion Graphics, UI/UX Design, 2D/3D Animation, and AI for Creators. Available online & offline.",
  path: "/courses",
});

const heroFeatures = [
  { icon: Users, label: "Expert Mentors" },
  { icon: Briefcase, label: "Live Projects" },
  { icon: GraduationCap, label: "Practical Training" },
  { icon: Sparkles, label: "Placement Support" },
];

const whyItems = [
  {
    title: "Industry Expert Mentors",
    description: "Learn from professionals with real industry experience.",
  },
  {
    title: "Live Project Training",
    description: "Work on real client-style projects during your course.",
  },
  {
    title: "Placement Assistance",
    description: "Career guidance and connections to hiring partners.",
  },
  {
    title: "Flexible Learning",
    description: "Choose between offline and online live classes.",
  },
  {
    title: "Lifetime Support",
    description: "Continued mentorship even after course completion.",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tasvee-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white">Courses</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Our Courses Designed for{" "}
                <span className="text-tasvee-red">Creative</span> Careers
              </h1>
              <p className="mb-8 text-gray-400">
                Industry-focused training to turn your creativity into real
                skills and real opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                {heroFeatures.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm">
                    <Icon className="h-4 w-4 text-tasvee-red" />
                    <span className="text-gray-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-2xl">
                  <div className="mb-4 flex gap-2">
                    {["Ps", "Ai", "Ae", "Pr"].map((t) => (
                      <span
                        key={t}
                        className="flex h-8 w-8 items-center justify-center rounded bg-white/10 text-xs font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-red-900/40 to-gray-800" />
                </div>
                <div className="absolute -inset-4 -z-10 rounded-full bg-tasvee-red/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={stats} />

      {/* Course Catalog */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Courses"
            title={
              <>
                Explore Our{" "}
                <span className="text-tasvee-red">Industry-Focused</span> Courses
              </>
            }
            description="Choose the program that matches your creative goals. Every course includes hands-on projects, mentor feedback, and portfolio building."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Counseling CTA */}
      <section className="w-full px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl bg-tasvee-black px-8 py-10 text-white md:flex-row">
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Talk to our career advisor and get the perfect guidance.
            </p>
          </div>
          <Button href="/contact">Book Free Counseling</Button>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            title={
              <>
                WHY CHOOSE <span className="text-tasvee-red">TASVEE</span>?
              </>
            }
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {whyItems.map((item) => (
              <div key={item.title} className="text-center">
                <Sparkles className="mx-auto mb-4 h-8 w-8 text-tasvee-red" />
                <h3 className="mb-2 text-sm font-bold">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
