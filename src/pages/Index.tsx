import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SecurityShieldButton from "@/components/SecurityShieldButton";
import SkipLinks from "@/components/SkipLinks";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import LegalServiceSchema from "@/components/schemas/LegalServiceSchema";
import {
  HeroSkeleton,
  ServicesSkeleton,
  TestimonialsSkeleton,
} from "@/components/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load heavy components
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Planning = lazy(() => import("@/components/Planning"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQNative"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));

// Generic section skeleton for smaller sections
const SectionSkeleton = ({ className = "" }: { className?: string }) => (
  <section className={`py-20 ${className}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-1 w-20 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>
    </div>
  </section>
);

// About section skeleton
const AboutSkeleton = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-12 w-48 mx-auto" />
          <Skeleton className="h-1 w-20 mx-auto" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
        </div>
        
        {/* Gallery skeleton */}
        <div className="mb-12">
          <div className="flex gap-4 justify-center overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-80 w-72 flex-shrink-0" />
            ))}
          </div>
        </div>
        
        {/* Text skeleton */}
        <div className="space-y-4 mb-16">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
        </div>
        
        {/* Team skeleton */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-background p-8 rounded-lg">
              <Skeleton className="w-full aspect-[3/4] rounded-lg mb-4" />
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-5 w-64 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Planning section skeleton
const PlanningSkeleton = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-72 mx-auto" />
        <Skeleton className="h-1 w-20 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <Skeleton className="w-20 h-20 rounded-full mx-auto mb-4" />
            <Skeleton className="h-6 w-32 mx-auto mb-3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Skeleton className="h-14 w-48 mx-auto" />
      </div>
    </div>
  </section>
);

// FAQ section skeleton
const FAQSkeleton = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-1 w-20 mx-auto" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-4">
            <Skeleton className="h-6 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Blog section skeleton
const BlogSkeleton = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-1 w-20 mx-auto" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-border rounded-lg overflow-hidden">
            <Skeleton className="h-12 w-full" />
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact section skeleton
const ContactSkeleton = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-48 mx-auto" />
        <Skeleton className="h-1 w-20 mx-auto" />
        <Skeleton className="h-6 w-72 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
        <Skeleton className="h-80 w-full rounded-lg" />
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SchemaMarkup type="legalService" />
      <LegalServiceSchema />
      <SkipLinks />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<ServicesSkeleton />}>
          <Services />
        </Suspense>
        <Suspense fallback={<PlanningSkeleton />}>
          <Planning />
        </Suspense>
        <Suspense fallback={<TestimonialsSkeleton />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<FAQSkeleton />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<BlogSkeleton />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <SecurityShieldButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
