import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";
import { FAQAccordion } from "./FAQAccordion";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Tasvee Design School in Kota. Ask about courses, admissions, or career guidance. We reply within 24 hours.",
  path: "/contact",
});

const heroFeatures = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Expert Guidance",
    description: "Get advice from experts",
  },
  {
    icon: Phone,
    title: "Demo Class",
    description: "Book your free demo",
  },
  {
    icon: MapPin,
    title: "Career Support",
    description: "We support your journey",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-tasvee-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-tasvee-red">
            Get In Touch
          </p>
          <h1 className="mb-6 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            We&apos;d Love to <span className="text-tasvee-red">Hear</span> From
            You!
          </h1>
          <p className="mb-10 max-w-xl text-gray-400">
            Have questions about our courses, admissions, or career
            opportunities? Reach out and our team will guide you.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-white/10 p-4">
                <Icon className="mb-3 h-6 w-6 text-tasvee-red" />
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              title="Drop Us a Message"
              description="Fill out the form and we'll get back to you as soon as possible."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <SectionHeading title="Reach Out to Us" />
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <Phone className="mb-3 h-6 w-6 text-tasvee-red" />
                <h3 className="font-bold">Phone</h3>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-1 block text-sm text-gray-600 hover:text-tasvee-red"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-xs text-gray-400">{siteConfig.hours}</p>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <Mail className="mb-3 h-6 w-6 text-tasvee-red" />
                <h3 className="font-bold">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-sm text-gray-600 hover:text-tasvee-red"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <MapPin className="mb-3 h-6 w-6 text-tasvee-red" />
                <h3 className="font-bold">Location</h3>
                <p className="mt-1 text-sm text-gray-600">{siteConfig.address}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm font-bold">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-tasvee-red"
                >
                  <SocialIcon name="instagram" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  aria-label="YouTube"
                  className="text-gray-500 hover:text-tasvee-red"
                >
                  <SocialIcon name="youtube" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-tasvee-red"
                >
                  <SocialIcon name="facebook" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-tasvee-red"
                >
                  <SocialIcon name="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="overflow-hidden bg-tasvee-black">
        <div className="relative">
          <div className="aspect-[21/9] w-full min-h-[240px] bg-gradient-to-br from-gray-800 to-gray-900">
            <iframe
              title="Tasvee Design School location on map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
              className="h-full w-full border-0 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="border-t border-white/10 bg-tasvee-black p-6 text-white md:absolute md:left-8 md:top-1/2 md:max-w-sm md:-translate-y-1/2 md:rounded-2xl md:border md:bg-tasvee-black/95 md:p-6 md:shadow-xl lg:left-16">
            <h2 className="text-lg font-bold">
              We&apos;re Located in {siteConfig.city}, Rajasthan
            </h2>
            <p className="mt-2 text-sm text-gray-400">{siteConfig.fullAddress}</p>
            <Button
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.mapQuery)}`}
              variant="outline"
              className="mt-4"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              title={
                <>
                  Frequently Asked{" "}
                  <span className="text-tasvee-red">Questions</span>
                </>
              }
            />
            <p className="text-sm text-gray-500">
              Have more questions? Call us at{" "}
              <a href={siteConfig.phoneHref} className="font-semibold text-tasvee-red">
                {siteConfig.phone}
              </a>
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Creative Journey?"
        subtitle="Join Tasvee Design School and take the first step towards your dream career."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: siteConfig.name,
            description: siteConfig.tagline,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kota",
              addressRegion: "Rajasthan",
              streetAddress: siteConfig.fullAddress,
              postalCode: "324007",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </>
  );
}
