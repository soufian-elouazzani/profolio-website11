import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  showFullName?: boolean;
}

export function SiteLogo({ className, showFullName = true }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label={`${siteConfig.authorName} — home`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-heading text-sm font-semibold text-primary-foreground transition-opacity group-hover:opacity-90">
        SE
      </span>
      {showFullName ? (
        <span className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {siteConfig.authorName}
        </span>
      ) : null}
    </Link>
  );
}
