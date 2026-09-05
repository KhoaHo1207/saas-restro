import Navbar from "@/components/navbar";
import AboutSection from "./_components/about-section";
import BookingProcessSection from "./_components/booking-process-section";
import DishesSection from "./_components/dishes-section";
import FeaturesSection from "./_components/features-section";
import HeroSection from "./_components/hero-section";
import StatsSection from "./_components/stats-section";

export default function HomePgae() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DishesSection />
      <FeaturesSection />
      <BookingProcessSection />
    </>
  );
}
