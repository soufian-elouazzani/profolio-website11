import ServiceCard from "@/components/services/service-card";
import {
  ServiceCategory,
  getServicesByCategory,
  serviceCategories,
} from "@/config/services";

interface ServiceSectionProps {
  showAllCategories?: boolean;
  categoryFilter?: ServiceCategory;
}

export default function ServiceSection({
  showAllCategories = true,
  categoryFilter,
}: ServiceSectionProps) {
  const categories = categoryFilter
    ? serviceCategories.filter((c) => c.id === categoryFilter)
    : serviceCategories;

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const items = getServicesByCategory(category.id);
        if (items.length === 0) return null;

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
              {items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
