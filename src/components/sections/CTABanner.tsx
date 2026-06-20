import { Phone, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function CTABanner({
  title = "Ready to Start Your Creative Career?",
  subtitle = "Join Tasvee Design School and turn your creativity into a profession.",
  primaryLabel = "Apply Now",
  secondaryLabel = "Call Now",
}: CTABannerProps) {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl bg-tasvee-red px-8 py-10 md:flex-row">
        <div className="flex items-start gap-4 text-white">
          <Rocket className="mt-1 h-8 w-8 shrink-0" />
          <div>
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
            <p className="mt-2 text-sm text-red-100 md:text-base">{subtitle}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="white" showArrow>
            {primaryLabel}
          </Button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
