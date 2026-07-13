import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { routesConfig } from "@/config/routes";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <nav className="container flex flex-wrap items-center justify-center gap-4 py-6 text-sm text-muted-foreground">
        {routesConfig.footerNav?.map((item: { title: string; href: string }) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-foreground hover:underline underline-offset-4"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="container flex items-center justify-center gap-8 pb-10 md:h-24">
        {SocialLinks.map((item, ind) => (
          <CustomTooltip icon={item.icon} text={item.username} key={ind}>
            <Link
              href={item.link}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                }),
                "h-10 w-10 p-2"
              )}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
}
