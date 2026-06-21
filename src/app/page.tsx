import {
  Building2,
  Check,
  Laptop,
  Monitor,
  Sparkles,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { CourseCard } from "@/components/sections/CourseCard";
import { StatsBar } from "@/components/sections/StatsBar";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  courses,
  flexibleLearningItems,
  mentor,
  siteConfig,
  stats,
  whyChooseItems,
} from "@/lib/site-config";

const flexibleIcons = [Building2, Laptop, Video, Monitor];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tasvee-black text-white">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <p className="absolute right-0 top-20 translate-x-1/4 text-[clamp(4rem,20vw,12.5rem)] font-black leading-none">
            DESIGN
          </p>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-tasvee-red">
              Industry Focused Training
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Learn. Create. Grow.{" "}
              <span className="text-tasvee-red">Earn.</span>
            </h1>
            <p className="mb-4 max-w-xl text-lg text-gray-300">
              Master Graphic Design, Video Editing, Motion Graphics, UI/UX, 2D/3D
              Animation, and AI Tools through Online & Offline industry-focused
              training, live projects, and expert mentorship.
            </p>
            <p className="mb-4 max-w-xl text-sm leading-relaxed text-gray-400">
              At Tasvee Design School, we don&apos;t just teach software—we help
              you build real-world skills, an impressive portfolio, and the
              confidence to succeed in the creative industry.
            </p>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-gray-400">
              Choose the learning mode that suits you best: attend classes at our{" "}
              {siteConfig.city} campus or join from anywhere in India through our
              live online sessions.
            </p>
            <Button href="/courses" showArrow>
              Start Learning
            </Button>
          </div>

          <div className="relative flex justify-center overflow-hidden px-2">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-red-900/50 to-gray-800">
                  <p className="text-lg font-bold text-white/80">
                    Design Without Limits
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-8 flex flex-col gap-2">
                {["Ps", "Ai", "Ae", "Pr"].map((tool, i) => (
                  <span
                    key={tool}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xs font-bold text-gray-800 shadow-lg"
                    style={{ transform: `translateY(${i * 4}px)` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 rounded-xl bg-white p-3 shadow-xl">
                <p className="text-xs font-bold text-gray-800">500+ Students Trained</p>
                <div className="mt-1 flex -space-x-2">
                  {["R", "P", "A", "S"].map((l) => (
                    <div
                      key={l}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-tasvee-red text-[10px] font-bold text-white ring-2 ring-white"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBar items={stats} />

      {/* Why Choose */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Monitor className="mx-auto mb-4 h-16 w-16 text-tasvee-red" />
                <p className="text-sm text-gray-400">Online & Offline Learning</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Tasvee?"
              title={
                <>
                  Why Choose <span className="text-tasvee-red">Tasvee</span> Design
                  School?
                </>
              }
            />
            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              At Tasvee Design School, our mission is simple:{" "}
              <span className="font-semibold text-foreground">
                Learn. Create. Grow. Earn.
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Whether you join us offline at our {siteConfig.city} campus or online
              from the comfort of your home, you&apos;ll receive practical training,
              personalized mentorship, and hands-on experience designed to make you
              industry-ready.
            </p>
            <p className="mt-6 text-sm font-semibold text-foreground">
              Why Students Choose Us:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {whyChooseItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-tasvee-red" />
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="ghost" showArrow>
                Know More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-tasvee-gray py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Available in Both Online & Offline Modes"
              title={
                <>
                  Learn Skills. <span className="text-tasvee-red">Create Impact.</span>
                </>
              }
            />
            <Button href="/courses" variant="ghost" showArrow>
              Explore All Courses
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Learning */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Flexible Learning"
            title={
              <>
                Learn Your Way –{" "}
                <span className="text-tasvee-red">Online or Offline</span>
              </>
            }
            description={`Whether you're in ${siteConfig.city} or anywhere else in India, Tasvee Design School offers the same quality education in both modes.`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flexibleLearningItems.map((item, i) => {
              const Icon = flexibleIcons[i] ?? Monitor;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >
                  <Icon className="mb-4 h-8 w-8 text-tasvee-red" />
                  <h3 className="mb-2 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="bg-tasvee-gray py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-tasvee-red">
            Meet Your Mentor
          </p>
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-tasvee-red/20 to-gray-200">
                  <div className="flex h-full items-center justify-center text-6xl font-bold text-tasvee-red/30">
                    DK
                  </div>
                </div>
                <div className="absolute -inset-2 -z-10 rounded-full border-4 border-tasvee-red/30" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold">{mentor.name}</h2>
              <p className="mt-1 text-sm text-tasvee-red">{mentor.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{mentor.bio}</p>
              <Button href="/about" variant="ghost" showArrow className="mt-6">
                Know More About Mentor
              </Button>
            </div>
            <div className="space-y-4">
              {mentor.highlights.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm"
                >
                  <Sparkles className="h-5 w-5 shrink-0 text-tasvee-red" />
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <CTABanner
        title="Ready to Start Your Creative Journey?"
        subtitle="Join Tasvee Design School and transform your passion into profession with Online & Offline learning options, practical projects, expert mentorship, and career-focused training."
        tagline="Learn from Anywhere. Create Without Limits. Grow with Confidence."
      />
    </>
  );
}
