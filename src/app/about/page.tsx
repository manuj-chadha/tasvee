import {
  Award,
  Briefcase,
  Check,
  Eye,
  Layers,
  Play,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { StatsBar } from "@/components/sections/StatsBar";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import {
  aboutStats,
  coreValues,
  mentor,
  whyChooseDarkItems,
} from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Tasvee Design School — where creativity becomes career. Industry expert mentors, practical learning, live projects, and placement guidance in Kanpur.",
  path: "/about",
});

const heroFeatures = [
  { icon: Users, label: "Industry Expert Mentors" },
  { icon: Layers, label: "Practical Learning" },
  { icon: Briefcase, label: "Live Projects & Portfolio" },
  { icon: Award, label: "Career Support & Placement Guidance" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tasvee-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-tasvee-red">
            About Tasvee Design School
          </p>
          <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            Where Creativity Becomes{" "}
            <span className="text-tasvee-red">Career.</span>
          </h1>
          <p className="mb-8 max-w-xl text-gray-400">
            Tasvee Design School is a creative learning platform dedicated to
            transforming passion into profession through design, video, and
            animation training.
          </p>
          <div className="flex flex-wrap gap-6">
            {heroFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm">
                <Icon className="h-5 w-5 text-tasvee-red" />
                <span className="text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar items={aboutStats} columns={5} />

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  Built with <span className="text-tasvee-red">Passion.</span>{" "}
                  Driven by <span className="text-tasvee-red">Purpose.</span>
                </>
              }
            />
            <p className="mt-6 text-gray-600 leading-relaxed">
              Tasvee Design School was founded with a vision to provide
              high-quality, practical design education accessible to everyone.
              We believe creativity should not be limited — it should become a
              sustainable career.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From day one, our focus has been on industry-relevant skills,
              hands-on projects, and mentorship that prepares students for
              real-world creative careers.
            </p>
            <Button href="/success-stories" variant="ghost" showArrow className="mt-8">
              Our Journey
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="flex h-full items-center justify-center">
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-tasvee-red shadow-lg transition-transform hover:scale-105"
                  aria-label="Play our story video"
                >
                  <Play className="h-7 w-7 fill-white text-white" />
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm font-medium text-tasvee-red">
              → Play Our Story
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-tasvee-gray py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <Target className="h-6 w-6 text-tasvee-red" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                To empower aspiring creatives with industry-standard skills,
                practical experience, and career guidance that transforms
                passion into sustainable professions.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <Eye className="h-6 w-6 text-tasvee-red" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                To become India&apos;s most trusted creative education institute,
                known for producing job-ready designers, editors, and animators
                who excel globally.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-tasvee-black p-8 text-white lg:p-10">
            <h3 className="text-2xl font-bold">
              Our <span className="text-tasvee-red">Core Values</span>
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-tasvee-red" />
                  <span className="text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="relative flex justify-center">
              <div className="h-72 w-56 overflow-hidden rounded-2xl bg-gradient-to-br from-tasvee-red to-red-900">
                <div className="flex h-full items-end justify-center pb-8 text-5xl font-bold text-white/30">
                  DK
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Mentor"
                title={
                  <>
                    Learn from <span className="text-tasvee-red">Industry.</span>
                  </>
                }
              />
              <h3 className="mt-4 text-xl font-bold">{mentor.name}</h3>
              <p className="text-sm text-tasvee-red">{mentor.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {mentor.bio}
              </p>
            </div>
            <div className="space-y-4">
              {mentor.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-tasvee-red" />
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Dark */}
      <section className="bg-tasvee-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            dark
            title={
              <>
                WHY CHOOSE <span className="text-tasvee-red">TASVEE?</span>
              </>
            }
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseDarkItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 p-6">
                <Sparkles className="mb-4 h-6 w-6 text-tasvee-red" />
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Creative Journey?"
        subtitle="Join Tasvee Design School and take the first step towards your dream career."
      />
    </>
  );
}
