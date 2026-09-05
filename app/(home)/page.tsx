import AboutSection from "./_components/about-section";
import BookingProcessSection from "./_components/booking-process-section";
import CTASection from "./_components/cta";
import DishesSection from "./_components/dishes-section";
import FAQsSection from "./_components/faqs-section";
import FeaturesSection from "./_components/features-section";
import HeroSection from "./_components/hero-section";
import StatsSection from "./_components/stats-section";
import TestimonialSection from "./_components/testimonial-section";
import TimingSection from "./_components/timing";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DishesSection />
      <FeaturesSection />
      <BookingProcessSection />
      <TimingSection />
      <TestimonialSection />
      <FAQsSection />
      <CTASection />
    </>
  );
}
