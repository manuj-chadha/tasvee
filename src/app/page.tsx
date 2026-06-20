import {
  Bot,
  Briefcase,
  Check,
  Monitor,
  Play,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { CourseCard } from "@/components/sections/CourseCard";
import { StatsBar } from "@/components/sections/StatsBar";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses, learningJourney, mentor, stats, whyChooseItems } from "@/lib/site-config";

const heroFeatures = [
  { icon: Monitor, label: "Offline & Online Classes" },
  { icon: Briefcase, label: "Live Projects" },
  { icon: Bot, label: "AI Tools" },
  { icon: Users, label: "Placement Guidance" },
];

const projectPlaceholders = [
  { title: "Travel Poster", color: "from-sky-500 to-blue-700" },
  { title: "Shoe Ad", color: "from-orange-400 to-red-600" },
  { title: "Skincare Brand", color: "from-pink-300 to-rose-500" },
  { title: "Car Ad", color: "from-gray-600 to-gray-900" },
  { title: "Food Promo", color: "from-yellow-400 to-orange-500" },
  { title: "Luxury Watch", color: "from-amber-700 to-yellow-900" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tasvee-black text-white">
        <div className="absolute inset-0 opacity-5">
          <p className="absolute -right-20 top-20 text-[200px] font-black leading-none">
            DESIGN
          </p>
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-tasvee-red">
              Industry Focused Training
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Learn. Create. Earn.{" "}
              <span className="text-tasvee-red">Grow.</span>
            </h1>
            <p className="mb-8 max-w-lg text-gray-400">
              Become a Professional Designer, Video Editor & Motion Artist with
              Industry-Level Training.
            </p>
            <div className="mb-8 flex flex-wrap gap-4">
              {heroFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon className="h-4 w-4 text-tasvee-red" />
                  {label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/courses" showArrow>
                Start Learning
              </Button>
              <Button href="/contact" variant="outline">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
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
              <div className="absolute -right-4 top-8 flex flex-col gap-2">
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
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-xl">
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Monitor className="mx-auto mb-4 h-16 w-16 text-tasvee-red" />
                <p className="text-sm text-gray-400">Modern Creative Classroom</p>
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
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChooseItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-tasvee-red" />
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              title={
                <>
                  Student Projects That <span className="text-tasvee-red">Speak</span>
                </>
              }
            />
            <Button href="/success-stories" variant="ghost" showArrow>
              View More Projects
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {projectPlaceholders.map((project) => (
              <div
                key={project.title}
                className={`aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br ${project.color} p-4`}
              >
                <p className="text-xs font-semibold text-white/80">{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="bg-tasvee-gray py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            title={
              <>
                Your Path to <span className="text-tasvee-red">Creative Success</span>
              </>
            }
          />
          <div className="mt-16 overflow-x-auto pb-4">
            <div className="flex min-w-[800px] items-start justify-between">
              {learningJourney.map((step, i) => (
                <div key={step.step} className="relative flex flex-1 flex-col items-center text-center">
                  {i < learningJourney.length - 1 && (
                    <div className="absolute left-[50%] top-5 h-0.5 w-full bg-tasvee-red" />
                  )}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-tasvee-red text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="mt-3 text-sm font-bold">{step.step}</p>
                  <p className="mt-1 max-w-[120px] text-xs text-gray-500">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="py-24">
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
      <CTABanner />
    </>
  );
}
