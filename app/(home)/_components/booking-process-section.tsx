import Animated from "@/components/animated";
import { bookingSteps, bookingTestimonial } from "@/data/data";
import { Star } from "lucide-react";
import Image from "next/image";

export default function BookingProcessSection() {
  return (
    <section id="booking-process" className="px-auto mt-44">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-25">
        {/* Left Side */}
        <div className="flex flex-col text-center md:text-left">
          <Animated delay={0.2}>
            <p className="text-primary mb-4 font-medium uppercase">
              Table Reservation Process
            </p>
          </Animated>
          <Animated delay={0.2}>
            <h2 className="mb-16 text-4xl md:text-5xl">
              Reserve your table in three simple steps
            </h2>
          </Animated>
          <Animated className="mb-6 flex justify-center gap-0.5 md:justify-start">
            {[
              ...Array(bookingTestimonial.rating).map((_, index) => (
                <Star
                  key={index}
                  className="fill-primary text-primary size-4"
                />
              )),
            ]}
          </Animated>

          <Animated delay={0.2}>
            <p className="text-muted-foreground mb-4 max-w-xs max-md:mx-auto">
              &quot; {bookingTestimonial.quote} &quot;
            </p>
          </Animated>

          <Animated className="flex items-center justify-center gap-3 md:justify-start">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src={bookingTestimonial.authorImg}
                alt={bookingTestimonial.authorName}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <span className="text-lg">{bookingTestimonial.authorName}</span>
          </Animated>
        </div>
        {/* Right Side */}
        <div className="space-y-14 px-6 text-left md:px-0">
          {bookingSteps.map((step, index) => (
            <Animated
              key={index}
              y={150}
              delay={index * 0.15}
              className="flex items-start gap-9"
            >
              <span className="text-primary shrink-0 text-lg font-medium">
                {step.number}
              </span>
              <div className="flex flex-col">
                <h3 className="mb-5 text-xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
}
