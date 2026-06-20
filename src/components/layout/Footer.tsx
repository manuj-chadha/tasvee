import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { courses, navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const quickLinks = navLinks.filter((l) => l.href !== "/");

  return (
    <footer className="bg-tasvee-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-1">
          <p className="text-sm font-bold tracking-wider">
            TASVEE
            <span className="block text-[10px] font-normal tracking-[0.2em] text-gray-400">
              DESIGN SCHOOL
            </span>
          </p>
          <p className="mt-4 text-sm text-gray-400">{siteConfig.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-gray-400 hover:text-tasvee-red">
              <SocialIcon name="instagram" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="text-gray-400 hover:text-tasvee-red">
              <SocialIcon name="youtube" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-gray-400 hover:text-tasvee-red">
              <SocialIcon name="facebook" />
            </a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-gray-400 hover:text-tasvee-red">
              <SocialIcon name="linkedin" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            Courses
          </h3>
          <ul className="space-y-2">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link
                  href="/courses"
                  className="text-sm text-gray-300 hover:text-tasvee-red"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-tasvee-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tasvee-red" />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-tasvee-red" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tasvee-red" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            Newsletter
          </h3>
          <p className="mb-3 text-sm text-gray-400">
            Subscribe to get updates on courses and events.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-tasvee-red focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-tasvee-red px-4 py-2 text-sm font-semibold hover:bg-red-700"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-500 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
