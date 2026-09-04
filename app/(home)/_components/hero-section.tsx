import Animated from "@/components/animated";
import BookingButton from "@/components/booking-button";
import { Star } from "lucide-react";
import Image from "next/image";

const avatars = [
  "/assets/user-1.jpeg",
  "/assets/user-2.jpeg",
  "/assets/user-3.jpeg",
  "/assets/user-4.jpeg",
];
export default function HeroSection() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 pt-20"
      style={{ backgroundImage: "url('/assets/heroBanner.png')" }}
    >
      <Animated y={-20} delay={0.2}>
        <p className="text-primary">WHERE FLAVOR MEETS ELEGANCE</p>
      </Animated>

      <Animated>
        <h1 className="font-urbanist mt-5 max-w-3xl text-center text-5xl font-medium text-balance md:text-6xl">
          Crafted for unforgettable dining momentss
        </h1>
      </Animated>

      <Animated delay={0.2}>
        <p className="text-muted-foreground mt-3 max-w-md text-center">
          Experience carefully curated menus, fresh local ingredients and
          impeccable service in a space made for every celebration.
        </p>
      </Animated>

      <Animated delay={0.2}>
        <BookingButton className="mt-8 block" />
      </Animated>

      <Animated className="mt-9 flex items-center justify-center md:justify-start">
        <div className="flex -space-x-3.5 pr-3">
          {avatars.map((src, index) => (
            <Image
              src={src}
              alt="avatar"
              width={40}
              height={40}
              key={index}
              className="border-border size-10 rounded-full border-2 transition hover:-translate-y-px"
            />
          ))}
        </div>

        <div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="text-primary fill-primary size-4" />
            ))}
          </div>
          <p className="text-muted-foreground">4.8/5 Rating - 10,000 reviews</p>
        </div>
      </Animated>
    </section>
  );
}
