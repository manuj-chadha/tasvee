import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { courses } from "@/lib/site-config";

type Course = (typeof courses)[number];

export function CourseCard({
  course,
  variant = "light",
}: {
  course: Course;
  variant?: "light" | "dark";
}) {
  if (variant === "dark") {
    return (
      <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-lg">
        <div
          className={`relative flex h-48 flex-col justify-between bg-gradient-to-br ${course.color} p-6 text-white`}
        >
          <div className="flex gap-2">
            {course.tools.map((tool) => (
              <span
                key={tool}
                className="rounded bg-white/20 px-2 py-0.5 text-xs font-bold"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex items-end justify-between">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <span className="rounded-full bg-tasvee-red px-3 py-1 text-xs font-semibold">
              {course.duration}
            </span>
          </div>
        </div>
        <div className="p-6">
          <ul className="mb-4 space-y-2">
            {course.topics.map((topic) => (
              <li key={topic} className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="h-4 w-4 shrink-0 text-tasvee-red" />
                {topic}
              </li>
            ))}
          </ul>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1 text-sm font-semibold text-tasvee-red hover:underline"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex gap-2">
        {course.tools.map((tool) => (
          <span
            key={tool}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-700"
          >
            {tool}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-lg font-bold">{course.title}</h3>
      <p className="mb-4 text-sm text-gray-600">{course.description}</p>
      <Link
        href="/courses"
        className="inline-flex items-center gap-1 text-sm font-semibold text-tasvee-red hover:underline"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
