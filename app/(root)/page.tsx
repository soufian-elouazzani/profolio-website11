import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import ServiceSection from "@/components/services/service-section";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { getFeaturedBlogs } from "@/lib/blogs";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const featuredBlogs = getFeaturedBlogs();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Software Engineer & Digital Solutions Consultant",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="flex min-h-[85vh] items-center pb-8 pt-6 md:pb-12 md:pt-16 lg:pt-20">
        <div className="container max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="mx-auto max-w-md lg:mx-0">
                <Image
                  src={profileImg}
                  height={480}
                  width={480}
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="h-auto w-full rounded-2xl border border-border object-cover shadow-lg"
                  alt="Soufian Elouazzani — Freelance Web Developer"
                  priority
                />
              </div>
            </AnimatedSection>

            <div className="order-1 flex flex-col gap-5 text-center lg:order-2 lg:text-left">
              <AnimatedText
                as="h1"
                delay={0.1}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Soufian Elouazzani
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.2}
                className="font-heading text-lg font-medium text-primary sm:text-xl"
              >
                Software Engineer & Digital Solutions Consultant
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.3}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                I build business solutions for clients: websites, e-commerce,
                booking systems, dashboards, AI assistants, automation, and
                cloud-ready deployments — practical, fast, and built to scale.
              </AnimatedText>
              <AnimatedText
                as="p"
                delay={0.35}
                className="text-sm leading-relaxed text-muted-foreground/80"
              >
                I work as an engineer first, bringing consulting, architecture,
                and delivery together so the solution fits the business instead
                of forcing the business to fit the tool.
              </AnimatedText>

              <div className="mt-2 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <AnimatedText delay={0.4}>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }))}
                    aria-label="Get a quote"
                  >
                    <Icons.contact className="mr-2 h-4 w-4" /> Get a quote
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.5}>
                  <Link
                    href="#services"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" })
                    )}
                    aria-label="View my work"
                  >
                    View my work
                  </Link>
                </AnimatedText>
                <AnimatedText delay={0.6}>
                  <Link
                    href="/resume"
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" })
                    )}
                    aria-label="View resume"
                  >
                    <Icons.post className="mr-2 h-4 w-4" /> Resume
                  </Link>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection
        direction="up"
        className="container space-y-8 bg-muted py-10 my-14"
        id="services"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.services.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.services.description}
          </AnimatedText>
        </div>
        <ServiceSection previewMode />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/services">
            <Button variant="outline" className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View all services
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant="outline" className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="engineering"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline" className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant="outline" className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant="outline" className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
