"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden bg-tasvee-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="text-sm font-bold tracking-wider md:text-base">
          TASVEE
          <span className="block text-[10px] font-normal tracking-[0.2em] text-gray-400 md:text-xs">
            DESIGN SCHOOL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-tasvee-red ${
                  isActive
                    ? "border-b-2 border-tasvee-red pb-0.5 text-white"
                    : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Button href="/contact" showArrow className="text-xs md:text-sm">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-tasvee-black px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-tasvee-red" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" showArrow className="w-full">
                Apply Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
