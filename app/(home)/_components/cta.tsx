import Animated from "@/components/animated";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const floatingDishes = [
  {
    src: "/assets/dish1.png",
    alt: "Dish 1",
    className: "top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]",
  },
  {
    src: "/assets/dish2.png",
    alt: "Dish 2",
    className: "bottom-6 left-4 md:bottom-10 md:left-[6%] lg:left-[10%]",
  },
  {
    src: "/assets/dish3.png",
    alt: "Dish 3",
    className: "bottom-6 right-4 md:bottom-10 md:right-[6%] lg:right-[10%]",
  },
  {
    src: "/assets/dish4.png",
    alt: "Dish 4",
    className: "top-6 right-4 md:top-10 md:right-[6%] lg:right-[10%]",
  },
];
export default function CTASection() {
  return (
    <div
      id="cta"
      className="bg-primary relative mt-44 flex min-h-100 flex-col items-center justify-center overflow-hidden px-6 md:min-h-110"
    >
      <div className="pointer-events-none absolute inset-0 mx-auto w-full max-w-7xl">
        {floatingDishes.map((dish) => (
          <Image
            key={dish.alt}
            src={dish.src}
            alt={dish.alt}
            width={100}
            height={100}
            className={cn(
              "pointer-events-auto absolute size-20 rounded-full object-cover transition-all duration-300 hover:scale-105 md:size-28 lg:size-36",
              dish.className,
            )}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Animated>
          <h1 className="text-primary-foreground font-urbanist text-3xl font-medium text-balance md:text-[40px]">
            Every Meal Is Made To Be Rememebered
          </h1>
        </Animated>

        <Animated y={20} delay={0.2}>
          <p className="text-primary-foreground mx-auto mt-4 max-w-sm">
            Join us for fresh ingredients, signature recipes and an
            unforgettable dining experience.
          </p>
        </Animated>

        <Animated delay={0.2} className="flex items-center justify-center">
          <Link href={"/"}>
            <Button
              variant={"default"}
              size={"lg"}
              className={
                "bg-background text-foreground hover:bg-background/90 mt-5 rounded-full p-6"
              }
            >
              Book Your Table
              <ArrowRight className="text-background bg-foreground size-6 rounded-full p-1 shadow-lg" />
            </Button>
          </Link>
        </Animated>
      </div>
    </div>
  );
}
