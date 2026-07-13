import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ServiceSection from "@/components/services/service-section";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.services.metadata.title,
  description: pagesConfig.services.metadata.description,
};

export default function ServicesPage() {
  return (
    <PageContainer
      title={pagesConfig.services.title}
      description={pagesConfig.services.description}
    >
      <ServiceSection showAllCategories />
    </PageContainer>
  );
}
