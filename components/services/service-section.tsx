import Link from "next/link";

import ServiceCard from "@/components/services/service-card";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  ServiceCategory,
  getServicesByCategory,
  serviceCategories,
} from "@/config/services";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  showAllCategories?: boolean;
  categoryFilter?: ServiceCategory;
  previewMode?: boolean;
  previewCount?: number;
}

export default function ServiceSection({
  showAllCategories = true,
  categoryFilter,
  previewMode = false,
  previewCount = 2,
}: ServiceSectionProps) {
  const categories = categoryFilter
    ? serviceCategories.filter((c) => c.id === categoryFilter)
    : serviceCategories;

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = getServicesByCategory(category.id);
        if (items.length === 0) return null;
        const visibleItems = previewMode ? items.slice(0, previewCount) : items;
        const hasMoreItems = previewMode && items.length > visibleItems.length;

        return (
          <div key={category.id} className="space-y-6">
            {showAllCategories ? (
              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                  {category.title}
                </h3>
                <p className="max-w-3xl text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ) : null}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {visibleItems.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            {hasMoreItems && (
              <div className="flex justify-start pt-1">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-xl"
                  )}
                >
                  More {category.title}
                  <Icons.chevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
