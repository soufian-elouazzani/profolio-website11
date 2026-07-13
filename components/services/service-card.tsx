import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ServiceItem } from "@/config/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const isLive = service.status === "live";

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col rounded-lg border border-border bg-background p-6",
        className
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {service.title}
        </h3>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
            isLive
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-muted text-muted-foreground"
          )}
        >
          {isLive ? "Live demo" : "Coming soon"}
        </span>
      </div>
      <p className="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        <ChipContainer textArr={service.tags} />
      </div>
      {isLive && service.demoUrl ? (
        <Link href={service.demoUrl} target="_blank" rel="noreferrer">
          <Button variant="default" className="w-full sm:w-auto">
            View demo
            <Icons.externalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled className="w-full sm:w-auto">
          Launching soon
        </Button>
      )}
    </div>
  );
}
